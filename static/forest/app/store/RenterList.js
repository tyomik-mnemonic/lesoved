Ext.define('Foresto.store.RenterList',{
	extend:'Ext.data.Store',
	alias: "renterlist",
	storeID:'renterlist',
	fields:['id', 'document','document_num','legal_type','fio_represent','position_represent','certificate'],
	xtype:'renterlist',
	proxy: {
		type:'ajax',
		url:'/api/renter/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});