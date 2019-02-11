Ext.define('Foresto.store.AgreeRenter',{
	extend:'Ext.data.Store',
	alias: "cuttstoreAssor",
	storeID:'cuttstoreAssor',
	fields:['id','name'],
	xtype:'standarstore',
	proxy: {
		type:'ajax',
		url:'/api/',
		reader:{
			type:'json',
			root: 'results'
		}
	},
	autoLoad: true
});