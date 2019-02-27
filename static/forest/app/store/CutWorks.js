Ext.define('Foresto.store.CutWorks',{
	extend:'Ext.data.Store',
	alias: "ctworks",
	storeID:'ctworks',
	fields:['id','name'],
	xtype:'ctworks',
	proxy: {
		type:'ajax',
		url:'/api/list-forest-works/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});