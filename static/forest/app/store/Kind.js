Ext.define('Foresto.store.Kind',{
	extend:'Ext.data.Store',
	alias: "kind",
	storeID:'kind',
	fields:['id','name'],
	xtype:'felltype',
	proxy: {
		type:'ajax',
		url:'/api/list-forest-kind/',
		reader:{
			type:'json',
			rootProperty: 'kind'
		}
	},
	autoLoad: true
});