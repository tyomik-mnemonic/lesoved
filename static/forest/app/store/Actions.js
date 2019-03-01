Ext.define('Foresto.store.Actions',{
	extend:'Ext.data.Store',
	alias: "actions",
	storeID:'actions',
	fields:['id','name'],
	xtype:'actions',
	proxy: {
		type:'ajax',
		url:'/api/list-forest-activity/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});