import { Request,Response } from "express";

import { ExcluirFilmeServer } from "../../services/Filme/ExcluirFilmeServer";


class ExcluirFilmeControlles{
     async handle(req:Request, res:Response){
          const {id} = req.body
          console.log(id)
          const excluirFilmeControlles  = new ExcluirFilmeServer();
          const excluirFilmes = await excluirFilmeControlles.execute({
            id
        })
        if(id){
            throw new Error('fimle apagado com sucesso')
        }
        return res.json(excluirFilmes)
    }
   
}
export{ExcluirFilmeControlles}