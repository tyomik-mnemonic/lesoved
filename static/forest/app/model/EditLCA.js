Ext.define('Foresto.model.EditLCA', {
	extend:'Ext.grid.Grid',
	xtype: 'contlistII',
	requires: [
	'Ext.grid.plugin.Editable',
	'Ext.grid.plugin.ViewOptions',
	'Ext.grid.plugin.PagingToolbar',
	'Ext.grid.plugin.SummaryRow',
	'Ext.grid.plugin.ColumnResizing',
	'Ext.grid.plugin.MultiSelection',
	'Ext.grid.plugin.RowExpander',
	
	
	'Foresto.model.CAListModel'
	],
	hideHeaders:false,
    autoScroll:true,
    scrollable: true,
    grouped:true,
    title:'Мои лесосеки 2',
    cls:'toolbar',
    pinHeaders: true,
//	shadow: true,
	rowLines: true,
	frame:true,
//	height: 500,
//	autoSize:true,
	tools: [{
		type:'help'
		},{
		type:'search'		
		},{
		type:'close',
		handler: function(e) {
			
				e.hide()
		}
		}],
	store: {
		model:'Foresto.model.CAListModel', 
		autoLoad: true,
		
		pageSize:0,
		proxy: {
			type:'ajax',
			url:'/api/cutarea-fca/',
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
	            title:'Редактировать лесосеки',
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
	    }, {
	        type: 'rowexpander'
	    }
	],
   
	columns: [
	{
		text: 'id',
		flex: 1,
		maxWidth: 30,
		dataIndex: 'id',
		editable:true
		
	},{
		text:'renter',
		dataIndex:'renter',
		minWidth: 100,
		editable:true
			
	},{
		text:'date',
		dataIndex:'date',
		format: 'd-m-Y',
		minWidth: 100,
		editable:true
	},{
		text:'organ',
		dataIndex:'organ',
		minWidth: 100,
		editable:true
	},{
		text:'num',
		dataIndex:'num',
		minWidth: 100,
		editable:true
	},{
		text:'date_reg',
		dataIndex:'date_reg',
		format: 'd-m-Y',
		minWidth: 100,
		editable:true
	},{
		text:'kadastre',
		dataIndex:'kadastre',
		minWidth: 100,
		editable:true
	},{
		text:'glr',
		dataIndex:'glr',
		minWidth: 100,
		editable:true
	},{
		text:'reason',
		dataIndex:'reason',
		minWidth: 100,
		editable:true
	},{
		text:'use_start',
		dataIndex:'use_start',
		format: 'd-m-Y',
		minWidth: 100,
		editable:true
	},{
		text:'use_end',
		dataIndex:'use_end',
		format: 'd-m-Y',
		minWidth: 100
	},{
		text:'act_num',
		dataIndex:'act_num',
		minWidth: 100,
		editable:true
	},{
		text:'act_date',
		dataIndex:'act_date',
		format: 'd-m-Y',
		minWidth: 100,
		editable:true
	},{
		text:'project',
		dataIndex:'project',
		minWidth: 100,
		editable:true
	},{
		text:'project_date',
		dataIndex:'project_date',
		format: 'd-m-Y',
		minWidth: 100,
		editable:true
	},{
		text:'project_author',
		dataIndex:'project_author',
		minWidth: 100
	},{
		text:'positive_date',
		dataIndex:'positive_date',
		format: 'd-m-Y',
		minWidth: 100,
		editable:true
	}
	]
	
	
	
});