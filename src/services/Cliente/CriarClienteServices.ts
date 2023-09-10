import prismaClient from "../../prisma";


interface CriarCliente{
    nome:string,
    cpf:string
    cnpj:string
    celular:string
    fixo:string
    rua:string
    complemento:string
    bairro:string
    cidade:string
    estado:string
}

class CriarClienteServices{
    async execute({nome,cpf,cnpj,celular,fixo,rua,complemento,bairro,cidade,estado}:(CriarCliente)){
        if (!nome|| !cpf||!cnpj || !celular ||!fixo ||!rua ||!complemento ||!bairro ||!cidade ||!estado) {
            throw new Error("Preencha os campos vasios")    
        }
        const elemetosUnicos = await prismaClient.clients.findFirst({
            where:{
               OR:[
                    {
                        cpf:cpf
                    },
                    {
                        cnpj:cnpj
                    }
               ] 
            }
            
        })
        if(elemetosUnicos) {
         throw new Error("cepf ou cnpj ja cadastrado")
        }
        const clientes = await prismaClient.clients.create({
            data:{
                nome:nome,
                cpf:cpf,
                cnpj:cnpj,
                celular:celular,
                fixo:fixo,
                rua:rua,
                complemento:complemento,
                bairro:bairro,
                cidade:cidade,
                estado:estado
            },
            select:{
                nome:true,
                cpf:true,
                cnpj:true,
                celular:true,
                fixo:true,
                rua:true,
                complemento:true,
                bairro:true,
                cidade:true,
                estado:true
            }
        })
    }

}

export{CriarClienteServices}
