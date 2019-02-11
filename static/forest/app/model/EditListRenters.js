Ext.define('Foresto.model.EditListRenters', {
	extend:'Ext.grid.Grid',
	xtype: 'rentlist',
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
    cls:'th',
    pinHeaders: true,
//	shadow: true,
	rowLines: true,
	frame:true,
//	height: 500,
//	autoSize:true,
	
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
		text:'document',
		dataIndex:'document',
		editable:true,
		height: 20
//		flex: 1
			
	},{
		text:'document_num',
		dataIndex:'document_num',
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'legal_type',
		dataIndex:'legal_type',
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'fio_represent',
		dataIndex:'fio_represent',
		minWidth: 150,
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'position_represent',
		dataIndex:'position_represent',
		minWidth: 150,
		editable:true,
		height: 20
//		flex: 1
	},{
		text:'certificate',
		dataIndex:'certificate',
		editable:true,
		height: 20
//		flex: 1
	}//'document','document_num','legal_type','fio_represent','position_represent','certificate'
	]
	
	
	
});