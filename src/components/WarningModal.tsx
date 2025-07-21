"use client";
/* eslint-disable */

import React, { useState } from "react";

const WarningModal = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
        <div className="div absolute inset-0 w-full h-full bg-black opacity-50 "></div>
      <div className="bg-white relative border-l-4 border-red-600 rounded-2xl shadow-xl max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4">⚠️ Danger Warning</h2>
        <p className="text-gray-700 mb-6">
          This website is currently under development. Some features may not work as expected.
        </p>
        <button
          onClick={() => setShow(false)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WarningModal;
