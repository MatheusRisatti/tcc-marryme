import { Header } from "../header";
import '../../../global.css'
import { Counter } from "../counter";
import casal from "@/assets/img/teste.jpeg"

export function Home() {

    return (
        <>
            <div className="h-[100vh] flex items-center flex-col bg-[url('@/assets/img/template3Home.png')] bg-no-repeat bg-center bg-cover">
                <header className="z-20">
                    <Header />
                </header>

                <div className="h-screen w-full flex items-center justify-center">
                    <div className="w-full h-[20rem] bg-slate-700 flex items-start">
                        <div className="w-1/2 h-full flex justify-center items-center flex-col gap-4">
                        <div className="flex justify-center items-center w-4">
                            <h1 className="text-center font-vbs font-normal text-6xl text-amber-50 leading-[1.05] tracking-[4px]">ZaZa & Sexo</h1>   
                        </div>
                            <Counter eventDate={"2024-11-28T11:30:00"} />
                        </div>
                        <div className="h-[289.5%] w-[650px] mt-[-300px] z-10 bg-slate-700 flex items-center justify-center">
                            <img src={casal} className="h-[95%] w-[80%]" />
                        </div>
                    </div>
                </div>
                    
            </div>
        </>
    );
}
