import React, { useState } from 'react';

const characters = [
  { name: "Flirty AF", style: "😉", greeting: "Hey gorgeous, looking good today 😘" },
  { name: "Brutally Honest", style: "🪞", greeting: "You look... like you’ve had better days." },
  { name: "Therapist", style: "🧠", greeting: "Remember, you are doing your best, and that is enough." },
];

export default function MirrorMindApp() {
  const [character, setCharacter] = useState(characters[0]);
  const [response, setResponse] = useState(character.greeting);

  const handleCharacterSelect = (name) => {
    const newChar = characters.find((c) => c.name === name);
    setCharacter(newChar);
    setResponse(newChar.greeting);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">MirrorMind</h1>
      <p className="mb-2">Choose your reflection:</p>
      <div className="flex gap-2 mb-4">
        {characters.map((char) => (
          <button
            key={char.name}
            onClick={() => handleCharacterSelect(char.name)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {char.style} {char.name}
          </button>
        ))}
      </div>
      <div className="w-full max-w-lg bg-gray-800 rounded-lg p-6 text-xl text-center">
        {response}
      </div>
    </div>
  );
}
