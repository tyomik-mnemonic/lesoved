Ext.define('Foresto.store.PravForm',{
	extend:'Ext.data.Store',
	alias: "pravform",
	storeID:'pravform',
	fields:['id','name'],
	xtype:'pravform',
	proxy: {
		type:'ajax',
		url:'/api/list-prav-form/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});

