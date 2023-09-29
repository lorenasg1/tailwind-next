import { ComponentProps } from "react"

type TextareaProps = ComponentProps<'textarea'> & {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea {...props} className='min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm' id="bio" defaultValue="I'm a product Designer based in Melbourne, Australia. I specialize in UX/UI design, brand strategie and development."></textarea>
  )
}