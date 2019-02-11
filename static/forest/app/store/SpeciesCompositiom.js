Ext.define('Foresto.store.SpeciesCompositiom',{
	extend:'Ext.data.Store',
	alias: "cuttstoreCompos",
	storeID:'cuttstoreCompos',
	fields:['id','name'],
	xtype:'composstore',
	proxy: {
		type:'ajax',
		url:'/api/forestry-composition/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});