Ext.define('Foresto.store.Rente4Contract',{
	extend:'Ext.data.Store',
	alias: "renter4contract",
	storeID:'renter4contract',
	fields:['id','name'],
	xtype:'renter4contract',
	proxy: {
		type:'ajax',
		url:'/api/renter/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});