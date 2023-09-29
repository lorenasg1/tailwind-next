'use client'

import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { SettingsTabs } from "@/components/SettingsTabs"
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react"
import { InputControl, InputPrefix, InputRoot } from '../components/Form/Input/Input'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-small text-zinc-500">Update your photo and personal details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
            <button type="submit" form="settings" className="rounded-lg px-4 py-2 text-sm font-semibold bg-violet-600 text-white hover:bg-zinc-700">Save</button>
          </div>
        </div>

        <form action="" id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200">
          <div className="grid gap-3 grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Name</label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" type="text" defaultValue='Lorena' />
              </InputRoot>
              <label htmlFor="lastName" className="sr-only">Sobrenome</label>
              <InputRoot>
                <InputControl id="lastName" defaultValue='Guedes' />
              </InputRoot>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email address</label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
                <InputControl id="email" type="email" defaultValue='lorena@example.com' />
              </InputRoot>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
          <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className='flex items-center gap-5'>
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">Role</label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="role" type="text" defaultValue='CTO' />
              </InputRoot>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700">Country</label>
            <Select placeholder='Select a country...'>
              <SelectItem text='Brazil' value='br' />
              <SelectItem text='United States' value='us' />
            </Select>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">Timezone</label>
            <Select placeholder='Select a timezone...'>
              <SelectItem text='Pacific Standard Time (UTC-08:00)' value='utc8' />
              <SelectItem text='America/São Paulo (UTC-03:00)' value='utc3' />
            </Select>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <p className="text-sm font-normal text-zinc-500">Write a short introduction.</p>
            </label>
            <div className="space-y-3">
              <div className="grid gap-3 grid-cols-2">
                <Select placeholder='' defaultValue='plain'>
                  <SelectItem defaultChecked text='Plain text' value='plain' />
                  <SelectItem text='Markdown' value='md' />
                </Select>
                <div className="flex items-center gap-1">
                <button type="button" className="ml-auto hover:bg-zinc-50 p-2">
                  <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button type="button" className="ml-auto hover:bg-zinc-50 p-2">
                  <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button type="button" className="ml-auto hover:bg-zinc-50 p-2">
                  <Link className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button type="button" className="ml-auto hover:bg-zinc-50 p-2">
                  <List className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button type="button" className="ml-auto hover:bg-zinc-50 p-2">
                  <ListOrdered className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                </button>
                </div>
              </div>
              <Textarea />
            </div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Portfolio Projects
              <p className="text-sm font-normal text-zinc-500">Share a few snippets of your work.</p>
            </label>
            <FileInput.Root>
              <FileInput.Trigger  />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
          <div className="flex items-center justify-end pt-5">
          <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
            <button type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold bg-violet-600 text-white hover:bg-zinc-700">Save</button>
          </div>
        </form>
      </div>
    </>
  )
}
