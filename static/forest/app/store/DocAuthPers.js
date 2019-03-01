Ext.define('Foresto.store.DocAuthPers',{
	extend:'Ext.data.Store',
	alias: "pravform",
	storeID:'pravform',
	fields:['id','name'],
	xtype:'pravform',
	proxy: {
		type:'ajax',
		url:'/api/list-ident-doc/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});

