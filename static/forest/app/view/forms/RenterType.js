Ext.define('Foresto.view.forms.RenterType', {
    extend: 'Ext.form.FieldSet',
    
    xtype: 'foresto-rentertype',

    url: 'save-form.php',
    
    defaults: {
        afterLabelTextTpl: [
            '<span style="color:red;font-weight:normal" data-qtip="Required">*</span>'
        ]
    },
    
    
    
    title: 'Тип',
    
    padding: 0,
    
    items: [{
        itemId: 'renter-type',
        layout: 'hbox',
        defaults: {
            xtype: 'radiofield',
            name: 'type',
            labelWrap: true,
            labelAlign: 'right',
            width: '40%'
        },
        items: [
            {label: 'ИП', value: 1, checked: true},
            {label: 'ЮЛ', value: 2}
        ]
    }]
});