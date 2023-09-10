import { Request, Response } from "express";
 import { ExcluirClienteServer } from "../../services/Cliente/ExcluirClienteServer";


class ExcluirClienteControlles{
    async handle(req:Request , res:Response){
        const {id} = req.body

        const excluirClienteControlles = new ExcluirClienteServer()
        const ExcluirCliente = await excluirClienteControlles.execute({
            id
        }) 
        if (id) {
            throw new Error("cliente excluido com sucesso")
            
        }
         return res.json(ExcluirCliente)
    }


}
export{ExcluirClienteControlles}