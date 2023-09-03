"use client";

import { useChat } from "ai/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import clsx from "clsx";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/chat",
  });

  const [classN, setClassN] = useState("");

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Chat IA</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[560px] w-full pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className={clsx("flex gap-3 py-1.5 text-sm text-slate-200", {
                  "flex-row-reverse": message.role === "user",
                })}
              >
                <ChatAvatar role={message.role} />
                <Message role={message.role} content={message.content} />
              </div>
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
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
