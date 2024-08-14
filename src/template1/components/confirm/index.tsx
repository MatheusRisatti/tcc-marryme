import { Checkbox } from "@radix-ui/react-checkbox"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function Confirm(){
    return(
        <>
            <div className="flex items-center justify-center flex-col">
                <div className=" w-[50rem] flex items-center justify-center flex-col">
                    
                    <h1 className="font-vbs text-5xl mt-24 mb-12">Confirmar Prenseça</h1>
                    
                    <div className="w-full flex items-center justify-center">
                        <Input className=" w-64 mr-12" placeholder="Nome(s)" />
                        <Input className=" w-64 " placeholder="Telefone" />
                    </div>

                    <div className="w-full flex items-center justify-center flex-col mt-4">
                        <h3 className="font-ppns">Padrinho ?</h3>
                        <input type="checkbox" id="yes" />
                        <label htmlFor="yes">Sim</label>
                        <input type="checkbox" id="no" />
                        <label htmlFor="no">Não</label>
                    </div>

                    <Button className="w-80 mt-4 rounded-3xl" variant={"outline"}>Enviar</Button>

                </div>

            </div>
        </>
    )
}