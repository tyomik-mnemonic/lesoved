Ext.define('Foresto.store.Purpose',{
	extend:'Ext.data.Store',
	alias: "purpose",
	storeID:'purpose',
	fields: [{
		name: 'id'
	},{
		name:'name'
			
	}],
	xtype:'purpose',
	proxy: {
		type:'ajax',
		url:'/api/list-forest-purpose/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});
