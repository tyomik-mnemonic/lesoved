Ext.define('Foresto.store.RentLegFormStore',{
	extend:'Ext.data.Store',
	alias: "rentstore2",
	storeID:'rentstore2',
	fields:['id','name'],
	xtype:'standarstore',
	proxy: {
		type:'ajax',
		url:'/api/renter-legal-type/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});