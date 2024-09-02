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
                            <h2 className="text-5xl">{days} :</h2>
                            <h2 className="text-5xl">{hours} :</h2>
                            <h2 className="text-5xl">{minutes} :</h2>
                            <h2 className="text-5xl">{seconds}</h2>
                        </div>
                        <div className="flex gap-4 items-center w-3/4">
                            <h1>Dias</h1>
                            <h1>Horas</h1>
                            <h1>Minutos</h1>
                            <h1>Segundos</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
