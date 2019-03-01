Ext.define('Foresto.store.AgreeListView',{
	extend:'Ext.data.Store',
	alias: "agreelistview",
	storeID:'agreelistview',
	fields: [{
		name: 'renters_id'
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
		name:'reas_doc'
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
	},{
		name:'viddoc'
	}],
	xtype:'agreelistview',
	proxy: {
		type:'ajax',
		url:'/api/agreement/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});
