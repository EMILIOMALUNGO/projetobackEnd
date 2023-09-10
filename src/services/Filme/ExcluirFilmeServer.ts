import prismaClient from "../../prisma";



interface ExcluirFilmeS{
     id:string
}

class ExcluirFilmeServer{
    async execute({id}:ExcluirFilmeS){
        const ExcluirFilmeS = await prismaClient.movie.delete({
            where:{
                id:id
            }
        })
    }

}
export{ExcluirFilmeServer}