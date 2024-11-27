import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Message(){
    return(
        <>
            <div className="flex items-center justify-center flex-col">

                <div className=" w-[35rem] flex items-center justify-center flex-col">
                    
                    <h1 className="font-vbs text-5xl mt-24 mb-12">Mande sua mensagem para os noivos</h1>
                    
                    <div className="w-full flex items-center justify-center">
                        <Input className=" w-64 mr-12" placeholder="Nome"></Input>
                        <Input className=" w-64 " placeholder="Email"></Input>
                    </div>

                    <div className="w-full flex items-center justify-center mt-4">
                        <Textarea className="w-[35rem] h-64" placeholder="Digite sua mensagem"></Textarea>
                    </div>

                    <Button className="w-80 mt-4 rounded-3xl" variant={"outline"}>Enviar</Button>
                </div>
            </div>
        </>
    )
}