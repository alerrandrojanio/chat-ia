import { cva, type VariantProps } from "class-variance-authority";

export interface MessageProps {
  role: string;
  content: string;
}

const messageVariants = cva("", {
  variants: {
    variant: {
      user: "",
      assistant: "",
    },
  },
});

export function Message({ role, content }: MessageProps) {
  return (
    <>
      {role === "user" ? (
        <p className="max-w-[77%] rounded-l rounded-br bg-slate-300 p-2 text-right leading-relaxed text-slate-900 dark:bg-slate-900 dark:text-slate-50">
          <span className="block font-bold ">Alerrandro</span>
          <span className="">{content}</span>
        </p>
      ) : (
        <p className="max-w-[77%] rounded-r rounded-bl bg-slate-300 p-2 leading-relaxed text-slate-900 dark:bg-slate-900 dark:text-slate-50">
          <span className="block font-bold ">R2D2</span>
          <span className="">{content}</span>
        </p>
      )}
    </>
  );
}
