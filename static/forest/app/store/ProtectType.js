Ext.define('Foresto.store.ProtectType',{
	extend:'Ext.data.Store',
	alias: "protect",
	storeID:'protect',
	fields: [{
		name: 'id'
	},{
		name:'name'
			
	}],
	xtype:'protect',
	proxy: {
		type:'ajax',
		url:'/api/ForestProtectionSet/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});
