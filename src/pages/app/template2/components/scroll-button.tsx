import { ArrowUp } from 'lucide-react'
import { useState } from 'react'

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <>
      <button
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
        className="fixed bottom-8 left-8 z-10 h-16 w-16 cursor-pointer rounded-[100px] bg-[#a0bc81] duration-300 hover:animate-bounce hover:bg-[#7f906c] hover:text-white"
      >
        <div className="flex h-full w-full items-center justify-center">
          <ArrowUp />
        </div>
      </button>
    </>
  )
}

export default ScrollButton
