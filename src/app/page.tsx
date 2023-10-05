'use client'

import { Button } from '@/components/Button'
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
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-4 justify-between lg:items-center pb-5 border-b border-zinc-200 dark:border-zinc-700">

          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal info</h2>
            <span className="text-small text-zinc-500  dark:text-zinc-400">Update your photo and personal details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant='outline'>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </div>

        <form action="" id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700">
          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 dark:text-zinc-300">Name</label>

            <div className="flex flex-col lg:grid gap-3 lg:grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" type="text" defaultValue='Lorena' />
              </InputRoot>

              <div className='flex flex-col gap-3'>
                <label htmlFor="lastName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only">Sobrenome</label>
                <InputRoot>
                  <InputControl id="lastName" defaultValue='Guedes' />
                </InputRoot>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email address
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="diego@rocketseat.com.br"
              />
            </InputRoot>
          </div>
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
          <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className='flex flex-col lg:items-start gap-5 lg:flex-row'>
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Role</label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="role" type="text" defaultValue='CTO' />
              </InputRoot>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Country</label>
            <Select placeholder='Select a country...'>
              <SelectItem text='Brazil' value='br' />
              <SelectItem text='United States' value='us' />
            </Select>
          </div>
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Timezone</label>
            <Select placeholder='Select a timezone...'>
              <SelectItem text='Pacific Standard Time (UTC-08:00)' value='utc8' />
              <SelectItem text='America/São Paulo (UTC-03:00)' value='utc3' />
            </Select>
          </div>
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Bio
              <p className="text-sm font-normal text-zinc-500 dark:text-zinc-400">Write a short introduction.</p>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col lg:grid gap-3 lg:grid-cols-2">
                <Select placeholder='' defaultValue='plain'>
                  <SelectItem defaultChecked text='Plain text' value='plain' />
                  <SelectItem text='Markdown' value='md' />
                </Select>
                <div className="flex items-center gap-1">
                <Button type="button" variant='ghost'>
                  <Bold className="w-4 h-4 text-zinc-500 dark:text-zinc-400" strokeWidth={3} />
                </Button>
                <Button type="button" variant='ghost'>
                  <Italic className="w-4 h-4 text-zinc-500 dark:text-zinc-400" strokeWidth={3} />
                </Button>
                <Button type="button" variant='ghost'>
                  <Link className="w-4 h-4 text-zinc-500 dark:text-zinc-400" strokeWidth={3} />
                </Button>
                <Button type="button" variant='ghost'>
                  <List className="w-4 h-4 text-zinc-500 dark:text-zinc-400" strokeWidth={3} />
                </Button>
                <Button type="button" variant='ghost'>
                  <ListOrdered className="w-4 h-4 text-zinc-500 dark:text-zinc-400" strokeWidth={3} />
                </Button>
                </div>
              </div>
              <Textarea />
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Portfolio Projects
              <p className="text-sm font-normal text-zinc-500 dark:text-zinc-400">Share a few snippets of your work.</p>
            </label>
            <FileInput.Root>
              <FileInput.Trigger  />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
          <div className="flex items-center justify-end pt-5 gap-2">
            <Button type="button" variant='outline'>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
