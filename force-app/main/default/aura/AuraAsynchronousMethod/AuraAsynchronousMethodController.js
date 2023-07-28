/* auraMethodController.js */
({
    /**
     * 父组件调用子组件的方法
     * @param {*} cmp 
     * @param {*} event 
     */
    echo : function(cmp, event) {
        //获取参数,即method中定义的属性
        var params = event.getParam('arguments');
        var callback;
        if (params) {
            //aura:method中定义的属性，即回调函数
            callback = params.callback;
        }

        //apex SimpleServerSideController中定义的方法 serverEcho
        var action = cmp.get("c.serverEcho");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("From server: " + response.getReturnValue());
                // return doesn't work for async server action call
                //return response.getReturnValue();
                // call the callback passed into aura:method
                if (callback) callback(response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +
                          errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
})