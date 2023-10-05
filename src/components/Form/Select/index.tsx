'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { PropsWithChildren } from 'react'

type Selectprops = SelectPrimitive.SelectProps & {
  placeholder: string
}

export function Select({placeholder, children, ...props}: PropsWithChildren<Selectprops>) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className='flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 outline-none focus-visible:border-violet-300 focus-visible:ring-4 focus-visible:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus:ring-500/10 dark:placeholder-zinc-400 dark:text-zinc-100 dark:data-[placeholder]:text-zinc-400'>
        <SelectPrimitive.Value placeholder={placeholder} className='text-black' />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-4 w-4 text-zinc-400" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content side='bottom' sideOffset={8} position='popper' className='z-10 w-[--radix-select-trigger-width] rounded-lg border border-zinc-200 bg-white overflow-hidden shadow-sm animate-slideDownAndFade dark:bg-zinc-800 dark:border-zinc-800'>
          <SelectPrimitive.Viewport>
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}