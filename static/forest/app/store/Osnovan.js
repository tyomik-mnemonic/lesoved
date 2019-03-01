Ext.define('Foresto.store.Osnovan',{
	extend:'Ext.data.Store',
	alias: "viddocs",
	storeID:'viddocs',
	fields:['id','name'],
	xtype:'viddocs',
	proxy: {
		type:'ajax',
		url:'/api/list-osnovanie/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});

