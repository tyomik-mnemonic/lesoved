Ext.define('Foresto.store.Viddocs',{
	extend:'Ext.data.Store',
	alias: "viddocs",
	storeID:'viddocs',
	fields:['id','name'],
	xtype:'viddocs',
	proxy: {
		type:'ajax',
		url:'/api/list-vid-doc/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});