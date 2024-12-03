import { Couple } from '@/@types/couple'

import { SectionTitle } from './section-title'

interface AboutProps {
  couple: Couple
}

export function About({ couple }: AboutProps) {
  return (
    <>
      <div
        className="mt-28 flex h-screen w-full flex-col items-center justify-center bg-[#232121]"
        id="abt"
      >
        <div className="-mt-10 mb-5 flex w-full flex-col items-center justify-center">
          <SectionTitle title={'Sobre Nós'} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-14">
            <img
              src={couple.wife.image}
              className="h-40 w-40 rounded-[400px]"
              alt=""
            />
            <div className="w-[700px] font-ppns">
              <p>{couple.wife.bio}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-14">
            <div className="w-[700px] font-ppns">
              <p>{couple.husband.bio}</p>
            </div>
            <img
              src={couple.husband.image}
              className="h-40 w-40 rounded-[400px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}
