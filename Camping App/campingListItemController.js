({
	packItem : function(component, event, helper) {
		var btn = event.getSource();
        var item = component.find("v.item");
        item.Packed__c = true;
        component.set("v.item",item);
        btn.set("v.disabled",true);
	}
})
