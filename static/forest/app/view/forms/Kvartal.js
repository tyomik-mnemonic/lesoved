Ext.define('Foresto.view.forms.Kvartal', {
    extend: 'Ext.form.Panel',
    layout: 'fit',
    xtype: 'foresto-kvartal',
    title: 'Квартал',
    scrollable: true,
    header: {
        cls: 'header-cls'
    },
    
    
    url: 'save-form.php',
    
    defaults: {
    	xtype: 'selectfield',
        labelWrap: true,
        afterLabelTextTpl: [
            '<span style="color:red;font-weight:normal" data-qtip="Required">*</span>'
        ]
    },
    items: [{
        label: 'Участковое лесничество',
        name: 'forestry_part'
    },{
        label: 'Номер квартала',
        name: 'code'
    },{ 
    	xtype:'selectfield',
    	valueField: 'id',
		displayField: 'name',
    	store: Ext.create('Foresto.store.AgreeListView'),
        label: 'Договор',
        name: 'agreement'
    },{
    	xtype: 'textareafield',
        label: 'WKT геометрия',
        name: 'geometry'
    }]
});