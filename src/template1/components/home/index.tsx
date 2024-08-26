import { Header } from "../header";
import '../../../global.css'
import './home.css'
  
export function Home(){
    return(
        <>
        <div className="home">
            <header>
                <Header />
            </header>
            
            <div className="home-title">
                <h1>Yasmin e Bruno</h1>
            </div>

        </div>
        </>
    )
}