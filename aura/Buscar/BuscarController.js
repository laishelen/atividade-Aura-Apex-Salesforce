({
    //FUNCAO DE EVENTO PARA RODAR ASSIM QUE A TELA FOR CARREGADA AO INIT (INICIALIZAR -> INITIATE)
    init: function (component, event, helper) {
        
        //CRIA VARIAVEL COM AS OPCOES DO DROPDOWN MENU (dentro da tabela)
        var actions = [
            { label: 'Editar', name: 'editar' },
            { label: 'Deletar', name: 'deletar' }
        ];
        
        // Seto as label para minha v.columns
        component.set('v.columns', [
            {label: 'Nome da Conta', fieldName: 'Name', type: 'text'},      
            {label: 'Telefone', fieldName: 'Phone', type: 'Phone'},    
            {label: 'Descrição', fieldName: 'Description', type: 'text'},
            {label: '', type: 'action', typeAttributes: { rowActions: actions } }
        ]);

        //RETORNA OS DADOS DA CONTAS
        helper.retornarListaContas(component, event);        
    },
   
    buscarContas : function(component, event, helper) {
        //UTILIZA O HELPER PARA TRAZER OS DADOS DO BACKEND
        helper.retornarListaContas(component, event);
    },

    // Função para definir as ações
    handleRowAction : function(component, event, helper) {

        // Pego a ação do meu event e atribuo para action
        var action = event.getParam('action');
        // Pego a linha do meu event e atribuo para row
        var row = event.getParam('row');
        
        switch (action.name) {
            case 'editar':
                var navService = component.find("navService");
                var pageReference = {
                    "type": "standard__component",
                    "attributes": {
                        "componentName": "c__Atualizar"
                    },
                    "state": {
                        "c__registro": row
                    }
                }
                
                navService.navigate(pageReference);

                var evt = $A.get("e.c:passarDado");
                evt.setParam("id",row.Id);
                evt.setParam("nome",row.Name);
                evt.setParam("telefone",row.Phone);
                evt.setParam("descricao",row.Description);
                evt.fire();
                
                break;
            case 'deletar':
                var navService = component.find("navService");
                var pageReference = {
                    "type": "standard__component",
                    "attributes": {
                        "componentName": "c__Excluir"
                    },
                    "state": {
                        "c__registro": row
                    }
                }
                
                navService.navigate(pageReference);

                var evt = $A.get("e.c:passarDado");
                evt.setParam("id",row.Id);
                evt.setParam("nome",row.Name);
                evt.setParam("telefone",row.Phone);
                evt.setParam("descricao",row.Description);
                evt.fire();
                break;
        }
    }
})