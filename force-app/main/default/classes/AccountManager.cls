@RestResource(urlMapping='/Accounts/*/contacts')
global with sharing class AccountManager {
    @HttpGet
    global static Account getAccount() {
        RestRequest request = RestContext.request;
        // grab the accountId from the end of the URL
        String accountId = request.requestURI.substringBetween('Accounts/','/contacts');
        System.debug('Account ID: ' + accountId);
        Account result =  [SELECT Id, Name, (SELECT Id, Name FROM Contacts) FROM Account WHERE Id = :accountId LIMIT 1];
        System.debug ('Account: ' + result);
        return result;
    }
}