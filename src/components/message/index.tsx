import { Input } from '../ui/input'
import './message.css'

export function Message(){
    return(
        <>
        <div className="message">
            <div className="message-container">
                <div className="message-content">
                    <div className="message-title">
                        <h1>Mande sua mensagem para os Noivos</h1>
                    </div>
                    <form action="">
                        <div className="message-header">
                            <input type="text" placeholder='Nome' id='name' />
                            <input type="text" placeholder='Email' id='email' />
                        </div>
                            <textarea name="subject" placeholder='Digite sua messagem aqui' id='message' ></textarea>
                            <Input placeholder='Digite sua mensagem aqui' className='mt-10 h-80 w-[44rem] bg-transparent border-solid border-2 border-white rounded-[20px] text-white' ></Input>
                    </form>
                </div>
            </div>
        </div>      
        </>
    )
}