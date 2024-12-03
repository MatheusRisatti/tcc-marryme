import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Confirm() {
  return (
    <>
      <div className="flex flex-col items-center justify-center" id="cnfrm">
        <div className="flex w-[35rem] flex-col items-center justify-center">
          <h1 className="mb-12 mt-24 font-rds text-5xl">Confirmar Prenseça</h1>

          <div className="flex w-full items-center justify-center">
            <Input className="mr-12 w-64" placeholder="Nome(s)" />
            <Input
              className="w-64 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0"
              type="number"
              placeholder="Telefone"
            />
          </div>

          <div className="mb-5 ml-2 mt-4 flex w-full flex-col items-start justify-center gap-2">
            <h3 className="font-rds text-2xl">Padrinho ?</h3>

            <div className="flex w-full flex-col items-start justify-start gap-3">
              <div className="flex w-12 items-center gap-1">
                <Checkbox id="yes" />
                <Label htmlFor="yes">Sim</Label>
              </div>

              <div className="flex w-12 items-center gap-1">
                <Checkbox id="no" />
                <Label htmlFor="no">Não</Label>
              </div>
            </div>
          </div>

          <Button className="mt-4 w-80 rounded-3xl" variant={'outline'}>
            Enviar
          </Button>
        </div>
      </div>
    </>
  )
}
