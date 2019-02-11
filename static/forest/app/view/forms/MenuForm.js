Ext.define('Foresto.view.forms.MenuForm', {
    extend: 'Ext.form.Panel',
    
	alias: 'menuform',
    header: {
        cls: 'header-cls',
        title : {
            cls : 'header-title-cls',
            text : 'Ввод информации'
        }
    },
    xtype: 'foresto-enterInfo',
    view: ['Foresto.view.main.Main'],
    layout: {
        type: 'float',
        align: 'stretch'
    },
    tools: [
            {type: 'minimize',
            	handler: function(){
            		this.up("panel").hide();
            	}},
          
            {type:'close',
            	handler: function(){
            		this.up("panel").close();            		            		
            	}},
            ],
    items:[{
    	xtype:'button',
    	cls: 'button-cls',               	
    	text: 'Арендатор',
    	id: 'RenterId',
    	margin: 10,
    	width: 800,
        height: 500,
        length: 500,
    	handler: 'renterForms'
    	
    	
    },{
    	xtype:'button',
    	cls: 'button-cls',               	
    	text: 'Договор',
    	id:'ContractId',
    	handler: 'agreForms',
    	margin: 10,
    	width: 800,
        height: 500,
        length: 500
    	
    	
    },{
    	xtype:'button',
    	cls: 'button-cls',               	
    	text: 'Квартал',
    	id:'QuarterId',
    	margin: 10,
    	width: 800,
        height: 500,
        length: 500,
    	handler: 'quartForms'
    },{
    	xtype:'button',
    	cls: 'button-cls',               	
    	text: 'Лесосека',
    	id: 'CutId',
    	handler: 'cutForms',
    	margin: 10,
    	width: 800,
        height: 500,
        length: 500,
    	
    }] 
});