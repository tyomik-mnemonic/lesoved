Ext.define('Foresto.view.forms.Cutarea', {
    extend: 'Ext.panel.Panel',
    title: 'Лесосека',
    margin: 5,
    height: 600,
    scrollable: true,
    xtype: 'foresto-cutarea',
    items: [{
    	xtype:'tabpanel',
    	cls:'justbuttons',
    	tabBar: {
    		cls:'justbuttons',
    		defaults:{
    			cls:'justbuttons'
    		}
    	},
    	id:'tabpanelitisme',
    	layout:'card',
    	items:[{
    		xtype:'panel',
    		cls:'justbuttons',
    		title:'Пространственные данные',
    		items:[{
    	    	xtype: 'textfield',
    	        label: 'Номер лесосеки',
    	        name: 'name'
    	    },{
    	    	xtype: 'textfield',
    	        label: 'Номер выдела',
    	        name: 'allotment'
    	    },{
        		xtype:'selectfield',
        		label: 'договор',
        		valueField: 'id',
                displayField:'project_author',
        		
        		store: Ext.create('Foresto.store.AllContracts')
        	},{
    	    	xtype: 'button',
    	        text: 'WKT геометрия',
    	        name: 'geometry',
    	        cls: 'justbuttons'
    	    },{
    	    	xtype:'button',
    	    	text:'Добавить фото',
    	    	margin: 10,
    	    	cls: 'justbuttons'
    	    },{
            	xtype:'button',
            	text:'Сохранить',
            	cls: 'justbuttons',
            	margin: 10,
            	ui:'confirm',
            	handler: function() {
            		var dataupNew = this.up().items.items[0];
              		var dataSetNew = dataupNew.getValues();
                	
                	Ext.Ajax.request({
                		url:'/api/forestry-cutarea/',
                		method: 'POST',
                		params: dataSetNew
                	})
                }
            }]
    	},{
    		xtype:'panel',
    		cls:'justbuttons',
    		layout: 'vbox',
    		title:'Характеристика',
    		items:[{
    			xtype:'selectfield',
    			label:'Номер лесосеки'
    		},{
        		xtype:'textfield',
        		label: 'урочище'
        	},{
            	xtype:'selectfield',
            	label: 'Целевое назначение',
            	name:'targetUsing'
            },{
            	xtype:'textfield',
            	label:'Общая площадь, га'
            },{
            	xtype:'textfield',
            	label:'Экспл. площадь, га'
            },{
            	xtype:'selectfield',
            	label:'Кат. защитн. леса',
            	
            },{
            	xtype:'button',
            	text:'Сохранить',
            	cls: 'justbuttons',
            	margin: 10,
            	ui:'confirm',
            	handler: function() {
            		var charform = this.up('panel');
              		var dataSetNew1 = charform.getValues();
                	
                	Ext.Ajax.request({
                		url:'/api/characteristic/',
                		method: 'POST',
                		params: dataSetNew1
                	})
                }
            }]
    	},{
    		xtype:'panel',
    		cls:'justbuttons',
    		title:'Планируемое использование',
    		items:[{
    			xtype:'selectfield',
    			label:'Номер лесосеки'
    		},{ 
    			xtype:'selectfield',
                label: 'Форма рубки',
                name: 'cutareaShape',
                valueField: 'id',
                displayField:'name',
                store: Ext.create('Foresto.store.CutForm')
            },{ 
            	xtype:'selectfield',
                label: 'Вид рубки',
                name: 'cutareaType',
                valueField: 'id',
                dispayField:'name',
                store: Ext.create('Foresto.store.CutType')
                
            },{ 
        		xtype:'selectfield',
                label: 'Тип хозяйства',
                name: 'type',
                valueField: 'id',
                displayField:'name',
                store: Ext.create('Foresto.store.CutForestryType')
                
            },{	
            	xtype: 'selectfield',
            	label: 'Единица измерения',
                name: 'unit',
                valueField: 'id',
                displayField:'name',
                store: Ext.create('Foresto.store.CutUnit')
            },{	
            	xtype: 'selectfield',
                label: 'Породный состав',
                name:'composstore',
                valueField: 'id',
                dispayField:'name',
                store: Ext.create('Foresto.store.SpeciesCompositiom')
            },{	
            	xtype: 'selectfield',
                label: 'Сортиментный состав',
                ItemID: 'sorsosfield',
                name: 'assortment',
                valueField: 'id',
                displayField: 'name',
                store: Ext.create('Foresto.store.Assort') 
            },{
            	xtype:'button',
            	text:'Сохранить',
            	cls: 'justbuttons',
            	margin: 10,
            	ui:'confirm'
            }
            	
            ]
    	}]
    }]
});