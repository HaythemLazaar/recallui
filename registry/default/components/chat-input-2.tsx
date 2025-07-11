import React from "react";

/**
 * ChatInput2 - A modern, dark-themed chat input bar inspired by AI chat UIs.
 * Includes model selection, image upload, action icons, and chat privacy indicator.
 */
const icons = {
  attachment: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 13V7a5 5 0 0 0-10 0v8a5 5 0 0 0 10 0V9"/></svg>
  ),
  globe: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></svg>
  ),
  send: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
  ),
  image: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
  ),
};

export default function ChatInput2() {
  return (
    <div className="bg-neutral-900 text-neutral-100 rounded-xl p-4 w-full max-w-2xl mx-auto shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <button className="bg-neutral-800 hover:bg-neutral-700 text-sm px-3 py-1 rounded font-medium border border-neutral-700">Choose models</button>
        <button className="p-2 rounded hover:bg-neutral-800" aria-label="Upload image">{icons.image}</button>
        <input className="flex-1 bg-transparent outline-none px-2 text-base placeholder-neutral-400" placeholder="Type your message..." />
        <div className="flex items-center gap-1 ml-2">
          <button className="p-2 rounded hover:bg-neutral-800" aria-label="Attach file">{icons.attachment}</button>
          <button className="p-2 rounded hover:bg-neutral-800" aria-label="Globe/World">{icons.globe}</button>
          <button className="p-2 rounded hover:bg-orange-600 bg-orange-500" aria-label="Send">{icons.send}</button>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs text-neutral-400 mt-1">
        <span>This chat is public.</span>
        <a href="#" className="text-orange-400 hover:underline font-medium">Start a new private chat &rarr;</a>
      </div>
    </div>
  );
} 