import { Request,Response } from "express";
import { CriarFilmeServices } from "../../services/Filme/CriarFilmeServices";





class CriarFilmeControlles{
      async hanld(req:Request, res:Response){
        
         const {titulo,duracao, release_data} = req.body

         const criarFilmeControlles = new CriarFilmeServices()
         const Filmes = await criarFilmeControlles.execute({
            titulo,duracao,release_data
         })
         return res.json(Filmes)

      }
}
export{CriarFilmeControlles}