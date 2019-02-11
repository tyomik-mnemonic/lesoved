Ext.define('Foresto.store.RentDocTypeStore',{
	extend:'Ext.data.Store',
	alias: "rentstoreRDT",
	storeID:'rentstoreRDT',
	fields:['id','name'],
	xtype:'standarstore',
	proxy: {
		type:'ajax',
		url:'/api/renter-document-type/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});