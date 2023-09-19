import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img src="https://github.com/lorenasg1.png" alt="" className="h-10 w-10 rounded-full" />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Lorena Guedes
        </span>
        <span className="truncate text-sm font-semibold text-zinc-500">
          lorenasg1@gmail.com
        </span>
      </div>

      <button type="button" className="ml-auto hover:bg-zinc-50 p-2">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  )
}