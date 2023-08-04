public with sharing class DonationsController {

    public List<Account> getDonationLocations() {
        List<Account> sites = [SELECT Id, Name
            FROM Account];
        return sites;
    }
}