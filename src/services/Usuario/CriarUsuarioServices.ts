
import prismaClient from "../../prisma"
import { hash } from 'bcryptjs'

interface CadastrarUsuario{
    nome: string,
    email: string,
    senha: string
}

class CriarUsuarioServices{
  async execute({nome,email,senha}:CadastrarUsuario){
    if (!nome ||!email || !senha ) {
        throw new Error("Preencha os campos vasios")        
    }
      const EmailCadastrado = await prismaClient.user.findFirst({
        where:{
            email:email
        }
      })
      if(EmailCadastrado ){
        throw new Error ("email ja cadastrado")
     }
     const senhaCrypt = await hash(senha, 8)
     const usuarios = await prismaClient.user.create({
        data:{
            nome:nome,
            email:email,
            senha:senhaCrypt
        },
        select:{
            nome:true,
            email:true,
            senha:true
        }
  });
      return{dados:usuarios}
}
}

export {CriarUsuarioServices}