import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Message() {
  return (
    <>
      <div className="flex flex-col items-center justify-center" id="msg">
        <div className="flex w-[50rem] flex-col items-center justify-center">
          <h1 className="mb-12 mt-24 font-rds text-5xl">
            Mande sua mensagem para os noivos
          </h1>

          <div className="flex w-full items-center justify-center">
            <Input
              className="mr-12 w-64 font-rds text-2xl"
              placeholder="Nome"
            ></Input>
            <Input
              className="w-64 font-rds text-2xl"
              placeholder="Email"
            ></Input>
          </div>

          <div className="mt-4 flex w-full items-center justify-center">
            <Textarea
              className="h-64 w-[35rem] font-rds text-2xl"
              placeholder="Digite sua mensagem"
            ></Textarea>
          </div>

          <Button
            className="mt-4 w-80 rounded-3xl font-rds text-2xl"
            variant={'outline'}
          >
            Enviar
          </Button>
        </div>
      </div>
    </>
  )
}
