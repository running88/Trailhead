({
    doInit:function(component, event, helper){
        //Create the action
        var action = component.get("c.getExpenses");
        //Add callback behavior for when response is received
        action.setCallback(this,function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS")
                component.set("v.expenses",response.getReturnValue());
           	else
                console.log("Failed with state: " + state);
        });
        
        //send action off to be executed
        $A.enqueueAction(action);
    },
    clickCreateExpense : function(component, event, helper) {
        if(helper.validateExpenseForm(component)){
            //create new expense
            var newExpense = component.get("v.newExpense");
            helper.createExpense(component, newExpense);
        }
	}
})
