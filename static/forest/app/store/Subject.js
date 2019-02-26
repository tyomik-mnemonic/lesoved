Ext.define('Foresto.store.Subject',{
	extend:'Ext.data.Store',
	alias: "subjectrf",
	storeID:'subjectrf',
	fields: [{
		name: 'id'
	},{
		name:'name'
			
	},{
		name:'kod_okato'
	}],
	xtype:'subjectrf',
	proxy: {
		type:'ajax',
		url:'/api/list-subjectRF/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});
