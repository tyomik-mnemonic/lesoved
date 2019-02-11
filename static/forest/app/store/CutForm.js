Ext.define ('Foresto.store.CutForm',{
    extend:'Ext.data.Store',
    alias: 'cutstoreform',
    storeID: 'cutstoreform',
    xtype: 'cutformstore',
    proxy: {
        type: 'ajax',
        url: '/api/forestry-cutarea-shape/',
        reader: {
            type:'json',
            rootProperty:'results'    
    }

   },
    autoLoad: true

});




