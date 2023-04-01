import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function Room() {
    const { roomID } = useParams();
    console.log(roomID);

    const meeting = async (element) => {
        const appID = 78778157;
        const serverSecret = "91dfb27095046f6783d3a0cb9c977692";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            Date.now().toString(),
            "YOUR NAME"
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomID,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    }

    useEffect(() => {
        const element = document.getElementById("meeting");
        meeting(element);
    }, []);

    return (
        <div ref={meeting} style={{ width: '100vw', height: '100vh' }}>
            <h1>Room</h1>
        </div>
    );
}