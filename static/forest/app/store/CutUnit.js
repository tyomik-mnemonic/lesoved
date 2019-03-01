Ext.define('Foresto.store.CutUnit',{
	extend:'Ext.data.Store',
	alias: "cuttstoreUnit",
	storeID:'cuttstoreUnit',
	fields:['id','name'],
	xtype:'unitstore',
	proxy: {
		type:'ajax',
		url:'/api/list-unit-meas/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});