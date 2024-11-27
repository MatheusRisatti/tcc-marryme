import logo from '@/assets/img/menuLogo.svg'
import { MenuSection } from './components/menu-section'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export function Menu(){
    return(
        <>
        <div className="min-h-screen w-full bg-amber-50 flex flex-col gap-24">
            <div className='flex justify-center items-center w-full mt-10'>
                <img className='h-[50vh]' src={logo} />
            </div>
            <div className='flex justify-center items-start gap-24 h-[50%] w-full'>

                    <Popover>
                        <PopoverTrigger>    
                            <MenuSection title='Quem' text='Nós Somos ?'/>    
                        </PopoverTrigger>
                        <PopoverContent className='w-96 bg-slate-600 text-slate-50 data-[side=top]:slide-in-from-bottom-48 mb-4'>
                            <p>Nós somos Matheus Risatti, conhecido como Mapoko, e Gustavo Buzacarini, conhecido como Zaza, dois desenvolvedores apaixonados por criar soluções que tornam momentos especiais ainda mais memoráveis. O MarryMe nasceu do nosso desejo de oferecer aos casais uma plataforma moderna, intuitiva e personalizável para criar seus sites de casamento. Combinando tecnologia e criatividade, estamos aqui para ajudar você a transformar o planejamento do seu grande dia em uma experiência única e especial.</p>
                        </PopoverContent>
                    </Popover>

                        <Dialog>
                            <DialogTrigger >
                                <MenuSection title='O Que' text='Fazemos ?'/>  
                            </DialogTrigger>
                            <DialogContent className='h-96 w-[350px]'>
                                <DialogHeader className='gap-3'>
                                    <DialogTitle>
                                        Por Que Fazemos ?
                                    </DialogTitle>
                                    <DialogDescription>
                                        Porque acreditamos que cada história merece ser celebrada com coração e alma.
                                    </DialogDescription>
                                </DialogHeader>
                                    <p>No MarryMe você encontra uma maneira mais simples e de facil acesso para compartilhar informações importantes, como detalhes da cerimônia, lista de presentes, confirmação de presença e muito mais, tudo de forma prática e elegante. Com templates variados e diversas opções de escolha, cada casal pode encontrar um site que reflita seu estilo e sua história.</p>
                            </DialogContent>
                        </Dialog>
    
                    <Popover>
                        <PopoverTrigger>
                            <MenuSection title='Por Que' text='Fazemos ?'/>    
                        </PopoverTrigger>
                        <PopoverContent className='w-96 mb-4'>
                            <p>Acreditamos que o amor merece ser celebrado com toda a dedicação e cuidado que ele inspira. Desenvolvemos o MarryMe porque queremos simplificar o planejamento de casamento e ajudar casais a compartilhar sua alegria de forma moderna e marcante. Nossa missão é transformar momentos emocionantes em memórias digitais que permanecerão para sempre.</p>
                        </PopoverContent>
                    </Popover>
                   


                    {/* <Popover>
                        <PopoverTrigger>
                            <MenuSection title='Por Que' text='Fazemos ?'/>    
                        </PopoverTrigger>
                        <PopoverContent className='w-96 bg-slate-600 text-slate-50 data-[side=top]:slide-in-from-bottom-48 mb-4'>
                            <p>Acreditamos que o amor merece ser celebrado com toda a dedicação e cuidado que ele inspira. Desenvolvemos o MarryMe porque queremos simplificar o planejamento de casamento e ajudar casais a compartilhar sua alegria de forma moderna e marcante. Nossa missão é transformar momentos emocionantes em memórias digitais que permanecerão para sempre.</p>
                        </PopoverContent>
                    </Popover> */}
                      

            </div>
        </div>
        </>
    )
}