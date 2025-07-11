import React from "react";

/**
 * ChatInput3 - A soft, gradient chat input bar inspired by modern AI chat UIs.
 * Includes model selection, globe, search, attachment icons, and a floating send button.
 */
const icons = {
  globe: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></svg>
  ),
  search: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
  ),
  attachment: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 13V7a5 5 0 0 0-10 0v8a5 5 0 0 0 10 0V9"/></svg>
  ),
  send: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
  ),
};

export default function ChatInput3() {
  return (
    <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-2xl p-4 w-full max-w-2xl mx-auto shadow-sm">
      <input
        className="w-full bg-transparent outline-none text-base placeholder-pink-400 px-2 py-3 rounded-xl"
        placeholder="Type your message here..."
      />
      <div className="flex items-center gap-3 mt-4">
        <button className="text-pink-700 font-semibold text-sm flex items-center gap-1 px-2 py-1 rounded hover:bg-pink-100">
          Gemini 2.5 Flash
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <button className="p-2 rounded hover:bg-pink-100" aria-label="Globe">{icons.globe}</button>
        <button className="p-2 rounded hover:bg-pink-100 flex items-center gap-1" aria-label="Search">{icons.search}<span className="text-xs font-medium">Search</span></button>
        <button className="p-2 rounded hover:bg-pink-100" aria-label="Attach file">{icons.attachment}</button>
      </div>
      <button className="absolute bottom-4 right-4 bg-pink-300 hover:bg-pink-400 text-white p-3 rounded-lg shadow transition-colors" aria-label="Send">
        {icons.send}
      </button>
    </div>
  );
} 