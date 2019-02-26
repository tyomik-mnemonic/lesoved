Ext.define('Foresto.store.FellForm',{
	extend:'Ext.data.Store',
	alias: "fellform",
	storeID:'fellform',
	fields:['id','name'],
	xtype:'fellform',
	proxy: {
		type:'ajax',
		url:'/api/list-shape-felling/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});