export default function Home() {
  return (
    <main className="p-4 bg-slate-50 h-screen dark:bg-slate-900">
      <h1 className="font-bold text-black dark:text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl flex items-center gap-2">
        hello tailwind
      </h1>
      <p className="font-serif text-black dark:text-white hover:text-gray-400">
        hello tailwind
      </p>
      <button className="bg-sky-500 dark:bg-[red] px-4 py-2 rounded-md text-white font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-default">
        sign in
      </button>
    </main>
  )
}
