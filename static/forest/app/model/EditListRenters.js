Ext.define('Foresto.model.EditListRenters', {
	extend:'Ext.grid.Grid',
	xtype: 'rentlist',
	id:'rentlist',
	requires: [
	           'Ext.grid.plugin.Editable',
	           'Ext.grid.plugin.ViewOptions',
	           'Ext.grid.plugin.PagingToolbar',
	           'Ext.grid.plugin.SummaryRow',
	           'Ext.grid.plugin.ColumnResizing',
	           'Ext.grid.plugin.MultiSelection',
	           'Ext.grid.plugin.RowExpander',
	'Foresto.model.RentsListModel'
	],
	hideHeaders:false,
    autoScroll:true,
    scrollable: true,
    grouped:true,
    rowLines: true,
	frame:true,
    cls:'th',
    pinHeaders: true,
//	shadow: true,
	rowLines: true,
	frame:true,
	scope: this,
//	height: 500,
	autoSize:true,
	
	store: {
		model:'Foresto.model.RentsListModel', 
		autoLoad: true,
		pageSize:0,
		proxy: {
			type:'ajax',
			url:'/api/renter/',
			reader:{
				type:'json',
				rootProperty: 'results'
			}
		
		}
	},
	initialize:
		function() {
		a = Ext.getCmp('ext-headercontainer-1')
		a.setHeight(100);
		a.setWidth(100);
		return a
		},
	header: {
	    	height: 65,
	        cls: 'header-cls',
	        title:'Список проектов'
	},
	
	    
	plugins: [
		{
			type: 'grideditable',
	        triggerEvent: 'doubletap',
	        enableDeleteButton: true,
	        formConfig: null, // See more below

	        defaultFormConfig: {
	            xtype: 'formpanel',
	            title:'Редактировать договор',
	            scrollable: true,
	            items: {
	                xtype: 'fieldset'
	            }
	        },

	        toolbarConfig: {
	            xtype: 'titlebar',
	            cls : 'hdr2',
	            height:46.63,
	            docked: 'top',
	            items: [{
	                xtype: 'button',
	                ui: 'decline',
	                cls: 'grbuttons',
	                text: 'Отменить',
	                align: 'left',
	                action: 'cancel'
	            }, {
	                xtype: 'button',
	                ui: 'confirm',
	                cls: 'grbuttons',
	                text: 'Сохранить',
	                align: 'right',
	                action: 'submit',
	                handler: function (){
	                	var rentgrid = Ext.create('Foresto.model.EditListRenters');
	                	rentgrid.getStore().getModifiedRecords();
	                }
	            }]
	        }
	        
	    }, {
	        type: 'gridviewoptions'
	    }, {
	        type: 'pagingtoolbar'
	    }, {
	        type: 'summaryrow'
	    }, {
	        type: 'columnresizing'
	    },{
	        type: 'rowexpander'
	    }
	],
	
   
	columns:
	[
	{
		text: 'id',
		height: 20,
		dataIndex: 'id',
		maxWidth: 50,
	},{
		text:'org_prav_form',
		dataIndex:'org_prav_form',
		editable:true,
		height: 20
//		flex: 1
			
	},{
		text:'inn',
		dataIndex:'inn',
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'account_name',
		dataIndex:'account_name',
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'acc_pwd',
		dataIndex:'acc_pwd',
		minWidth: 150,
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'name',
		dataIndex:'name',
		minWidth: 150,
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'snameplp',
		dataIndex:'snameplp',
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'fnameplp',
		dataIndex:'fnameplp',
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'patronymicplp',
		dataIndex:'patronymicplp',
		minWidth: 150,
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'position',
		dataIndex:'position',
		minWidth: 150,
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'leg_docum',
		dataIndex:'leg_docum',
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'ogrn',
		dataIndex:'ogrn',
		minWidth: 150,
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'identity_doc',
		dataIndex:'identity_doc',
		minWidth: 150,
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'serial_doc',
		dataIndex:'serial_doc',
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'number_doc',
		dataIndex:'number_doc',
		editable:true,
		height: 20
//		flex: 1
	}
	]
	
	
	
});