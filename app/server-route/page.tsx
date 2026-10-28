import React from "react";

export default function ServerPage() {
  const variable = process.env.APP_NAME;
  const isAvaiable = variable !== undefined ? true : false;
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <p className="text-sm font-light">Next.js App with env variable</p>
      <div className="text-4xl mt-3">
        {isAvaiable ? (
          <h1>{variable}</h1>
        ) : (
          <h1>Failed to load the env Variables</h1>
        )}
      </div>
    </div>
  );
}
