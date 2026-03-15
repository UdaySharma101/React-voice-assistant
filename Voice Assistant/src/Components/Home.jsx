import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-linear-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-between py-10">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-wide">
          Voice Assistant
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Listening ready...
        </p>
      </div>

      {/* Chat Area */}
      <div className="w-[90%] max-w-xl flex flex-col gap-4">

        {/* AI Message */}
        <div className="bg-gray-800 px-4 py-3 rounded-2xl w-fit max-w-[80%]">
          <p className="text-sm text-gray-300">AI</p>
          <p>How can I help you?</p>
        </div>

        {/* User Message */}
        <div className="bg-blue-600 px-4 py-3 rounded-2xl w-fit max-w-[80%] self-end">
          <p className="text-sm text-blue-200">User</p>
          <p>Your input will appear here</p>
        </div>

      </div>

      {/* Mic Button */}
      <div className="flex flex-col items-center gap-3">
        <button className="h-16 w-16 rounded-full bg-blue-600 hover:bg-blue-500 transition flex items-center justify-center text-xl shadow-lg">
          🎤
        </button>

        <p className="text-gray-400 text-sm">Tap to Speak</p>
      </div>

    </div>
  );
};

export default Home;
