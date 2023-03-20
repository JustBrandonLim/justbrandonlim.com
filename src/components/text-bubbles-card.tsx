"use client";

import { useRef, useState, useEffect, KeyboardEvent } from "react";

export default function TextBubblesCard() {
  const [displayedMessages, setDisplayedMessages] = useState([""]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedMessages(displayedMessages.slice(1));
    }, 3000);

    return () => clearTimeout(timer);
  }, [displayedMessages]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const key = event.key;

    if (key.length == 1) setCurrentMessage(currentMessage + key);
    else if (key == "Backspace") setCurrentMessage(currentMessage.slice(0, -1));
    else if (key == "Enter") {
      event.preventDefault();

      if (displayedMessages.length >= 3) setDisplayedMessages([...displayedMessages.slice(1), currentMessage]);
      else setDisplayedMessages([...displayedMessages, currentMessage]);

      setCurrentMessage("");
      document.getElementById("text-input")!.innerHTML = "";
    }
  };

  return (
    <div className="font-fira-code bg-[#00FF00] border border-[#FF0000] h-96 flex flex-col justify-end gap-5 p-5">
      <div className="flex flex-col gap-5">
        {displayedMessages.map((message, i) => {
          if (message.length == 0) return;

          return (
            <p className="whitespace-pre p-3 bg-white min-w-[5rem] w-fit rounded-bl-none rounded-full" key={i}>
              {message}
            </p>
          );
        })}
      </div>
      <div
        className={`${
          currentMessage && "opacity-100"
        } whitespace-pre p-3 opacity-0 transition-opacity ease-in-out duration-150 bg-white rounded-bl-none rounded-full outline-none min-w-[5rem] w-fit`}
        id="text-input"
        contentEditable="true"
        onKeyDown={(event) => handleKeyDown(event)}
      />
    </div>
  );
}
