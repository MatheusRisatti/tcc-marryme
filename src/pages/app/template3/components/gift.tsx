import { Gift as GiftType } from '@/@types/couple'

import { Card } from './card'
import { SectionTitle } from './section-title'

interface GiftProps {
  gifts: GiftType[]
}

export function Gift({ gifts }: GiftProps) {
  return (
    <div
      className="flex items-center justify-center bg-[#232121] py-32"
      id="gft"
    >
      <div className="flex w-full flex-col items-center justify-center">
        <div className="gift-title">
          <SectionTitle title="Presentes" />
        </div>
        <div className="mt-11 flex w-4/5 flex-wrap items-center justify-center gap-24">
          {gifts.map((gift) => (
            <Card key={gift.id} gift={gift} />
          ))}
        </div>
      </div>
    </div>
  )
}
