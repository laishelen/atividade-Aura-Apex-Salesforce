public class CriarApex 
{  

    // Deixo disponível para o Aura Component
    @AuraEnabled
    // Defino método para criar conta utilizando os parametros definidos
    public static void criarConta(String nome, String telefone, String descricao)   
    {     
        // Instancio um objeto da classe ACCOUNT            
        Account novoRegistro = new Account();
        
        // Atribuo nome para o Name de novoRegistro
        novoRegistro.Name = nome;
        novoRegistro.Phone = telefone;
        novoRegistro.Description = descricao;
        
        // Realizo o insert de novoRegistro
        insert novoRegistro;
    }        
}
