/* eslint-disable */
import React from "react";

const GamesLoading = () => {
  return (
    <div className="absolute p-6 mt-4  bg-gray-900 rounded-lg w-110  ml-4 animate-pulse">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="rounded-full w-6 h-6 bg-gray-700"></div>
        <div className="flex-1 space-y-1">
          <div className="h-4 bg-gray-700 rounded w-24"></div>
          <div className="h-3 bg-gray-700 rounded w-40"></div>
        </div>
      </div>

      {/* Time & Owner */}
      <div className="mt-4 flex justify-between items-center text-sm">
        <div className="flex w-46 items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg"></div>
        <div className="flex w-32 items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg"></div>
      </div>

      {/* Features */}
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex flex-wrap justify-between gap-3">
          <span className="w-32 h-6 bg-gray-700 rounded-md"></span>
          <span className="w-24 h-4 bg-gray-700 rounded-md"></span>
        </div>
        <div className="w-32 h-6 bg-gray-700 rounded-md"></div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <span className="w-20 h-6 bg-gray-700 rounded-md"></span>
        <span className="w-16 h-6 bg-gray-700 rounded-lg"></span>
      </div>
    </div>
  );
};

export default GamesLoading;
