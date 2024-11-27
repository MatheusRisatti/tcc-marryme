import { Header } from "../header";
import '../../../global.css'
import './home.css'
import { Counter } from "../counter";

export function Home() {
    const eventDate = '2024-12-31T23:59:59';
    const { days, hours, minutes, seconds } = Counter(eventDate);

    return (
        <>
            <div className="home">
                <header>
                    <Header />
                </header>

                <div className="home-title flex flex-col">
                    <h1>Yasmin e Bruno</h1>      
                    <div className="flex flex-col justify-center items-center w-96">
                        <div className="flex gap-2">
    
                            <div className="h-20 w-20 border-[2px] rounded-xl border-stone-200 flex items-center justify-center flex-col ">
                                
                                <h2 className="text-5xl">{days}</h2>
                                <h1>Dias</h1>

                            </div>
                            <div className="h-20 w-20 border-[2px] rounded-xl border-stone-200 flex items-center justify-center flex-col ">
                                
                                <h2 className="text-5xl">{hours}</h2>
                                <h1>Horas</h1>
                                
                            </div>
                            <div className="h-20 w-20 border-[2px] rounded-xl border-stone-200 flex items-center justify-center flex-col ">
                                
                                <h2 className="text-5xl">{minutes}</h2>
                                <h1>Minutos</h1>

                            </div>
                            <div className="h-20 w-20 border-[2px] rounded-xl border-stone-200 flex items-center justify-center flex-col ">
                                
                                <h2 className="text-5xl">{seconds} </h2>
                                <h1>Segundos</h1>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
