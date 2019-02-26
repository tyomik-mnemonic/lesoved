Ext.define('Foresto.store.NumCut',{
	extend:'Ext.data.Store',
	alias: "numcut",
	storeID:'numcut',
	fields: [
	   {name:'id'
	},{
		name: 'subject'
	},{
		name:'num_of_agree'
			
	},{
		name:'uroch'
	},{
		name:'num_allot'
	},{
		name:'num_fca'
	},{
		name:'ar_fca'
	},{
		name:'expl_ar'
	},{
		name:'cel_nazn'
	},{
		name:'cat_zas'
	},{
		name:'geom'
	},{
		name:'video_cat'
	}],
	xtype:'numcut',
	proxy: {
		type:'ajax',
		url:'/api/cutarea-fca/',
		reader:{
			type:'json',
			rootProperty: 'results'
		}
	},
	autoLoad: true
});