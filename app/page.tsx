import { cn } from "@/lib/utils";
import { ChatInput } from "@/registry/default/components/chat-input";
import { ChatInput1 } from "@/registry/default/components/chat-input-1";
import ChatInput2 from "@/registry/default/components/chat-input-2";
import ChatInput3 from "@/registry/default/components/chat-input-3";
import ChatInput4 from "@/registry/default/components/chat-input-4";
import VoiceToolbar1 from "@/registry/default/components/voice-toolbar-1";
import { Suggestions } from "@/registry/default/components/suggestions";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const categories = [
    "Chat Input",
    "Suggestions",
    "Chat List",
    "Voice Chat",
    "Chat Search",
    "Inline Agent",
    "AI tool state",
    "Image gen",
    "Share Chat",
    "Chat Message",
    "Model Select",
    "Agent Steps",
    "Model Controls",
    "Attachements",
    "Chat Files",
    "Search Sources",
    "AI Style",
  ];
  return (
    <>
      <div className="border-b border-dashed border-neutral-200">
        <div className="max-w-6xl mx-auto w-full flex flex-col px-10 py-20 border-x border-neutral-200 bg-white">
          <h1 className="text-4xl md:text-5xl w-fit font-medium max-w-3xl leading-tighter tracking-tighter pb-4">
            The modern UI components for building AI applications
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl">
            A collection of components to build AI applications, built for power
            users.
          </p>
        </div>
      </div>
      <div className="border-b border-dashed border-neutral-200">
        <div className="max-w-6xl mx-auto w-full flex  flex-wrap divide-x divide-y divide-dashed divide-neutral-200 border-x border-neutral-200 bg-white">
          <div className="p-10 flex-1 bg-neutral-50 min-w-[300px]">
            <h2
              className={cn(
                "text-xl font-bold text-center",
                spaceGrotesk.className
              )}
            >
              Chat Input
            </h2>
          </div>
          <div className="bg-pattern w-8" />
          <div className="p-10 flex-1 bg-neutral-50 min-w-[300px]">
            <h2
              className={cn(
                "text-xl font-bold text-center",
                spaceGrotesk.className
              )}
            >
              Suggestions
            </h2>
          </div>
          <div className="bg-pattern w-8" />
          <div className="p-10 flex-1 bg-neutral-50 min-w-[300px]">
            <h2
              className={cn(
                "text-xl font-bold text-center",
                spaceGrotesk.className
              )}
            >
              Chat List
            </h2>
          </div>
          <div className="p-10 flex-1 bg-neutral-50 min-w-[300px]">
            <h2
              className={cn(
                "text-xl font-bold text-center",
                spaceGrotesk.className
              )}
            >
              Voice Chat
            </h2>
          </div>
          <div className="bg-pattern w-8" />
          <div className="p-10 flex-1 bg-neutral-50 min-w-[300px]">
            <h2
              className={cn(
                "text-xl font-bold text-center",
                spaceGrotesk.className
              )}
            >
              {categories[3]}
            </h2>
          </div>
          <div className="bg-pattern w-8" />
          <div className="p-10 flex-1 bg-neutral-50 min-w-[300px]">
            <h2
              className={cn(
                "text-xl font-bold text-center",
                spaceGrotesk.className
              )}
            >
              Chat List
            </h2>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-6xl mx-auto w-full flex flex-col py-10 border-x border-neutral-200 space-y-10 bg-white">
          <ChatInput />
          <div className="border-t border-dashed border-neutral-200 w-full" />
          <ChatInput1 />
          <div className="border-t border-dashed border-neutral-200 w-full" />
          <ChatInput2 />
          <div className="border-t border-dashed border-neutral-200 w-full" />
          <ChatInput3 />
          <div className="border-t border-dashed border-neutral-200 w-full" />
          <ChatInput4 />
          <div className="border-t border-dashed border-neutral-200 w-full" />
          <VoiceToolbar1 />
          <div className="border-t border-dashed border-neutral-200 w-full" />
          <Suggestions />
        </div>
      </div>
    </>
  );
}
