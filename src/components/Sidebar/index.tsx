'use client'

import { Logo } from '@/components/Sidebar/Logo'
import * as Collapsible from '@radix-ui/react-collapsible'
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users
} from 'lucide-react'
import { Button } from '../Button'
import { InputControl, InputPrefix, InputRoot } from '../Form/Input/Input'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <Collapsible.Root asChild className="flex flex-col gap-6  border-b border-zinc-200 p-4 fixed left-0 right-0 top-0 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <aside>
        <div className="flex items-center justify-between">
          <Logo />
          <Collapsible.Trigger asChild className="lg:hidden">
            <Button variant='ghost' type='button'>
              <Menu className='h-6 w-6' />
            </Button>
          </Collapsible.Trigger>
        </div>

        <Collapsible.Content forceMount className='flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex'>
          <InputRoot>
            <InputPrefix>
              <Search className="h-5 min-w-5 w-5 text-zinc-500" />
            </InputPrefix>
            <InputControl placeholder="Search" />
          </InputRoot>

          <nav className="space-y-0.5">
            <NavItem title="Home" icon={Home} />
            <NavItem title="Dashboard" icon={BarChart} />
            <NavItem title="Projects" icon={SquareStack} />
            <NavItem title="Tasks" icon={CheckSquare} />
            <NavItem title="Reporting" icon={Flag} />
            <NavItem title="Users" icon={Users} />
          </nav>

          <div className="mt-auto flex flex-col gap-6">
            <nav className="space-y-0.5">
              <NavItem title="Support" icon={LifeBuoy} />
              <NavItem title="Settings" icon={Cog} />
            </nav>

            <UsedSpaceWidget />

            <div className='h-px bg-zinc-200'></div>

            <Profile />
          </div>
        </Collapsible.Content>
      </aside>
    </Collapsible.Root>
  )
}