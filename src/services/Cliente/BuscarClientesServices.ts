import prismaClient from "../../prisma";




class BuscarClientesServices{
   async execute(){
      const BuscarClientes = await prismaClient.clients.findMany()
      return(BuscarClientes)

   }

}
export{BuscarClientesServices}