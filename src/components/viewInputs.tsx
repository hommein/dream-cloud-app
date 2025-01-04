import React, { useState, useEffect } from 'react';

interface Input {
  id: number;
  input_text: string;
  user_email: string;
  timestamp: string;
}

const ViewInputs = () => {
  const [inputs, setInputs] = useState<Input[]>([]);

  useEffect(() => {
    const fetchInputs = async () => {
      try {
        const response = await fetch('/api/view-inputs');
        const data = await response.json() as Input[];  // Add type assertion here
        setInputs(data);
      } catch (error) {
        console.error('Failed to fetch inputs:', error);
      }
    };

    fetchInputs();
  }, []);

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl text-white mb-8 font-mono">dream cloud inputs</h1>
        <div className="space-y-4">
          {inputs.map((input) => (
            <div 
              key={input.id} 
              className="bg-gray-900 p-4 rounded-lg border border-gray-800"
            >
              <p className="text-white font-mono">{input.input_text}</p>
              <div className="mt-2 flex justify-between text-sm text-gray-500">
                <span>{input.user_email}</span>
                <span>{new Date(input.timestamp).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewInputs;