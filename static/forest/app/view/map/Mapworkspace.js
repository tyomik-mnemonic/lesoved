Ext.define('Foresto.view.map.Mapworkspace',{
	extend:'Ext.panel.Panel',
	requires:['Foresto.model.EditListRenters',
	          ],
	id:'mapWS',
	collapsible:true,
	clossable: true,
	scope: this, 
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
	
	xtype:'mapWorkSpace',
	layout: 'vbox',
	itemId:'mapWS',
	header: {
		cls : 'hdr2'
        
    },
    title:'Договоры аренды',
    items:[{
    	xtype:'rentlist',
    }],
    cls:'toolbars'
    
})
/* 
 
    items: [{
        flex: 1,
        margin: 10,
        items: [{
            iconCls: 'x-fa fa-home',
            html: KitchenSink.DummyText.longText
        }, {
            iconCls: 'x-fa fa-comment',
            html: KitchenSink.DummyText.extraLongText
        }, {
            iconCls: 'x-fa fa-cog',
            disabled: true
        }]
    }, {
        flex: 1,
        margin: '0 10 10',
        plain: true,
        items: [{
            title: 'Active Tab',
            iconCls: 'x-fa fa-home',
            html: KitchenSink.DummyText.longText
        }, {
            title: 'Inactive Tab',
            iconCls: 'x-fa fa-comment',
            html: KitchenSink.DummyText.extraLongText
        }, {
            title: 'Disabled Tab',
            iconCls: 'x-fa fa-cog',
            disabled: true
        }]
    }] 
 */