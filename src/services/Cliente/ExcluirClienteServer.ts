import prismaClient from "../../prisma";


interface ExcluirCliente{
    id:string
}

class ExcluirClienteServer{
      async execute({id}:ExcluirCliente){
        const ExcluirCliente = await prismaClient.clients.delete({
            where:{
                id:id
            }
        })

      }
}
export {ExcluirClienteServer}
