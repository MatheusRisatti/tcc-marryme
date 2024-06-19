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
                            <input type="text" placeholder='Digite sua messagem aqui' id='message' />
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}