Ext.define('Foresto.view.map.LayersStore',{
	extend:'Ext.form.Panel',
    
	requires: [
        'GeoExt.component.Map',
        'GeoExt.data.store.Layers',
        'Ext.panel.Panel',
        'Ext.grid.Grid',
    ],

	init: function (application) {
    	var me = this;
    	
        me.items.add(me.layerList);
    	
        me.layerList.on('show', function() {
            var selection = [];
            me.layerList.getStore().each(function(rec) {
                var layer = rec.getOlLayer();
                if (layer.getVisible() === true) {
                    selection.push(rec);
                }
            });
            // set visible layer recs as initial selection
            me.layerList.setSelection(selection);

        }, me.layerList, {single: true});
    },
    
    onSelect: function(grid, record) {
        var layer = record.getOlLayer();
        layer.setVisible(true);
    },
    
    onDeselect: function(grid, record) {
        var layer = record.getOlLayer();
        layer.setVisible(false);
    },

    layerStore: function() {
    	return Ext.create('GeoExt.data.store.Layers', {
            map: olMap
        });
    },

    layerList: function() {
    	var me = this;
    	
    	return Ext.create('Ext.grid.Grid', {
            title: 'Layer List',
            columns: [
                {text: 'Name', dataIndex: 'text', flex: 1}
            ],
            store: me.layerStore,
            mode: 'MULTI',
            striped: false,
            listeners: {
                select: me.onSelect,
                deselect: me.onDeselect
            }
        });
    }
})