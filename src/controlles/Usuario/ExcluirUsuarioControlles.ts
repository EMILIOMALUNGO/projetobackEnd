import { Request, Response } from "express";
import { ExcluirUsuarioServices } from "../../services/Usuario/ExcluirUsuarioServices";



class ExcluirUsuarioControlles{
    async handle(req:Request, res:Response){
        const{id}=req.body;
        console.log(id)
        const excluirUsuarioControlles = new ExcluirUsuarioServices();
        const ExcluirUsuarios = await excluirUsuarioControlles.execute({
           id
        })
        if (id) {
            throw new Error("o suario a pagado com sucesso")
            
        }
        return res.json(ExcluirUsuarios)
        }
         
    }



export {ExcluirUsuarioControlles}