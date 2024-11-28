import { About } from './components/about'
import { Home } from './components/home'
import { Gift } from './components/gift'
import { Message } from './components/message'
import { Location } from './components/location'
import '../global.css'
import { Footer } from './components/footer'
import { Confirm } from './components/confirm'
import { Couple } from '@/@types/couple'

interface TemplateProps {
  couple: Couple
}
export function Template1({ couple }: TemplateProps) {

  return (
    <>
      <Home />
      <About  />
      <Gift />
      <Message />
      <Confirm />
      <Location />
      <Footer />
    </>
  )
}

