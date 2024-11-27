import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Confirm(){
    return(
        <>
            <div className="flex items-center justify-center flex-col">
                <div className=" w-[35rem] flex items-center justify-center flex-col">
                    
                    <h1 className="font-vbs text-5xl mt-24 mb-12">Confirmar Prenseça</h1>
                    
                    <div className="w-full flex items-center justify-center">
                        <Input className=" w-64 mr-12" placeholder="Nome(s)" />
                        <Input className=" w-64 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [appearance:textfield]" type="number" placeholder="Telefone" />
                    </div>

                    <div className="w-full flex items-start justify-center gap-2 flex-col mt-4 ml-2">
                        <h3 className="font-ppns">Padrinho ?</h3>

                        <div className="flex items-start justify-start w-full flex-col gap-3">
                            <div className="flex items-center w-12 gap-1    ">
                                <Checkbox id="yes"/>
                                <Label htmlFor="yes">Sim</Label>
                            </div>
                        
                            <div className="flex items-center w-12 gap-1 ">
                                <Checkbox id="no"/>
                                <Label htmlFor="no">Não</Label>
                            </div>
                        
                        </div>
                    </div>

                    <Button className="w-80 mt-4 rounded-3xl" variant={"outline"}>Enviar</Button>

                </div>

            </div>
        </>
    )
}