import prismaClient from "../../prisma"



class BuscarFilmesServices{
     async execute(){
        const BuscarFilmes = await prismaClient.movie.findMany();
        return(BuscarFilmes)
     }

}
export {BuscarFilmesServices}