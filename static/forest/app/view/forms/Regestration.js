

Ext.define('Foresto.view.forms.Regestration', {
    extend: 'Ext.form.Panel', 
    header: {
    	cls: 'hdr2',
        title : {
        	cls: 'hdr2',
            text : 'Регистрация лесопользователя'
        }
    },
    height: '95%',
   
    xtype:'regs',
    items:[{
    	xtype:'selectfield',
    	margin: '10 0 0 0',
    	label:'Правовая форма',
    	valueField:'id',
        displayField:'name',
        store: Ext.create('Foresto.store.PravForm')
    },{
    	xtype:'textfield',
    	label:'ИНН'
    },{
    	xtype:'textfield',
    	label:'Логин'
    },{
    	xtype:'textfield',
    	label:'Пароль'
    },{
    	xtype:'textfield',
    	label:'Имя'
    },{
    	xtype:'textfield',
    	label:'Фамилия'
    },{
    	xtype:'textfield',
    	label:'Отчество'
    },{
    	xtype:'textfield',
    	label:'Должность'
    },{
    	xtype:'selectfield',
    	label:'Документ, регламент. организацию*',
    	valueField:'id',
        displayField:'name',
        store: Ext.create('Foresto.store.DocCompany')
    	
    },{
    	xtype:'textfield',
    	label:'ОГРН*'
    },{
    	xtype:'selectfield',
    	label:'Документ, удоств. личность',
    	valueField:'id',
        displayField:'name',
        store: Ext.create('Foresto.store.DocAuthPers')
    },{
    	xtype:'textfield',
    	label:'Серия'
    },{
    	xtype:'textfield',
    	label:'Номер'
    },{
    	xtype:'button',
    	margin: '20 0 0 0',
    	text:'Зарегистрироваться',
    	cls: 'buttonsforsave',
    	handler: function(){
    		var regs = this.up();
    		var regsset = regs.getValues();
    		
    		Ext.Ajax.request({
        		url:'/api/renter/',
        		method: 'POST',
        		params: regsset
        	})
        	//regset.hide()
    	}
    			
    }]
    
});