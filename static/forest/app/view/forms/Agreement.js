Ext.define('Foresto.view.forms.Agreement', {
    extend: 'Ext.form.Panel',
    title: 'Договор',
    header: {
        cls: 'header-cls'
        
    },
    scrollable: true,
    
    xtype: 'foresto-agreement',
    
    
    


    url: 'save-form.php',

    defaults: {
    	xtype: 'textfield',
        labelWrap: true,
        required: true, // *
        afterLabelTextTpl: [
            '<span style="color:red;font-weight:normal" data-qtip="Required">*</span>'
        ]
    },
    items: [{
        xtype: 'selectfield',
        label: 'Арендатор',
        name: 'renter',
        valueField:'id',
        displayField:'fio_represent',
        store: Ext.create('Foresto.store.RenterList')
    },{
        xtype: 'datepickerfield',
        destroyPickerOnHide: true,
        value: new Date(),
        label: 'Дата утверждения',
        name: 'date'
    },{
        label: 'Орган государственной власти, орган местного самоуправления',
        name: 'organ'
    },{
        label: 'Номер государственной регистрации документа',
        name: 'num'
    },{
        xtype: 'datepickerfield',
        destroyPickerOnHide: true,
        value: new Date(),
        label: 'Дата регистрации',
        name: 'date_reg'
    },{
        label: 'Кадастровый номер',
        name: 'kadastre'
    },{
        label: 'Номер учетной записи в государственном лесном реестре (ГЛР)',
        name: 'glr'
    },{
        label: 'Основание',
        name: 'reason'
    },{
        xtype: 'datepickerfield',
        destroyPickerOnHide: true,
        value: new Date(),
        label: 'Начало использования',
        name: 'use_start'
    },{
        xtype: 'datepickerfield',
        destroyPickerOnHide: true,
        value: new Date(),
        label: 'Конец использования',
        name: 'use_end'
    },{
        label: 'Номер акта приема-передачи лесного участка',
        name: 'act_num'
    },{
        xtype: 'datepickerfield',
        destroyPickerOnHide: true,
        value: new Date(),
        label: 'Дата акта приема-передачи лесного участка',
        name: 'act_date'
    },{
    	xtype: 'checkboxfield',
    	label: 'Есть проект освоения?',
    	labelWidth: '50%',
        name: 'project'
    },{
        xtype: 'datepickerfield',
        destroyPickerOnHide: true,
        value: new Date(),
        label: 'Cрок действия проекта освоения лесов',
        name: 'project_date'
    },{
        label: 'Разработчик проекта освоения лесов',
        name: 'project_author'
    },{
        xtype: 'datepickerfield',
        destroyPickerOnHide: true,
        value: new Date(),
        label: 'Дата выдачи положительного заключения по итогам государственной экспертизы проекта освоения лесов',
        name: 'positive_date'
    }]
});