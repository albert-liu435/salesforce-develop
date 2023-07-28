({
    myAction : function(component, event, helper) {

        component.set("v.Columns", [
            {label:"First Name", fieldName:"FirstName", type:"text"},
            {label:"Last Name", fieldName:"LastName", type:"text"},
            {label:"Phone", fieldName:"Phone", type:"phone"}
        ]);
        


        var action = component.get("c.getContacts");
        //设置请求参数
        action.setParams({
            recordId: component.get("v.recordId")
        });
        //回调函数
        action.setCallback(this, function(data) {
            component.set("v.Contacts", data.getReturnValue());
        });
        //向后台发送请求
        $A.enqueueAction(action);
        
    }
})