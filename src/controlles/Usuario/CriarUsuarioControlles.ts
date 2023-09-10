 import { Request,Response } from "express";
  import { CriarUsuarioServices } from "../../services/Usuario/CriarUsuarioServices";




  class CriarUsuarioControlles{
    async hanld(req:Request, res:Response){

        const {nome, email, senha}= req.body
        
        const criarUsuarioControlles = new CriarUsuarioServices()
        const usuarios = await criarUsuarioControlles.execute({
            nome,
            email,
            senha
        })
         return res.json(usuarios)
    }
  }
  export {CriarUsuarioControlles}