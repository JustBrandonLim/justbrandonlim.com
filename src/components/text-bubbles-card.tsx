"use client";

import { useState, useEffect, FormEvent, KeyboardEvent } from "react";

export default function TextBubblesCard() {
  const [displayedMessages, setDisplayedMessages] = useState([""]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedMessages(displayedMessages.slice(1));
    }, 5000);

    return () => clearTimeout(timer);
  }, [displayedMessages]);

  const handleInput = (event: FormEvent<HTMLDivElement>) => {
    setCurrentMessage(event.currentTarget.textContent!);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key == "Enter") {
      event.preventDefault();

      if (displayedMessages.length >= 3) setDisplayedMessages([...displayedMessages.slice(1), currentMessage]);
      else setDisplayedMessages([...displayedMessages, currentMessage]);

      setCurrentMessage("");
      document.getElementById("text-input")!.innerHTML = "";
    }
  };

  return (
    <div className="font-fira-code bg-[#00FF00] border border-[#FF0000] h-96 flex flex-wrap flex-col justify-end gap-5 p-5">
      <div className="flex flex-col gap-5">
        {displayedMessages.map((message, i) => {
          if (message.length == 0) return;

          return (
            <p className="min-w-[5rem] max-w-lg break-words whitespace-pre-wrap rounded-lg rounded-bl-none p-3 bg-white w-fit" key={i}>
              {message}
            </p>
          );
        })}
      </div>
      <div
        className={`${
          currentMessage && "opacity-100"
        } min-w-[5rem] w-fit break-words max-w-lg whitespace-pre-wrap p-3 opacity-0 bg-white rounded-bl-none rounded-lg outline-none`}
        id="text-input"
        contentEditable="true"
        onInput={(event) => handleInput(event)}
        onKeyDown={(event) => handleKeyDown(event)}
      />
    </div>
  );
}
