import { Request,Response } from "express";
import { BuscarUsuarioservices } from "../../services/Usuario/BuscarUsuarioservices";



class BuscarUsuarioControlles{
    async handle(req:Request, res:Response){
        const buscarUsuarioControlles = new BuscarUsuarioservices();
        const BuscarUsuarios = await buscarUsuarioControlles.execute();
        return res.json(BuscarUsuarios)

    }


}

export{BuscarUsuarioControlles}