public with sharing class ParentAuraController {
    @AuraEnabled
    public static String getDisplayMonths() {
        List<String> displayMonths = new List<String>();
        displayMonths.add('Last 6 Months');
        displayMonths.add('Last 12 Months');
        displayMonths.add('Last 18 Months');
        displayMonths.add('Last 36 Months');
        // 将响应序列化为Json格式
        return JSON.serialize(displayMonths);
    }
}