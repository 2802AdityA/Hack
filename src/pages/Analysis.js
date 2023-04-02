import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import Sentiment from 'sentiment';
import { Analyzer } from 'web-audio-analyser';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { async } from 'q';
import { useSpeechSynthesis } from 'react-speech-kit'

const API_KEY = "YOUR_API_KEY";
const systemMessage = {
  "role": "system", "content": "The user has social anxiety or shy to talk to people and is talking to you to improve his communication skills and overcome the fear so give answers like a human being and start with any topic of conversation from the start"
}
function Analysis() {

  const [listening, setListening] = useState(false);
  const [confidenceData, setConfidenceData] = useState([]);
  const [sentimentData, setSentimentData] = useState([]);
  const [transcript, setTranscript] = useState('');
  const [clarityData, setClarityData] = useState([]);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Dan! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const [text, setText] = useState();
  const { speak } = useSpeechSynthesis();


  const toggleListening = () => {
    if (listening) {
      recognition.stop();
      recognition.removeEventListener('result', handleResult);
    } else {
      recognition.addEventListener('result', handleResult);
      recognition.continuous = true;
      recognition.start();
    }
    setListening(!listening);
  };

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  const handleSpeak = async () => {
    await speak({ text });
  }

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      }).then((data) => {
        return data.json();
      }).then((data) => {
        console.log(data);

        console.log(data.choices[0].message.content);
        const variableValue = data.choices[0].message.content;
        speak({ text: variableValue })

        setText(variableValue);

        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]);

        setIsTyping(false);

      });
  }


  const handleResult = async (event) => {
    const message = event.results[0][0].transcript;
    const confidence = event.results[0][0].confidence;
    const sentiment = new Sentiment().analyze(message).comparative;
    const clarity = calculateClarity(message);

    // Set the transcript to the latest speech input
    setTranscript(message);

    // Append the latest confidence, sentiment and clarity data
    setConfidenceData(confidenceData.concat([{ message, confidence }]));
    setSentimentData(sentimentData.concat([{ message, sentiment }]));
    setClarityData(clarityData.concat([{ message, clarity }]));
    await handleSend(message);
  };

  const calculateClarity = (message) => {
    // Split the message into words
    const words = message.split(' ');

    // Calculate the total number of syllables in the message
    let syllableCount = 0;
    words.forEach((word) => {
      syllableCount += countSyllables(word);
    });

    // Calculate the average number of syllables per word
    const avgSyllablesPerWord = syllableCount / words.length;

    // Calculate the clarity score
    const clarity = 206.835 - (1.015 * avgSyllablesPerWord) - (84.6 * (words.length / message.length));

    // Convert the clarity score to a percentage value between 0 and 100
    const clarityPercentage = (clarity / 206.835) * 100;

    return clarityPercentage.toFixed(2);
  };


  const countSyllables = (word) => {
    word = word.toLowerCase();
    if (word.length <= 3) {
      return 1;
    }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    const matches = word.match(/[aeiouy]{1,2}/g);
    return matches ? matches.length : 1;
  };


  useEffect(() => {
    const confidenceCtx = document.getElementById('confidence-chart');
    const sentimentCtx = document.getElementById('sentiment-chart');
    const clarityCtx = document.getElementById('clarity-chart');

    const confidenceChart = new Chart(confidenceCtx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Confidence Level',
            data: confidenceData.map((data) => ({ x: data.message, y: data.confidence })),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            pointRadius: 0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Message',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Confidence',
            },
            min: 0,
            max: 1,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    const sentimentChart = new Chart(sentimentCtx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Sentiment Analysis',
            data: sentimentData.map((data) => ({ x: data.message, y: data.sentiment })),
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            pointRadius: 0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Message',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Sentiment Score',
            },
            min: -1,
            max: 1,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });


    const clarityChart = new Chart(clarityCtx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Clarity Score',
            data: clarityData.map((data) => ({ x: data.message, y: data.clarity })),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            pointRadius: 0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Message',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Clarity (%)',
            },
            min: 0,
            max: 100,
            ticks: {
              callback: (value) => `${value}%`,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      confidenceChart.destroy();
      sentimentChart.destroy();
      clarityChart.destroy();
    };
  }, [confidenceData, sentimentData]);

  const recognition = new window.webkitSpeechRecognition();
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();


  // Listen for the onaudioprocess event to display the text in real-time
  recognition.addEventListener('audioprocess', (event) => {
    const message = event.results[0][0].transcript;
    setTranscript(message);
  });

  return (<>
    <div style={{ marginTop: "150px", textAlign: "center" }}>
      <button onClick={toggleListening} style={{ border: "1px solid black", padding: "5px 10px", borderRadius: "10px" }}>
        {
          listening ? 'Stop Listening' : 'Start Listening'
        }
      </button>
    </div>
    <div className="App">
      <div style={{ position: "relative", height: "800px", width: "700px", margin: "30px auto" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                // console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
    <div>
      <h1 style={{ textAlign: "center", fontSize: "30px", marginTop: "50px"}}>Voice Analysis Charts</h1>
      <div style={{ textAlign: "center", width: "800px", margin: "30px auto", border: "1px solid #E3E2DF", padding: "20px", borderRadius: "30px" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "25px" }}>Confidence Chart</h2>
        <canvas id="confidence-chart" />
      </div>
      <div style={{ textAlign: "center", width: "800px", margin: "50px auto", border: "1px solid #E3E2DF", padding: "20px", borderRadius: "30px" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "25px" }}>Sentiment Chart</h2>
        <canvas id="sentiment-chart" />
      </div>
      <div style={{ textAlign: "center", width: "800px", margin: "50px auto", border: "1px solid #E3E2DF", padding: "20px", borderRadius: "30px" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "25px" }}>Clarity Chart</h2>
        <canvas id="clarity-chart" />
      </div>
    </div>
  </>
  );
}

export default Analysis;

