import { About } from './components/about'
import { Carrossel } from './components/carrossel'
import { Gift } from './components/gift'
import { Message } from './components/message'
import { Location } from './components/location'
import '../global.css'
import { Footer } from './components/footer'
import { Confirm } from './components/confirm'
// import carrossel1 from './assets/img/carossel1.png'

export function App() {
  return (
    <>
      <Carrossel />
      <About />
      <Gift />
      <Message />
      <Confirm />
      <Location />
      <Footer />
    </>
  )
}

