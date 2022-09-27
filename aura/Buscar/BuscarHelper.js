({   
    
        
    retornarListaContas : function(component, event) {
        // Realizo a chamada da função buscarListaContas na minha BuscarApex
        var action = component.get('c.buscarListaContas');

        // Seto os parametros necessários para a chamada
        action.setCallback(this, function(response){
            // Atribuo o estado da resposta na variavel resposta
			let resposta = response.getReturnValue();
			
            // Atribuo valor resposta a atributo contas
            component.set('v.contas ', resposta);
		});

        // Coloco na fila minha chamada action
		$A.enqueueAction(action);
    }
})