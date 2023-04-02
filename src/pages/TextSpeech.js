import React, { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'

const TextSpeech = () => {

    const [text, setText] = useState('');
    const { speak } = useSpeechSynthesis();

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => speak({ text })}>Speak</button>
        </div>
    )
}

export default TextSpeech