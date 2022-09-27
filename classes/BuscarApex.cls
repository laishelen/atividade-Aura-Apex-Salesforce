public class BuscarApex {
    
    // Deixo disponível para o Aura Component
    @AuraEnabled
    // Metodo estático que retorna uma lista de contas
    public static List<Account> buscarListaContas()
    {        
        List<Account> ListaContas = [Select Id, Name, Phone, Description From Account Where Phone != null ORDER BY CreatedDate desc];
        List<Account> Lista10Registros = new List<Account>();

        for(Integer i = 0; i < 10; i++)
        {
            Lista10Registros.add(ListaContas[i]);
        }
        
        return Lista10Registros;
    }

}