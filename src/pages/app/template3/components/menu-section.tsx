import line from '@/assets/img/line.svg'
import divider from '@/assets/img/menuDivider.svg'

interface MenuTitleProps {
  title: string
  text: string
}
export function MenuSection({ title, text }: MenuTitleProps) {
  return (
    <>
      <div className="w-76 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-2">
          <img src={line} className="w-24" />
          <h1 className="font-vbs text-5xl tracking-[2px]">{title}</h1>
          <img src={line} />
        </div>

        <h1 className="font-vbs text-6xl font-thin">{text}</h1>

        <img src={divider} className="mt-[-25px] w-[250px]" />
      </div>
    </>
  )
}
