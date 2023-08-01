// 改进后，将method, callback, params作为参数去传递，
// 在controller中去处理response内容
({
    callListViewServer : function(component, method, callback, params) {
        var action = component.get(method);
        if(params){
            action.setParams(params);
        }
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                callback.call(this,response.getReturnValue());
            }else if(state === "ERROR"){
                alert('连接失败，请重试！');
            }
        });
        $A.enqueueAction(action);
    }
})