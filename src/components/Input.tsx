import { ComponentProps } from "react";

type InputPrefixProps = ComponentProps<'div'>
type InputControlProps = ComponentProps<'input'>
type InputRootProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props}></div>
}


export function InputControl(props: InputControlProps) {
  return (
  <input
    className="border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
    placeholder="Search"
    {...props}
  />
)
}

export function InputRoot(props: InputRootProps) {
  return (
    <div className="mx-1 grid grid-cols-[20px_1fr] items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm" {...props}>
    </div>
  )
}