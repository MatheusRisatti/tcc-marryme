import { useEffect, useState } from "react";
import './card.css'
import '../../../global.css'
import { ShoppingBag } from 'lucide-react';
import axios from "axios";
import QrCode from "@/assets/img/qr.png"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

interface Gift {
    id: number;
    name: string;
    price: number;
    image: string
}

export function Card(){

    const [gifts, setGifts] = useState<Gift[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3333/gifts')
            .then((response) => {
                setGifts(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar presentes:', error);
            });
    }, []);

    return (
        <>
            {gifts.map((gift) => (
                <GiftCard key={gift.id} gift={gift} />
            ))}
        </>
    );
}

function GiftCard({ gift }: { gift: Gift }) {
    const formatPriceToBRL = (price: number) => {
        return 'R$ '+ price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    return (
        <>
        
        <div className="card">
            <div className="card-image">
                <img src={gift.image} alt={gift.name}/>
            </div>
            <div className="card-text">
                <h1>{gift.name}</h1>
                <h3>Preço: {formatPriceToBRL(gift.price)}</h3>
            </div>
            <div className="card-button">

            <Dialog>
      <DialogTrigger asChild>
        <button className="button" ><ShoppingBag className="button-img" /> <span>Comprar</span></button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Conclua sua compra</DialogTitle>
          <DialogDescription>
            Faça a compra do presente pelo site ou envie o pix aos noivos
          </DialogDescription>
        </DialogHeader>
        <h2>Faça o pix:</h2>
        <img src={QrCode} className="w-72" />

        <h2>Ou faça a compra pelo Site:</h2>
        <a href="https://abrir.link/tGJkj" className="text-blue-500">{gift.name}</a>
        
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
            

            </div>
        </div>
        
        </>
    );
}