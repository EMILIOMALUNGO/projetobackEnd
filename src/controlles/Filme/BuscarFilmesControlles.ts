import { Request,Response } from "express";
import { BuscarFilmesServices } from "../../services/Filme/BuscarFilmesServices";




class BuscarFilmesControlles{
   async handle(req:Request, res:Response){

    const buscarFilmesControlles = new BuscarFilmesServices();
    const BuscarFilmes = await buscarFilmesControlles.execute();
   
    return res.json(BuscarFilmes)

   }
}
export {BuscarFilmesControlles}