({
    myAction : function(component, event, helper) {

    },
    getMessage : function(component, event) {
        var params = event.getParam('arguments');
        if (params) {
            var param1 = params.Name;
            return "Hello "+param1+" from child!";
        }
        return "";
    }
})