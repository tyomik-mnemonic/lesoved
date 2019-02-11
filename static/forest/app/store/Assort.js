Ext.define('Foresto.store.Assort',{
	extend:'Ext.data.Store',
	alias: "cuttstoreAssor",
	storeID:'cuttstoreAssor',
	fields:['id','name'],
	xtype:'assorstore',
	proxy: {
		type:'ajax',
		url:'/api/forestry-assortment/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});