@IsTest
private class AccountManagerTest {
	@IsTest static void testGetAccount() {
        Id recordId = createTestRecord();
        //Id recordId = '0015J000002v8JjQAI';
        System.debug('Test ID: ' + recordId);
        // Set up a test request
        RestRequest request = new RestRequest();
        request.requestUri = 'https://creative-koala-ceemid-dev-ed.trailblaze.lightning.force.com/services/apexrest/Accounts/' + recordId + '/contacts';
        request.httpMethod = 'GET';
        RestContext.request = request;
        // Call the method to test
        Account thisAccount = AccountManager.getAccount();
        // Verify results
        System.assert(thisAccount != null);
        System.assertEquals('Test Account', thisAccount.Name);
    }
    
    // Helper method
    static Id createTestRecord() {
        // Create test record
        Account accountTest = new Account(
            Name='Test Account');
        insert accountTest;
        Contact TestCon= new Contact(
        	LastName='Test', 
        	AccountId = accountTest.id);
        return accountTest.Id;
    } 
}


// //Test  class
// @isTest 
// private class AccountManagerTest{
//     static testMethod void testMethod1(){
//         Account objAccount = new Account(Name = 'test Account');
//         insert objAccount;
//         Contact objContact = new Contact(LastName = 'test Contact',
//                                          AccountId = objAccount.Id);
//         insert objContact;
//         Id recordId = objAccount.Id;
//         RestRequest request = new RestRequest();
//         request.requestUri =
//             'https://creative-koala-ceemid-dev-ed.trailblaze.lightning.force.com/services/apexrest/Accounts/'
//             + recordId +'/contacts';
//         request.httpMethod = 'GET';
//         RestContext.request = request;
//         // Call the method to test
//         Account thisAccount = AccountManager.getAccount();
//         // Verify results
//         System.assert(thisAccount!= null);
//         System.assertEquals('test Account', thisAccount.Name);
//     }
// }
