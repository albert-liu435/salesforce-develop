({
    myAction : function(component, event, helper) {

    },
    callAuraMethod : function(component, event, helper) {
		var childCmp = component.find("childComponent");
        var retnMsg = childCmp.GetMessageFromChildMethod('Wilson');
        component.set("v.message", retnMsg);
    }
})