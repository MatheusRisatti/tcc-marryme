import line from '@/assets/img/line.svg'
import divider from '@/assets/img/menuDivider.svg'

interface MenuTitleProps{
    title: string;
    text: string;
}
export function MenuSection({ title, text }: MenuTitleProps){
    return(
        <>
        <div className='flex justify-center items-center flex-col w-[400px] gap-4'>

        <div className='flex justify-center items-center gap-2'>
            <img src={line} className='w-24'/> 
                <h1 className='font-vbs text-5xl tracking-[2px]'>{title}</h1> 
            <img src={line} />
        </div>

            <h1 className='text-6xl font-thin font-vbs'>{text}</h1>

            <img src={divider} className='mt-[-25px] w-[250px]' />

        </div>
        </>
    )
}