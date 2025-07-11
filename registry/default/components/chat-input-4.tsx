import { ArrowUp, Paperclip } from "lucide-react";
import React from "react";

export default function ChatInput4() {
  return (
    <div className="flex items-center bg-neutral-900 rounded-full px-4 py-2 w-full max-w-xl mx-auto shadow-md">
      <input
        className="flex-1 bg-transparent outline-none text-base placeholder-neutral-400 text-neutral-100 px-2"
        placeholder="Ask a follow-up"
      />
      <button
        className="p-2 rounded-full hover:bg-neutral-800 ml-2"
        aria-label="Attach file"
      >
        <Paperclip className="text-neutral-300" />
      </button>
      <button
        className="ml-2 bg-neutral-700 hover:bg-neutral-600 text-neutral-100 p-2 rounded-full transition-colors"
        aria-label="Send"
      >
        <ArrowUp className="text-neutral-300" />
      </button>
    </div>
  );
}
