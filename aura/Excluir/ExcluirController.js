
({
    // Função para iniciar meu componente
    init : function(component, event, helper) {
        // Defino uma variável
        var pageReference = component.get("v.pageReference");

        component.set("v.registro", pageReference.state.c__registro);
        if(pageReference.state.hasOwnProperty('c__registro')) {
            component.set("v.id", pageReference.state.c__registro.Id);
            component.set("v.nome", pageReference.state.c__registro.Name);
            component.set("v.telefone", pageReference.state.c__registro.Phone);
            if(pageReference.state.c__registro.hasOwnProperty('Description')) {
                component.set("v.descricao", pageReference.state.c__registro.Description);
            } 
        }        
    },

    getValueFromApplicationEvent : function(component, event) {
        component.set("v.id", event.getParam("id"));
        component.set("v.nome", event.getParam("nome"));
        component.set("v.telefone", event.getParam("telefone"));
        component.set("v.descricao", event.getParam("descricao"));
    },

    deletarRegistro: function(component, event, helper) {
        let text = "Deseja deletar?";
        if (confirm(text) == true) {
            // Chamando (deletarConta)
            helper.deletarConta(component, event, helper);
        }         
    }
})
