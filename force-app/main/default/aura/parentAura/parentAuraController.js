({
    handleInit: function (cmp, event, helper) {
        // 初始化组件时，调用Help.js中getDisplayMonths函数，获取下拉框值列表
        helper.getDisplayMonths(cmp);
    },

    changeDisplayMonth: function (cmp, event, helper) {
        console.log("displayMonths: " + cmp.get('v.displayMonths'))
        console.log("selected displayMonth: " + cmp.get('v.selectedDisplayMonth'));
        
    },

    applyHandle: function (cmp, event, helper) {
        // 点击parentApply按钮时，将下拉框选中的值赋值给属性displayMonth
        cmp.set('v.displayMonth', cmp.get('v.selectedDisplayMonth'));
        // 点击parentApply按钮时，将true赋值给属性read.
        cmp.set('v.read', "true");
        console.log("after click apply, displayMonth: " + cmp.get('v.displayMonth'));
    }
})