import { ArrowUp } from 'lucide-react'

export function UpButton() {
  return (
    <>
      <a href="#home">
        <button className="rounded-[10px] bg-slate-400">
          <ArrowUp />
        </button>
      </a>
    </>
  )
}
