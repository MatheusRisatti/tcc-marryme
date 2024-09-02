import { About } from './components/about'
import { Home } from './components/home'
import { Gift } from './components/gift'
import { Message } from './components/message'
import { Location } from './components/location'
import '../global.css'
import { Footer } from './components/footer'
import { Confirm } from './components/confirm'

export function App() {

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

