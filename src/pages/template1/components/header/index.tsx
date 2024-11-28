import './header.css'
import '../../../global.css'
import logo from '@/assets/img/logo.png'
import { Navigate, useNavigate } from 'react-router-dom'


export function Header() {

    const navigate = useNavigate();

    return (
        <>
                <header>
                    <div className='header-container'>

                        <img className='header-container-logo cursor-pointer' onClick={() => navigate('/')} src={logo} />

                        <nav>
                            <button>Confirmar Presença</button>
                            <button>Sobre</button>
                            <button>Mensagem</button>
                            <button>Presentes</button>
                            <button>Local</button>
                        </nav>

                    </div>

                </header>
        </>
    )
}
