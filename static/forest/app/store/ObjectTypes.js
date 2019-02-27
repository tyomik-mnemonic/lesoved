Ext.define('Foresto.store.ObjectTypes',{
	extend:'Ext.data.Store',
	alias: "objtypes",
	storeID:'objtypes',
	fields:['id','name'],
	xtype:'objtypes',
	proxy: {
		type:'ajax',
		url:'/api/list-forest-obj-type/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});