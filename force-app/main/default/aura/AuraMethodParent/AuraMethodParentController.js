({
    myAction : function(component, event, helper) {

    },
    callAuraMethod : function(component, event, helper) {
        //查找子组件
		var childCmp = component.find("childComponent");
        //调用子组件的方法，并传入参数
        var retnMsg = childCmp.GetMessageFromChildMethod('Wilson');

        component.set("v.message", retnMsg);
    }
})
