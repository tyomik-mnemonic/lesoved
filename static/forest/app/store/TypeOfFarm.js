Ext.define('Foresto.store.TypeOfFarm',{
	extend:'Ext.data.Store',
	alias: "typeoffarm",
	storeID:'typeoffarm',
	fields: [{
		name: 'id'
	},{
		name:'name'
			
	}],
	xtype:'typeoffarm',
	proxy: {
		type:'ajax',
		url:'/api/list-types-forestry/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});
