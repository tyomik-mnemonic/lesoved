Ext.define('Foresto.store.Certificate',{
	extend:'Ext.data.Store',
	alias: "rentstoreCER",
	storeID:'rentstoreCER',
	fields:['id','name'],
	xtype:'standarstore',
	proxy: {
		type:'ajax',
		url:'/api/renter-certificate/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});