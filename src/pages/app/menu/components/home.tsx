// import '../../../global.css'
import { Couple } from '@/@types/couple'

import { Counter } from './counter'
import { Header } from './header'

interface HomeProps {
  couple: Couple
}

export function Home({ couple }: HomeProps) {
  const eventDate = couple.event_date
  console.log(eventDate)
  const { days, hours, minutes, seconds } = Counter(eventDate)

  return (
    <>
      <div
        className="bg-t1-bg flex h-[100vh] flex-col items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${couple.images[0]})`,
        }}
        id="home"
      >
        <Header />

        <div className="flex h-[100vh] flex-col items-center justify-center gap-4 text-white">
          <h1 className="font-vbs text-7xl -tracking-tighter">
            {couple.wife.name} & {couple.husband.name}
          </h1>
          <div className="flex w-96 flex-col items-center justify-center">
            <div className="flex gap-2">
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl border-[2px] border-stone-200">
                <h2 className="text-5xl">{days}</h2>
                <h1>Dias</h1>
              </div>
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl border-[2px] border-stone-200">
                <h2 className="text-5xl">{hours}</h2>
                <h1>Horas</h1>
              </div>
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl border-[2px] border-stone-200">
                <h2 className="text-5xl">{minutes}</h2>
                <h1>Minutos</h1>
              </div>
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl border-[2px] border-stone-200">
                <h2 className="text-5xl">{seconds} </h2>
                <h1>Segundos</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
