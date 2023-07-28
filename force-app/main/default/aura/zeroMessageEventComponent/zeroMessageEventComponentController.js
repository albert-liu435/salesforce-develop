({
    handlerInit : function(component, event, helper) {
        console.log('execute init');
        var messageEvent = component.getEvent('zeroComponentEvent');
        messageEvent.setParam('message','testAfterUpdate');
        messageEvent.fire();
    },

    callMethod:function(component,event,helper){
        console.log('execute init');
        //获取事件
        var messageEvent = component.getEvent('zeroComponentEvent');
        //设置事件参数
        messageEvent.setParam('message','testAfterUpdate');
        //发送事件
        messageEvent.fire();
    },
    handlerMessageChange : function(component,event,helper) {
        console.log('execute change');
        //获取事件信息value
        console.log('old value : ' + event.getParam('oldValue'));
        console.log('current value : ' + event.getParam('value'));
    },
    handlerMessageEvt : function(component,event,helper) {
        console.log(event.getParam('message'));
        component.set('v.messageAttribute',event.getParam('message'));
    }
})