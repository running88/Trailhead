({
	validateForm : function(component) {
		var validForm = true;
        //Check name field
        var nameField = component.find("citemname");
        var name = nameField.get("v.value");
        if($A.util.isEmpty(name)){
            validForm = false;
            nameField.set("v.errors",[{
                message: "Name field can't be empty"
            }]);
        }
        else
            nameField.set("v.errors",null);
        //Check Quantity Field
        var quantityField = component.find("citemquantity");
        var quantity = quantityField.get("v.value");
        if($A.util.isEmpty(quantity) || isNaN(quantity) || quantity<=0){
            validForm = false;
            quantityField.set("v.errors",[{
                message: "Fill quantity field"
            }]);
        }
        else
            quantityField.set("v.errors",null);
        //Check Price field
        var priceField = component.find("citemprice");
        var price = priceField.get("v.value");
        if($A.util.isEmpty(price) || isNaN(price) || price<=0.0){
            validForm = false;
            priceField.set("v.errors",[{
                message: "Fill price field"
            }]);
        }
        else
            priceField.set("v.errors",null);
        
        // return boolean value
        return validForm;
	},
    createItem: function(component){
        var newItem = component.get("v.newItem");
            var action = component.get("c.saveItem");
            action.setParams({
                "cItem": newItem
            });
            action.setCallback(this,function(response){
            	var state = response.getState();
                if(component.isValid() && state === "SUCCESS"){
                    var items = component.get("v.items");
                    items.push(response.getReturnValue());
                    component.set("v.items",items);
                    
                    // reset form fields
                    component.set("v.newItem",{
                        'Name': '',
                        'Quantity__c': 0,
                        'Price__c': 0,
                        'Packed__c': false
                    });
                }
                else
                    console.log("Save Action failed with state : " + state);
            });
            
            $A.enqueueAction(action);
    }
})
