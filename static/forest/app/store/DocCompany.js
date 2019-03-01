Ext.define('Foresto.store.DocCompany',{
	extend:'Ext.data.Store',
	alias: "doccomp",
	storeID:'doccomp',
	fields:['id','name'],
	xtype:'doccomp',
	proxy: {
		type:'ajax',
		url:'/api/list-legal-documents/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});

