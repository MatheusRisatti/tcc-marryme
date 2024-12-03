import { Couple } from '@/@types/couple'

import { SectionTitle } from './section-title'

interface AboutProps {
  couple: Couple
}

export function About({ couple }: AboutProps) {
  return (
    <>
      <div className="mt-28 w-full" id="abt">
        <div className="mb-5 flex w-full flex-col items-center justify-center font-rds">
          <SectionTitle title={'Sobre Nós'} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-14">
            <img
              src={couple.wife.image}
              className="h-40 w-40 rounded-[400px]"
              alt=""
            />
            <div className="w-[600px] font-rds text-2xl">
              <p>{couple.wife.bio}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-14">
            <div className="w-[600px] font-rds text-2xl">
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
