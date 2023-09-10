import { Router } from "express";

///essas importação serve para pegar os dadod que estão no frontEnd e mandar dados no backEnd
import { CriarUsuarioControlles } from "./controlles/Usuario/CriarUsuarioControlles";
import { CriarFilmeControlles } from "./controlles/Filme/CriarFilmeControlles";
import { CriarClienteControlles } from "./controlles/Cliente/CriarClienteControlles";

///essas importação serve para pegar os dados que estao no backEnd e mostrar no frontEnd
import { BuscarUsuarioControlles } from "./controlles/Usuario/BuscarUsuarioControlles";
import { BuscarFilmesControlles } from "./controlles/Filme/BuscarFilmesControlles";
import { BuscarClientesControlles } from "./controlles/Cliente/BuscarClientesControlles";

///essas importação serve para apagar os dados que estão armazenado no banco de dados 
import { ExcluirUsuarioControlles } from "./controlles/Usuario/ExcluirUsuarioControlles";
import { ExcluirFilmeControlles } from "./controlles/Filme/ExcluirFilmeControlles";
import { ExcluirClienteControlles } from "./controlles/Cliente/ExcluirClienteControlles";




const router = Router()

router.post('/CriarUsuarios1', new CriarUsuarioControlles().hanld)
router.post('/CriarFilmes1', new CriarFilmeControlles().hanld)
router.post('/CriarClientes1', new CriarClienteControlles().hanld)

router.get('/BuscarUsuari1', new BuscarUsuarioControlles().handle)
router.get('/BubuscarFilmes1',new BuscarFilmesControlles().handle )
router.get('/BuscarClientes1',new BuscarClientesControlles().handle)

router.delete('/ExcluirUsuario1',new ExcluirUsuarioControlles().handle)
router.delete('/ExcluirFilme1',new ExcluirFilmeControlles().handle)
router.delete('/ExcluirCliente1',new ExcluirClienteControlles().handle)


export {router}