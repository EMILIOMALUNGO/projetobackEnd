import { Request,Response } from "express";
import { CriarClienteServices } from "../../services/Cliente/CriarClienteServices";



class CriarClienteControlles{
    async hanld (req:Request, res:Response){

        const {nome,cpf,cnpj,celular,fixo,rua,complemento,bairro,cidade,estado}=req.body

        const criarClienteControlles = new CriarClienteServices()
        const clientes = await criarClienteControlles.execute({
            nome,cpf,cnpj,celular,fixo,rua,complemento,bairro,cidade,estado
        })
        return res.json(clientes)
}
}
export {CriarClienteControlles}

