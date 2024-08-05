import igreja from '@/assets/img/igreja.png'
import clube from '@/assets/img/clube.png'

export function Location(){
    return(
        <>
        {/* <div className="flex items-center justify-center w-full h-[700px] bg-orange-50">
            <h1>OOOOkay</h1>
        </div> */}

            <div className="mt-32 mb-32 flex items-center justify-center flex-col">
                <h1 className="font-vbs text-7xl mb-12">Local da Cerimônia</h1>    
                <div className=' flex items-center justify-around w-[1500px]'>
                    <img className='h-[400px]' src={igreja} alt="" />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.7284093092426!2d-48.55815793972814!3d-22.51066281455622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c745f607e86e49%3A0xe0fa04baf49cf46a!2sMatriz%20de%20S%C3%A3o%20Joaquim!5e0!3m2!1spt-BR!2sbr!4v1722821210233!5m2!1spt-BR!2sbr" width="600" height="400" loading="lazy"></iframe>
                </div>
            </div>

            <div className="mt-32 mb-32 flex items-center justify-center flex-col">
                <h1 className="font-vbs text-7xl mb-12">Local da Festa</h1>    
                <div className=' flex items-center justify-around w-[1500px]'>
                    <img className='h-[400px]' src={clube} alt="" />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14740.916476282959!2d-48.54824971284182!3d-22.533088399999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c747652674cc33%3A0xc997169ddbf2e8ba!2sBosque%20Clube%20%26%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1722822445277!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy" ></iframe>
                </div>
            </div>

        </>
    )
}