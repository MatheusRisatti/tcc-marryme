import { Couple } from '@/@types/couple'

import { About } from './components/about'
import { Confirm } from './components/confirm'
import { Footer } from './components/footer'
import { Gift } from './components/gift'
import { Home } from './components/home'
import { Location } from './components/location'
import { Message } from './components/message'
import ScrollButton from './components/scroll-button'

interface Template1Props {
  couple: Couple
}

export function Template2({ couple }: Template1Props) {
  console.log(couple)

  return (
    <>
      <div className="bg-[#F7F4E4]">
        <ScrollButton />
        <Home couple={couple} />
        <About couple={couple} />
        <Gift gifts={couple.gifts} />
        <Message />
        <Confirm />
        <Location />
        <Footer />
      </div>
    </>
  )
}
