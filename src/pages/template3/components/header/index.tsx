import './header.css'
import '../../../global.css'
import logo from '@/assets/img/logo.png'
import { useNavigate } from 'react-router-dom';

export function Header() {

    const navigate = useNavigate();
    navigate("/")

    return (
        <>
                <header>
                    <div className='header-container'>

                        <img className='header-container-logo' src={logo} />

                        <nav>
                            <button  className='text-amber-50' onClick={() => navigate('/template3/confirmar')}>Confirmar Presença</button>
                            <button  className='text-amber-50'>Sobre</button>
                            <button  className='text-amber-50'>Mensagem</button>
                            <button  className='text-amber-50'>Presentes</button>
                            <button  className='text-amber-50'>Local</button>
                        </nav>

                    </div>

                </header>
        </>
    )
}
