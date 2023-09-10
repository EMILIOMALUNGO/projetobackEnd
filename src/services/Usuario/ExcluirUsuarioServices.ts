import prismaClient from "../../prisma";

interface ExcluirUsuario{
    id:string
}


class ExcluirUsuarioServices{
    async execute({id}:ExcluirUsuario){
        const ExcluirUsuario = await prismaClient.user.delete({
          where:{
            id:id
          }
        })
      
    }

}
export {ExcluirUsuarioServices}