({
    doInit : function(component, event, helper) {
        var objectName = component.get("v.objectName");
        helper.callListViewServer(
            component,
            "c.getListViewData",
            function(response){ component.set("v.repList",response); },
            {"objectName": objectName}
        );
    }
})