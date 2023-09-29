import { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

type InputPrefixProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}
type InputControlProps = InputHTMLAttributes<HTMLInputElement> & {}
type InputRootProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}


export function InputControl(props: InputControlProps) {
  return (
  <input
  {...props}
    className="w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
  />
)
}

export function InputRoot(props: InputRootProps) {
  return (
    <div {...props} className='flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none'
     />
  )
}