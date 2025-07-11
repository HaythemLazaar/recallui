import React from "react";

/**
 * VoiceToolbar1 - A toolbar with pill-shaped buttons and a description box.
 */
const features = [
  { label: "Text to Speech", icon: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 3v18M5 9h14M5 15h14"/></svg>
  ), active: true },
  { label: "Voice Changer", icon: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15s1.5-2 4-2 4 2 4 2"/></svg>
  ) },
  { label: "Dubbing", icon: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 8h8v8H8z"/></svg>
  ) },
  { label: "Text to SFX", icon: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 12h16M12 4v16"/></svg>
  ) },
  { label: "Voice Cloning", icon: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 9h6v6H9z"/></svg>
  ), active: true },
];

export default function VoiceToolbar1() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-4">
        {features.map((f) => (
          <button
            key={f.label}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors
              ${f.active ? "bg-white border-black text-black shadow" : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"}
            `}
          >
            {f.icon}
            <span className="whitespace-nowrap">{f.label.toUpperCase()}</span>
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl p-4 shadow text-gray-800 text-base">
        The ElevenLabs voice generator can deliver high-quality, human-like speech in 32 languages. Perfect for audiobooks, video voiceovers, commercials, and more.
      </div>
    </div>
  );
} 