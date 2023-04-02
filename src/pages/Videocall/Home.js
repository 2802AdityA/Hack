import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [roomCode, setRoomCode] = useState("");
  console.log(roomCode);

  const navigate = useNavigate();

  const submitCode = (event) => {
    event.preventDefault();
    navigate(`/room/${roomCode}`);

  }

  return (
    <div className="">
      <div className="relative">
        <div className=" absolutemax-h-[30rem] flex overflow-hidden ">
        </div>
        <div className="absolute top-0 left-0 w-full  flex items-center justify-center">
        <form action="" onSubmit={submitCode}
          className="flex flex-col items-center justify-center mt-60">
          <label htmlFor="" className="font-bold text-[50px] pt-12 text-black">Enter The Room Code</label>
          <input
            type="text"
            required
            placeholder="Enter the room code"
            value={roomCode}
            onChange={(event) => setRoomCode(event.target.value)}
            className="border-2 border-black rounded-md p-3 w-full pl-8 mt-12"
          />
          <button type="submit"
            className="bg-orange-500 text-white font-bold text-[20px] p-2 rounded-md mt-12"
          >ENTER ROOM</button>
        </form>
        </div>
      </div>
    </div>

  );
}
