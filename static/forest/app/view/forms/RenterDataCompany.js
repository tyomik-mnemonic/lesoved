Ext.define('Foresto.view.forms.RenterDataCompany', {
    extend: 'Ext.form.Panel',
    title:'Арендатор.Юр. лица',
    header: {
        cls: 'header-cls'
    },
    xtype: 'foresto-companydata',
    layout: 'fit',
    scrollable: true,
    tools: [
            {type: 'minimize',
            	handler: function(){
            		this.up("panel").hide();
            	}},
            {type: 'save'},
            {type:'close',
            	handler: function(){
            		this.up("panel").close();            		            		
            	}},
            ],
            
    

    url: 'save-form.php',
    
    defaults: {
    	xtype: 'textfield',
        labelWrap: true,
        required: true,
        afterLabelTextTpl: [
            '<span style="color:red;font-weight:normal" data-qtip="Required">*</span>'
        ]
    },
    items: [{
        xtype: 'selectfield',
        label: 'Документ',
        name: 'document',
        valueField: 'id',
        displayField: 'name',
        //store: Ext.create('Foresto.store.RentDocTypeStore')
       
        
        
        
    },{
        label: 'Номер документа',
        name: 'document_num'
    },{
        xtype: 'selectfield',
        label: 'Правовая форма',
        name: 'legal_type',
        valueField: 'id',
        displayField: 'name',
       // store: Ext.create('Foresto.store.RentLegFormStore')
        
        
    },{
        label: 'ФИО уполномоченного',
        name: 'fio_represent'
    },{
        label: 'Должность уполномоченного',
        name: 'position_represent'
    },{
        xtype: 'selectfield',
        label: 'Документ на право деятельности',
        name: 'certificate',
        valueField: 'id',
        displayField: 'name',
        //store: Ext.create('Foresto.store.Certificate')
        
        	
        
    },{
        label: 'Фамилия',
        name: 'last_name'
    },{
        label: 'Имя',
        name: 'first_name'
    },{
        label: 'Отчество',
        name: 'other_names'
    },{
        label: 'Паспорт',
        name: 'identity'
    },{
        label: 'Серия 4 цифры, номер 6, без пробелов. Пример 1404425677.',
        name: 'identity_num'
    },{
        label: 'ИНН',
        name: 'inn'
    },{
    	label: 'ОГРН',
        name: 'ogrn'
    },{
    	label: 'Название организации',
        name: 'name'
    },{
    	label: 'Юридический адрес',
        name: 'legalAdress'
    },{
    	label: 'Фактический адрес',
        name: 'factlAdress'
    },{
    	
        label: 'Номер контактного телефона',
        name: 'phoneNum'
        
    },{
    	label:'№ Проекта освоения лесов',
    	name:'polNum'
    },{	
    	xtype: 'datepickerfield',
        destroyPickerOnHide: true,
        value: new Date(),
    	label:'Дата заключения экспертизы',
        name:'polDate'
        }]
});