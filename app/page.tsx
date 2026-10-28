"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [variable, setVariable] = useState<string | null>(null);
  const [isAvaiable, setIsAvaiable] = useState<boolean>(false);

  useEffect(() => {
    const getVariable = async () => {
      const variableFromEnv = process.env.NEXT_PUBLIC_APP_NAME as string;
      const valid = variableFromEnv !== undefined ? true : false;
      setIsAvaiable(valid);
      if (valid == true) {
        setVariable(variableFromEnv);
      }
    };
    getVariable();
  });

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
