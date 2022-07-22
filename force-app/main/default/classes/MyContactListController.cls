public with sharing class MyContactListController {
    @AuraEnabled
    public static List<Contact> getContacts(Id recordId) {
        //进行查询
       return [SELECT Id, FirstName, LastName, Email, Phone FROM Contact WHERE AccountId = :recordId];
    }
}
