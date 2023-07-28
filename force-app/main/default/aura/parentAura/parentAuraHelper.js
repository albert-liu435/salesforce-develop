({
    getDisplayMonths : function(cmp) {
        // 获取controll.cls类中getDisplayMonths函数
        var action = cmp.get("c.getDisplayMonths");
        // 为该函数设置回调函数
        action.setCallback(this, function (response) {
            var status = response.getState();
            console.log("get displayMonths: " + status);
            // 判断调用controller.cls类getDisplayMonths函数的响应状态码
            if (status == "SUCCESS") {
                // 解析controller.cls传回的响应，并赋值给变量repsonseBody
                var responseBody = JSON.parse(response.getReturnValue());
                // 将变量responseBody赋值给组件属性displayMonths(下拉框值列表)
                cmp.set("v.displayMonths", responseBody);
            }
        });
        // 执行获取数据行动
        $A.enqueueAction(action);
    }
})