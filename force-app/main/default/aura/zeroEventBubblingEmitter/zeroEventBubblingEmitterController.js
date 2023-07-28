({
    fireEvent : function(component, event, helper) {
        var cmpEvent = component.getEvent("bubblingEvent");
        cmpEvent.fire();
    }
})