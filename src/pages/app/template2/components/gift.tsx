import { Gift as GiftType } from '@/@types/couple'

import { Card } from './card'
import { SectionTitle } from './section-title'

interface GiftProps {
  gifts: GiftType[]
}

export function Gift({ gifts }: GiftProps) {
  return (
    <div className="mb-8 mt-40 flex items-center justify-center" id="gft">
      <div className="flex w-full flex-col items-center justify-center bg-[#ebe7d1]">
        <div className="gift-title font-rds text-[#7F906C]">
          <SectionTitle title="Presentes" />
        </div>
        <div className="mb-32 mt-11 flex w-4/5 flex-wrap items-center justify-center gap-24 font-rds text-5xl">
          {gifts.map((gift) => (
            <Card key={gift.id} gift={gift} />
          ))}
        </div>
      </div>
    </div>
  )
}
