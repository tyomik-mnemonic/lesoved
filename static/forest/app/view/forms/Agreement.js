Ext.apply('Ext.util.Format', {
    defaultDateFormat: 'Y-m-d'
});

Ext.define('Foresto.view.forms.Agreement', {
    extend: 'Ext.form.Panel',
    title: 'Договор',
    header: {
       cls: 'hdr2'
        
    },
    scrollable: true,

	scope: this,
    xtype: 'foresto-agreement',
    id:'foresto-agreement',
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
        margin: '10 0 0 0',
        name: 'renter',
        valueField:'id',
        displayField:'name',
        store: Ext.create('Foresto.store.AllRenters')
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
    	xtype: 'selectfield',
        label: 'Основание',
        name: 'reason',
        name: 'viddoc',
        valueField:'id',
        displayField:'name',
        store: Ext.create('Foresto.store.Osnovan')
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
    },{ 
    	xtype: 'selectfield',
    	label: 'Вид документа',
        margin: '0 0 0 0',
        name: 'viddoc',
        valueField:'id',
        displayField:'fio_represent',
        store: Ext.create('Foresto.store.Viddocs')
    	
    },{
    	xtype:'button',
    	centured:true,
    	margin: '20 0 0 0',
    	padding: 5,
    	width: 180,
    	cls: 'buttonsforsave',
    	text:'сохранить',
    	handler: function() {
    		var agrform = this.up();
          	var agrformSet = agrform.getValues();
        	
        	Ext.Ajax.request({
        		url:'/api/agreement/',
        		method: 'POST',
        		params: agrformSet
        	})
        }
    }]
});