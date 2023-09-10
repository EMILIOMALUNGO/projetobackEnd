import { Request, Response } from "express";

import { BuscarClientesServices } from "../../services/Cliente/BuscarClientesServices";


class BuscarClientesControlles{
    async handle(req:Request, res:Response){
        const buscarClientesControlles = new BuscarClientesServices();
        const BuscarClientes = await buscarClientesControlles.execute()

        return res.json(BuscarClientes)
    }


}
export {BuscarClientesControlles}