Ext.define('Foresto.store.Allots',{
	extend:'Ext.data.Store',
	alias: "allots",
	storeID:'allots',
	fields:['id','name'],
	xtype:'allots',
	proxy: {
		type:'ajax',
		url:'/api/cutarea-allotment/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});