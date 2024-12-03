import { Couple } from '@/@types/couple'

import { About } from './components/about'
import { Confirm } from './components/confirm'
import { Footer } from './components/footer'
import { Gift } from './components/gift'
import { Home } from './components/home'
import { Location } from './components/location'
import { Message } from './components/message'
import ScrollButton from './components/scroll-button'
import { Welcome } from './components/welcome'

interface Template1Props {
  couple: Couple
}

export function Template3({ couple }: Template1Props) {
  console.log(couple)

  return (
    <>
      <div className="bg-[#171717] text-[#B7A9A7]">
        <ScrollButton />
        <Home couple={couple} />
        <Welcome couple={couple} />
        <About couple={couple} />
        <Message />
        <Confirm />
        <Gift gifts={couple.gifts} />
        <Location />
        <Footer />
      </div>
    </>
  )
}
