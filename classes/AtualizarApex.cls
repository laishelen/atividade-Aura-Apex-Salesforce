public with sharing class AtualizarApex 
{
    // Deixo disponível para o Aura Component
    @AuraEnabled
    // Defino método para atualizar conta utilizando os parametros definidos
    public static void atualizarConta(String id, String nome, String telefone, String descricao)   
    {     
        // Instancio um objeto da classe ACCOUNT          
        Account registroAlterado = new Account();
        
        // Atribuo id para o Id de registroAlterado
        registroAlterado.Id = id;
        registroAlterado.Name = nome;
        registroAlterado.Phone = telefone;
        registroAlterado.Description = descricao;
        
        // Realizo o update de registroAlterado
        update registroAlterado;
    }   
}
