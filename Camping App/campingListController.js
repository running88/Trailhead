({
    doInit: function(component, event, helper){
        var action = component.get("c.getItems");
        action.setCallback(this,function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                component.set("v.items",response.getReturnValue());
            }
            else
                console.log("Init failed with state: " + state);
        });
        // call Apex function
        $A.enqueueAction(action);
    },
    clickCreateNewItem : function(component, event, helper) {
        
        if(helper.validateForm(component)){
            helper.createItem(component);
        }
            /*
            var newItem = component.get("v.newItem");
            console.log('*** Create Record: ' + 
                        JSON.stringify(newItem));
            // newRecordFunction(component,newItem);
            
            var items = component.get("v.items");
            var item = JSON.parse(JSON.stringify(newItem));
            console.log("Items before push: " +
                       JSON.stringify(items));
            items.push(item);
            console.log("Items after push: " +
                       JSON.stringify(items));
            component.set("v.items",items);
            
            component.set("v.newItem",{
                'sobjectType' : 'Camping_Item__c',
                'Name' : '',
                'Quantity__c' : 0,
                'Price__c': 0,
                'Packed__c' : false
            });
            */
	}
})
