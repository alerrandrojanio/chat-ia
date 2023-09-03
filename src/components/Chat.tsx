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

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/chat",
  });

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
                className="flex gap-3 py-1.5 text-sm text-slate-200"
              >
                <Avatar>
                  {message.role === "user" ? (
                    <>
                      <AvatarFallback>AJ</AvatarFallback>
                      <AvatarImage src="https://github.com/alerrandrojanio.png" />
                    </>
                  ) : (
                    <>
                      <AvatarFallback>R2</AvatarFallback>
                      <AvatarImage src="/r2.jpg" />
                    </>
                  )}
                </Avatar>

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-50">
                    {message.role === "user" ? "Alerrandro:" : "R2D2:"}
                  </span>
                  {message.content}
                </p>
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
