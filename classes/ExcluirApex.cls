public with sharing class ExcluirApex 
{
    // Deixo disponível para o Aura Component
    @AuraEnabled
    // Defino método para deletar conta utilizando os parametros definidos
    public static void deletarConta(String id, String nome, String telefone, String descricao)   
    {       
        // Instancio um objeto da classe ACCOUNT               
        Account deletarRegistro = new Account();
        
        // Atribuo id para o Id de registroAlterado
        deletarRegistro.Id = id;
        deletarRegistro.Name = nome;
        deletarRegistro.Phone = telefone;
        deletarRegistro.Description = descricao;
        
        // Realizo o delete de deletarRegistro
        delete deletarRegistro;
    }   
}
