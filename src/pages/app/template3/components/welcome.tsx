import { Couple } from '@/@types/couple'
import Divider from '@/assets/img/t3dvdr.svg'

import { Counter } from './counter'

interface WelcomeProps {
  couple: Couple
}
export function Welcome({ couple }: WelcomeProps) {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center gap-28">
        <div className="mt-32 flex flex-col items-center justify-center gap-12">
          <h1 className="font-ppns text-2xl">
            Contagem regressiva para o grande dia
          </h1>
          <Counter couple={couple} />
        </div>
        <div className="flex flex-col items-center justify-center gap-16">
          <h1 className="font-ppns text-3xl">
            Sejam bem vindos ao nosso site!
          </h1>
          <h2 className="font-ppns text-xl">
            A melhor forma de compartilhar esse momento com vocês é unindo
            sonhos.
          </h2>
          <img src={Divider} alt="" />
          <div className="mt-10 w-1/2 text-center">
            <p>{couple.bio}</p>
          </div>
        </div>
      </div>
    </>
  )
}
