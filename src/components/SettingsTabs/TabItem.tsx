import * as Tabs from '@radix-ui/react-tabs'
import { ComponentProps } from 'react'

export type TabItemProps = ComponentProps<typeof Tabs.Trigger> & {
  title: string
  isSelected?: boolean
}

export function TabItem({title, isSelected = false, ...props}: TabItemProps) {


  return (
    <Tabs.Trigger {...props} className='relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700'>
      <span>{title}</span>
      {isSelected && (
        <div className="absolute left-0 -bottom-px right-0 h-0.5 bg-violet-700"></div>
      )}
    </Tabs.Trigger>
  )
}