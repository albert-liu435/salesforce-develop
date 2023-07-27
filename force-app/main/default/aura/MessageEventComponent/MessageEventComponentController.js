({
    handlerInit : function(component, event, helper) {
        console.log('execute init');
        // 获取事件并发送事件
        //进行触发事件
        var messageEvent = component.getEvent('componentEvent');
        messageEvent.setParam('message','testAfterUpdate');
        messageEvent.fire();
    },
    handlerMessageChange : function(component,event,helper) {
        console.log('execute change');
        console.log('old value : ' + event.getParam('oldValue'));
        console.log('current value : ' + event.getParam('value'));
    },
    handlerMessageEvt : function(component,event,helper) {
        console.log(event.getParam('message'));
        component.set('v.messageAttribute',event.getParam('message'));
    }
})