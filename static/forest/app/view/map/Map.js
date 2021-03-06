olMap = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                crossOrigin: 'anonymous',
                url: 'http://tilessputnik.ru/{z}/{x}/{y}.png'
            })
        }),

        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://geo.forest.petserver.ru/geoserver/wms',
                params: {'LAYERS': 'forest:forestry', 'TILED': true},
               serverType: 'geoserver'
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://geo.forest.petserver.ru/geoserver/wms',
                params: {'LAYERS': 'forest:forestrypart', 'TILED': true},
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://geo.forest.petserver.ru/geoserver/wms',
                params: {'LAYERS': 'forest:quarter', 'TILED': true},
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'http://geo.forest.petserver.ru/geoserver/wms',
                params: {'LAYERS': 'forest:allotment', 'TILED': true},
                serverType: 'geoserver'
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([51.559779, 57.19008]),
        zoom: 12
    })
});


Ext.define('Foresto.view.map.Map', {
    extend: 'GeoExt.component.Map',
    xtype: 'foresto-map',
    map: olMap
});
