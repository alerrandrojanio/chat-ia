"use client";

import { useChat } from "ai/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Message } from "./Message";
import { ChatAvatar } from "./ChatAvatar";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { DarkModeSwitch } from "./DarkModeSwitch";

const ScrollToBottom = () => {
  const scroll = useRef<HTMLDivElement>(null);

  useEffect(() => scroll.current?.scrollIntoView());

  return <div ref={scroll} />;
};

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/chat",
  });

  return (
    <Card className="w-[450px] bg-slate-200 dark:bg-slate-950">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-col gap-1">
          <CardTitle>Chat IA</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </div>
        <DarkModeSwitch />
      </CardHeader>
      <CardContent>
        <ScrollArea className="flex h-[560px] w-full flex-col-reverse overflow-y-auto pr-4">
          {messages.map((message) => {
            return (
              <>
                <div
                  key={message.id}
                  className={clsx("flex gap-3 py-1.5 text-sm text-slate-200", {
                    "flex-row-reverse": message.role === "user",
                  })}
                >
                  <ChatAvatar role={message.role} />
                  <Message role={message.role} content={message.content} />
                </div>
                <ScrollToBottom />
              </>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
            className="dark:bg-slate-900"
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
