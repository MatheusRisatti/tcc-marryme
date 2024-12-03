// import '../../../global.css'
import { Couple } from '@/@types/couple'
import bg from '@/assets/img/template3Home.png'

import { Header } from './header'

interface HomeProps {
  couple: Couple
}

export function Home({ couple }: HomeProps) {
  return (
    <>
      <div
        className="bg-t1-bg flex h-[100vh] flex-col items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
        id="home"
      >
        <Header />
        <div className="absolute mt-[300px] flex h-[350px] w-full justify-center gap-96 bg-[#171717]">
          <div className="flex h-full w-[150px] items-center justify-center text-center">
            <h1 className="font-vbs text-7xl">
              {couple.wife.name} & {couple.husband.name}
            </h1>
          </div>
          <div className="flex h-full w-[450px] items-center justify-center"></div>
        </div>

        <div className="relative flex h-full w-full items-center justify-end">
          <div className="mr-96 flex h-full w-[700px] items-center justify-center bg-[#171717]">
            <img src={couple.images[0]} alt="" className="h-[90%] w-4/5" />
          </div>
        </div>
      </div>
    </>
  )
}
