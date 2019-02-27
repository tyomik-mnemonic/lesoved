Ext.define('Foresto.store.Reforestration',{
	extend:'Ext.data.Store',
	alias: "reforest",
	storeID:'reforest',
	fields:['id','name'],
	xtype:'reforest',
	proxy: {
		type:'ajax',
		url:'/api/list-forest-ation/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});