/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router'

import logo from '@/assets/img/logo.png'

export function Header() {
  const navigate = useNavigate()
  return (
    <>
      <header className="fixed z-10 flex h-28 w-full items-center justify-center bg-[#171717]">
        <div className="flex w-full items-center justify-between">
          <img
            className="ml-8 w-40 cursor-pointer"
            src={logo}
            onClick={() => navigate('/')}
          />

          <nav className="mr-8 mt-4 flex w-[800px] gap-10">
            <a href="#cnfrm">
              <button className="h-10 cursor-pointer border-none bg-transparent font-vbs text-3xl">
                Confirmar Presença
              </button>
            </a>

            <a href="#abt">
              <button className="h-10 cursor-pointer border-none bg-transparent font-vbs text-3xl">
                Sobre
              </button>
            </a>

            <a href="#msg">
              <button className="h-10 cursor-pointer border-none bg-transparent font-vbs text-3xl">
                Mensagem
              </button>
            </a>

            <a href="#gft">
              <button className="h-10 cursor-pointer border-none bg-transparent font-vbs text-3xl">
                Presentes
              </button>
            </a>

            <a href="#lcl">
              <button className="h-10 cursor-pointer border-none bg-transparent font-vbs text-3xl">
                Local
              </button>
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
