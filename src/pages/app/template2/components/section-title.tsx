import divider2 from '@/assets/img/divider2.png'

interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <img className="w-60" src={divider2} alt="" />
      <h1 className="font-rds text-5xl font-medium text-black">{title}</h1>
      <img className="w-60 rotate-180 gap-1" src={divider2} alt="" />
    </div>
  )
}
