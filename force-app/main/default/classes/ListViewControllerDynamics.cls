global class ListViewControllerDynamics extends VisualEditor.DynamicPickList{
    
        @auraEnabled
        public static List<SObject> getListViewData(String objectName){
            String query = 'select Id,Name from Account limit 10';
            if (objectName != null) {
                query = 'select Id,Name from '+ objectName +' limit 10';
            }
            return Database.query(query);
        }
    
        global override VisualEditor.DataRow getDefaultValue(){
            VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('客户', 'Account');
            return defaultValue;
        }
        /**
         * @Author   Mick
         * @DateTime 2018-07-23
         * @Editor   Mick
         * @EditTime 2018-07-23
         * @Function [获取选项列表值]
         */
        global override VisualEditor.DynamicPickListRows getValues() {
            // 可以将列表值以配置的方式存储或者查询自己想要的列表值
            // 另外也可以使用Schema.getGlobalDescribe()等获取系统所有的Object作为列表
            VisualEditor.DynamicPickListRows myValues = new VisualEditor.DynamicPickListRows();
            // VisualEditor.DataRow(label,value);
            myValues.addRow(new VisualEditor.DataRow('客户','Account'));
            myValues.addRow(new VisualEditor.DataRow('联系人','Contact'));
            myValues.addRow(new VisualEditor.DataRow('潜在客户','Lead'));
            myValues.addRow(new VisualEditor.DataRow('个案','Case'));
            return myValues;
        }
    }