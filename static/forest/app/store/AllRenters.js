Ext.define('Foresto.store.AllRenters',{
	extend:'Ext.data.Store',
    alias: "allrenters",
    storeID:'allrenters',
    fields: [{
    name: 'id'
    },{
    name:"org_prav_form"
    },{
    name:"inn"
    },{
    name:"account_name"
    },{
    name: "name"
    },{
    name: "snameplp"
    },{
    name: "fnameplp"
    },{
    name:"patronymicplp"
    },{
    name:"position"
    },{
    name:"leg_docum"
    },{
    name:"ogrn"
    },{
    name:"identity_doc"
    },{
    name: "serial_doc"
    },{
    name:"number_doc"
    }],
    xtype:'allrenters',
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

        	
