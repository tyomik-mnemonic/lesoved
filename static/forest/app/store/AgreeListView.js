Ext.define('Foresto.store.AgreeListView',{
	extend:'Ext.data.Store',
	alias: "agreelistview",
	storeID:'agreelistview',
	fields:['id','name'],
	xtype:'agreelistview',
	proxy: {
		type:'ajax',
		url:'/api/contract-reason/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});