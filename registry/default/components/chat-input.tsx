"use client";

import { Button } from "@/components/ui/button";
import { FiArrowUp } from "react-icons/fi";
import React from "react";
import { VscSettings } from "react-icons/vsc";
import { ChevronDown, Paperclip, Plus, Lightbulb, Megaphone, Globe, Pen, ImageIcon, CheckIcon, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { useDropzone } from "react-dropzone";

export function ChatInput({ className }: { className?: string }) {
  const [value, setValue] = React.useState("");
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [selectedModel, setSelectedModel] = React.useState("sonnet");
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = React.useState<string[]>([]);

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setUploadedFiles((prev) => [...prev, ...acceptedFiles]);
      setPreviewUrls((prev) => [
        ...prev,
        ...acceptedFiles.map((file) => file.type.startsWith("image/") ? URL.createObjectURL(file) : "")
      ]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    noClick: true,
  });

  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [value]);

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      {...getRootProps()}
      className={cn(
        "w-full max-w-3xl mx-auto border rounded-2xl border-neutral-200 ring ring-neutral-200/20 p-4 gap-2 flex flex-col shadow-xs bg-white sticky bottom-2 relative transition-colors",
        isDragActive ? "bg-neutral-100" : "",
        className
      )}
    >
      <input {...getInputProps()} />
      {uploadedFiles.length > 0 && (
        <div className="flex gap-2 mb-2">
          {uploadedFiles.map((file, idx) => (
            <div key={idx} className="relative size-14 z-10 flex items-center gap-2 bg-white rounded-xl shadow p-2" style={previewUrls[idx] ? { backgroundImage: `url(${previewUrls[idx]})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}>
              {!previewUrls[idx] && (
                <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 rounded-lg border">
                  {/* Generic file icon */}
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#e5e7eb"/><path d="M8 16h8M8 12h8M8 8h8" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
              )}
 
              <button
                type="button"
                onClick={() => handleRemoveFile(idx)}
                className="size-4 absolute top-1 right-1 flex items-center justify-center rounded-full bg-neutral-200 hover:bg-neutral-300 transition-colors"
                aria-label="Remove file"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#d1d5db"/><path d="M5.5 5.5l5 5m0-5l-5 5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>
          ))}
        </div>
      )}
      <textarea
        ref={textareaRef}
        className="w-full resize-none min-h-[60px] max-h-40 overflow-auto border-none focus:ring-0 focus:outline-none bg-transparent text-sm placeholder:text-neutral-600"
        placeholder="Ask me anything..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={1}
      />
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border-neutral-200 bg-white text-neutral-500 shadow-none p-0"
            >
              <Plus className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>
              <Paperclip /> Upload File
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Add from apps</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Github</DropdownMenuItem>
                  <DropdownMenuItem>Google Drive</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border-neutral-200 bg-white text-neutral-500 shadow-none"
            >
              <VscSettings className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Pen className="size-4" />
                Use style
              </span>
              <ChevronRight className="size-4 text-muted-foreground" />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <div className="flex items-center justify-between px-2 py-1.5">
              <span className="flex items-center gap-2">
                <Globe className="size-4" />
                Web search
              </span>
              <Switch checked />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="border-neutral-200 bg-white text-neutral-500 shadow-none"
            >
              <VscSettings className="size-5" /> Tools
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>
              <Lightbulb className="mr-2 size-4" /> Think for longer
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Megaphone className="mr-2 size-4" /> Run deep research
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ImageIcon className="mr-2 size-4" /> Create an image
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Globe className="mr-2 size-4" /> Search the web
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pen className="mr-2 size-4" /> Write or code
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-none bg-white text-neutral-500 shadow-none gap-1 ml-auto min-w-[160px] justify-between"
            >
              <span className="flex flex-col items-start text-left">
                <span className="text-sm font-medium">
                  {selectedModel === "opus" ? "Claude Opus 4" : "Claude Sonnet 4"}
                </span>
              </span>
              <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[260px]">
            <DropdownMenuItem
              onSelect={() => setSelectedModel("opus")}
              className="flex flex-col items-start gap-0.5 py-2"
            >
              <div className="flex items-center w-full">
                <span className="text-sm font-medium">Claude Opus 4</span>
                <Badge variant="secondary" className="ml-2">PRO</Badge>
                {selectedModel === "opus" && <CheckIcon className="ml-auto size-4 text-primary" />}
              </div>
              <span className="text-xs text-muted-foreground">Powerful, large model for complex challenges</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => setSelectedModel("sonnet")}
              className="flex flex-col items-start gap-0.5 py-2"
            >
              <div className="flex items-center w-full">
                <span className="text-sm font-medium">Claude Sonnet 4</span>
                {selectedModel === "sonnet" && <CheckIcon className="ml-auto size-4 text-primary" />}
              </div>
              <span className="text-xs text-muted-foreground">Smart, efficient model for everyday use</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center justify-between">
              <span>More models</span>
              <ChevronRight className="size-4 ml-2" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          size="icon"
          className="border-neutral-200 bg-purple-500 text-white hover:bg-purple-600 shadow-none"
        >
          <FiArrowUp className="size-5" />
        </Button>
      </div>
    </div>
  );
}
