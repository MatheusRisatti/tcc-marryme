// import '../../../global.css'
import { Couple } from '@/@types/couple'

import { Counter } from './counter'
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
          backgroundImage: `url(${couple.images[0]})`,
        }}
        id="home"
      >
        <Header />

        <div className="flex h-[100vh] flex-col items-center justify-center gap-4 text-white">
          <h1 className="font-vbs text-7xl -tracking-tighter">
            {couple.wife.name} & {couple.husband.name}
          </h1>
          <Counter couple={couple} />
        </div>
      </div>
    </>
  )
}
