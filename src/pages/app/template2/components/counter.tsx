import { Couple } from '@/@types/couple'
import divider from '@/assets/img/divider3.svg'

import { TimeCalc } from './time-calc'

interface HomeProps {
  couple: Couple
}

export function Counter({ couple }: HomeProps) {
  const eventDate = couple.event_date
  console.log(eventDate)
  const { days, hours, minutes, seconds } = TimeCalc(eventDate)
  return (
    <>
      <div className="flex w-96 flex-col items-center justify-center text-[#7F906C]">
        <img src={divider} alt="" className="rotate-180" />
        <div className="flex gap-2">
          <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl">
            <h2 className="text-5xl">{days}</h2>
            <h1>Dias</h1>
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl">
            <h2 className="text-5xl">{hours}</h2>
            <h1>Horas</h1>
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl">
            <h2 className="text-5xl">{minutes}</h2>
            <h1>Minutos</h1>
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl">
            <h2 className="text-5xl">{seconds} </h2>
            <h1>Segundos</h1>
          </div>
        </div>
        <img src={divider} alt="" />
      </div>
    </>
  )
}
