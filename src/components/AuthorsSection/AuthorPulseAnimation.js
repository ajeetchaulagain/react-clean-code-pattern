import React from "react";

const AuthorPulseAnimation = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 mb-5">
      <div className="animate-pulse rounded-lg border shadow-xl overflow-hidden bg-white">
        <div className="object-contain bg-gray-300 w-5/12 h-20 rounded-full"></div>
        <div className="px-5 py-5">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-800 text-xl font-bold h-6 bg-gray-300"></h2>
          </div>
          <p className="text-gray-600 bg-gray bg-gray-400 h-4"></p>
        </div>
      </div>
    </div>
  );
};

export default AuthorPulseAnimation;
