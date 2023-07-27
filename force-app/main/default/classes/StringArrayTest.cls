public with sharing class StringArrayTest {


    public static List<String> generateStringArray(Integer size){

        List<String> colors = new List<String>();
        for(Integer i=0;i<size;i++) {
            //['Test 0', 'Test 1', 'Test 2']['Test 0', 'Test 1', 'Test 2']
            String color='Test '+i;
            colors.add(color);
        }


        return colors;

    }
}