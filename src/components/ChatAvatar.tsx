import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface ChatAvatarProps {
  role: string;
}

export function ChatAvatar({ role }: ChatAvatarProps) {
  return (
    <Avatar>
      {role === "user" ? (
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
  );
}
