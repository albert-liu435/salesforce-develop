// 
({
    openModel: function(component, event, helper) {
        component.set("v.openConfirmation", true);
    },
    getMessage : function(component, event) {
        alert('message from parent component!');
        component.set("v.openConfirmation", false);
    }
 })
