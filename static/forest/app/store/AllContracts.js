Ext.define('Foresto.store.AllContracts',{
	extend:'Ext.data.Store',
	alias: "allcontrs",
	storeID:'allcontrs',
	fields: [{
		name: 'id'
	},{
		name:'renter'
			
	},{
		name:'date'
	},{
		name:'organ'
	},{
		name:'num'
	},{
		name:'date_reg'
	},{
		name:'kadastre'
	},{
		name:'glr'
	},{
		name:'reason'
	},{
		name:'use_start'
	},{
		name:'use_end'
	},{
		name:'act_num'
	},{
		name:'act_date'
	},{
		name:'project'
	},{
		name:'project_date'
	},{
		name:'project_author'
	},{
		name:'positive_date'
	}],
	xtype:'allcontrs',
	proxy: {
		type:'ajax',
		url:'/api/contract/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});


            