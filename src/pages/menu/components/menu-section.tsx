import line from '@/assets/img/line.svg'
import divider from '@/assets/img/menuDivider.svg'

interface MenuTitleProps{
    title: string;
    text: string;
}
export function MenuSection({ title, text }: MenuTitleProps){
    return(
        <>
        <div className='flex justify-center items-center flex-col w-76 gap-4'>

        <div className='flex justify-center items-center gap-2'>
            <img src={line} /> 
                <h1 className='font-vbs text-6xl tracking-[2px]'>{title}</h1> 
            <img src={line} />
        </div>

            <h1 className='text-7xl font-thin font-vbs'>{text}</h1>

            <img src={divider} className='mt-[-25px] w-[300px]' />

        </div>
        </>
    )
}