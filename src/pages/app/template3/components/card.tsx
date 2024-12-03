/* eslint-disable jsx-a11y/alt-text */
import { ShoppingBag } from 'lucide-react'

import { Gift } from '@/@types/couple'
import QrCode from '@/assets/img/qr.png'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface CardProps {
  gift: Gift
}

export function Card({ gift }: CardProps) {
  const formatPriceToBRL = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  return (
    <>
      <div className="flex h-[450px] w-[350px] flex-col items-center justify-center rounded-2xl border-[0.5px] border-solid border-[#C9C9C9] duration-300 hover:-translate-y-2 hover:shadow-card">
        <div className="mb-3 flex h-52 items-center justify-center">
          <img className="h-48 w-48" src={gift.image} alt={gift.title} />
        </div>
        <div className="flex h-20 w-full flex-col items-center justify-center">
          <h1 className="font-ppns text-xl font-medium">{gift.title}</h1>
          <h3 className="font-ppns text-lg font-normal">
            Preço: {formatPriceToBRL(gift.price)}
          </h3>
        </div>

        <div className="flex items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex h-12 w-56 cursor-pointer items-center justify-center gap-3 rounded-[50px] border-[0.5px] border-solid border-white bg-transparent text-xl text-white duration-200 hover:border-none hover:bg-[#35bd35] hover:text-white">
                <ShoppingBag className="button-img" /> <span>Comprar</span>
              </button>
            </DialogTrigger>
            <DialogContent className="bg-[#171717] text-[#B7A9A7]">
              <DialogHeader>
                <DialogTitle className="text-[#B7A9A7]">
                  Conclua sua compra
                </DialogTitle>
                <DialogDescription className="text-[#B7A9A7]">
                  Faça a compra do presente pelo site ou envie o pix aos noivos
                </DialogDescription>
              </DialogHeader>
              <h2>Faça o Pix</h2>
              <img src={QrCode} className="w-72" />
              <h2>Ou Faça a compra pelo site:</h2>
              <a href={gift.url} className="text-blue-500">
                {gift.title}
              </a>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  )
}
