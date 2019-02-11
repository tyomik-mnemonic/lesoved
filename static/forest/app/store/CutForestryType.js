Ext.define('Foresto.store.CutForestryType',{
	extend:'Ext.data.Store',
	alias: "cuttstoreFT",
	storeID:'cuttstoreFT',
	fields:['id','name'],
	xtype:'forestrytypestore',
	proxy: {
		type:'ajax',
		url:'/api/forestry-type/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});