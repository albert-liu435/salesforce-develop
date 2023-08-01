global class ListViewController {
    @auraEnabled
    public static List<SObject> getListViewData(String objectName){
        String query = 'select Id,Name from Account limit 10';
        if (objectName != null) {
            query = 'select Id,Name from '+ objectName +' limit 10';
        }
        return Database.query(query);
    }
}