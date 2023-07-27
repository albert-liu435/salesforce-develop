({
    myAction : function(component, event, helper) {

    },
    doSomething:function(compoent,event,helper){
        console.log('doSomething')
        console.log('doSomething:'+event.target)
    },
    doSomething2:function(compoent,event,helper){
        console.log('doSomething2')
        console.log('doSomething2:'+event.target)
    },
    doSomething3:function(compoent,event,helper){
        console.log('doSomething3')
        console.log('doSomething3:'+event.target)
    },
    handleShowNotice : function(component, event, helper) {
        component.find('notifLib').showNotice({
            "variant": "error",
            "header": "Something has gone wrong!",
            "message": "Unfortunately, there was a problem updating the record.",
            closeCallback: function() {
                alert('You closed the alert!');
            }
        });
    },
    // handleShowToast : function(component, event, helper) {
    //     component.find('notifLib').showToast({
    //         "title": "Success!",
    //         "message": "The record has been updated successfully."
    //     });
    // },

        handleShowToast : function(component, event, helper) {
            component.find('notifLib').showToast({
            "title": "Success!",
            "message": "Record {0} created! See it {1}!",
            "messageData": [
                'Salesforce',
                {
                    url: 'http://www.salesforce.com/',
                    label: 'here',
                }
            ]
        });
    }
})
