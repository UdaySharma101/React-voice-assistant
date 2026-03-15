import React, { useEffect, useState } from "react";

const Home = () => {
   const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className="h-screen w-screen bg-linear-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-between py-10">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-wide animate-bounce">
          Voice Assistant
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Listening ready...
        </p>
      </div>

      {/* Chat Area */}
      <div className="w-[90%] max-w-xl flex flex-col gap-4">

        {/* AI Message */}
         <div className="overflow-hidden">
      <div
        className={`bg-gray-800 px-4 py-3 rounded-2xl w-fit max-w-[80%] 
        transform transition-all duration-1000 ease-out
        ${show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
      >
        <p className="text-sm text-gray-300">AI</p>
        <p>How can I help you?</p>
      </div>
    </div>
        {/* User Message */}
        <div className="bg-blue-600 px-4 py-3 rounded-2xl w-fit max-w-[80%] self-end">
          <p className="text-sm text-blue-200">User</p>
          <p>Your input will appear here</p>
        </div>

      </div>

      {/* Mic Button */}
      <div className="flex flex-col items-center gap-3">
        <button className="h-16 w-16 rounded-full bg-blue-600 hover:bg-blue-500 transition flex items-center justify-center text-xl shadow-lg cursor-pointer hover:scale-105 active:border-3 active:animate-pulse">
          🎤
        </button>

        <p className="text-gray-400 text-sm">Hold to Speak</p>
      </div>

    </div>
  );
};

export default Home;
