Ext.define('Foresto.store.FellType',{
	extend:'Ext.data.Store',
	alias: "felltype",
	storeID:'felltype',
	fields:['id','name'],
	xtype:'felltype',
	proxy: {
		type:'ajax',
		url:'/api/list-type-felling/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});