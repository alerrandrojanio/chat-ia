import { Chat } from "@/components/Chat";
import { DarkModeSwitch } from "@/components/DarkModeSwitch";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <Chat />
    </div>
  );
}
