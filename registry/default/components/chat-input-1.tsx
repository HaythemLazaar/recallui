import React from "react";

export function ChatInput1() {
  return (
    <div className="border rounded-lg shadow-sm bg-white w-full max-w-xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center gap-2">
          <span className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">page.tsx</span>
        </div>
        <span className="text-green-600 text-xs font-semibold">+1 -1 ✓</span>
      </div>
      {/* Subheader */}
      <div className="px-4 py-1 border-b bg-gray-50 text-xs text-gray-500 flex gap-2">
        <span>Ask</span>
        <span>•</span>
        <span>learn</span>
        <span>•</span>
        <span>brainstorm</span>
      </div>
      {/* Input Area */}
      <div className="px-4 py-3">
        <textarea
          className="w-full border rounded p-2 text-sm resize-none focus:outline-none focus:ring"
          rows={3}
          placeholder="Type your message..."
        />
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-2 border-t bg-gray-50">
        <button className="bg-black text-white px-4 py-1 rounded text-sm font-medium">Ask</button>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">@</span>
          <select className="text-xs bg-transparent focus:outline-none">
            <option>claude-4-sonnet</option>
            <option>gpt-4</option>
            <option>gpt-3.5</option>
          </select>
        </div>
      </div>
    </div>
  );
} 