import { ComponentProps } from "react"

type TextareaProps = ComponentProps<'textarea'> & {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea {...props} className='min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus-visible:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus:ring-500/10 dark:placeholder-zinc-400 dark:text-zinc-100' id="bio" defaultValue="I'm a product Designer based in Melbourne, Australia. I specialize in UX/UI design, brand strategie and development."></textarea>
  )
}