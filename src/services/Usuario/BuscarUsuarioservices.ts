import prismaClient from "../../prisma";




class BuscarUsuarioservices{
    async execute(){
        const BuscarUsuarios = await prismaClient.user.findMany({})
        return(BuscarUsuarios)
    }

}
export{BuscarUsuarioservices}