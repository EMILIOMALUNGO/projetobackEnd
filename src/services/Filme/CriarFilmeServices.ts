
import prismaClient from "../../prisma"


interface CriarFilme{
    titulo:string,
    duracao:string,
    release_data:string
}

class CriarFilmeServices{
     async execute({titulo,duracao,release_data}:CriarFilme){
        if (!titulo || !duracao || !release_data) {
             throw new Error("Preencha os campos vasios")            
        }
          const TituloCadastrado = await prismaClient.movie.findFirst({
            where:{
                titulo:titulo
            }
           
          })
          if (TituloCadastrado) {
              throw new Error("Este titulo ja esta cadastrado")  
          }
          const Filmes = await prismaClient.movie.create({
            data:{
                titulo:titulo,
                duracao:duracao,
                release_data:release_data,
            },
            select:{
                titulo: true,
                duracao: true,
                release_data:true
                
            }

          })
          return {dados:Filmes}

     }

}

export {CriarFilmeServices}