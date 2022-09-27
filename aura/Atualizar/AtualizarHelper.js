({
    enviarConta : function(component, event, helper) {        
        // Realizo a chamada do atualizarConta da minha AtualizarApex
		var action = component.get('c.atualizarConta');
        // Seto os parametros necessários para a chamada
        action.setParams({
            id : component.get('v.id'),
			nome : component.get('v.nome'),
            telefone : component.get('v.telefone'),
            descricao : component.get('v.descricao')
		});
        
        
        // Realizo um callback para validar e pegar a resposta do meu back-end
        action.setCallback(this, function(response){
            // Atribuo o estado da resposta na variavel state
			let state = response.getState();           
            // Verifico de a resposta é SUCCESS
            if(state === 'SUCCESS')
            {    
                // Chamando (showToast)           
                helper.showToast(component, event, helper, 'success');
                // Chamando (limparCampos)    
                helper.limparCampos(component, event, helper);
            }
            
            // Verifico de a resposta é ERROR
            if(state === 'ERROR') {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert("Error message: " + 
                                 errors[0].message);
                    }
                } else {                 
                    // Mostra um alerta se o estado estiver com erro
                    alert("Erro desconhecido");
                }
            }
			
		});
        
        // Coloco na fila minha chamada action
        $A.enqueueAction(action);
	},
    
    // Função para limpar variáveis
    limparCampos : function(component, event, helper) {
        // Limpo minhas variáveis
        component.set('v.id', '');
        component.set('v.nome', '');
        component.set('v.telefone', '');
        component.set('v.descricao', '')
    },
    
    showToast : function(component, event, helper, type) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            // Defino os paramentros de entrada para toastEvent
            "title": "Successo!",
            "type": type,
            "message": "Sua conta foi atualizada com sucesso!"
        });
        // Disparo meu toastEvent
        toastEvent.fire();
    }
})
