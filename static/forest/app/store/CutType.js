Ext.define('Foresto.store.CutType',{
    extend:'Ext.data.Store',
    alias: 'cutstoretype',
    storeID: 'cutstoretype',
    xtype: 'cuttypestore',
    fields: ['id', 'name'],
    proxy: {
        type: 'ajax',
        url: '/api/forestry-cutarea-type/',
        reader: {
            type:'json',
            rootProperty:'results'    
    }

   },
    autoLoad: true

});




