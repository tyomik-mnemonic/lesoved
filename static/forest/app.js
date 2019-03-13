/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */

Ext.application({
    name: 'forest',

    extend: 'Foresto.Application',

    requires: [
        'Foresto.view.main.Main',
        'Foresto.view.forms.LoginRoom',
        'Foresto.view.map.Mapworkspace',
    ],
    
    appFolder: 'app',

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    
    mainView: 'Foresto.view.main.Main',
    
    launch : function () {
    	Ext.util.Format.defaultDateFormat= 'Y-m-d'
    },
    
    initialize: function() {
        var testherna = Ext.create('Foresto.view.map.Mapworkspace',{
        	fullscreen: false,
        	maxHeight: 1254,
        	width: 300,
        	draggable: true,
        	centered:true
        	
        });
        
        testherna.add({
        	xtype:'panel',
        	title:'tesrt'
        });
    }

    //-------------------------------------------------------------------------
    // Most customizations should be made to sencha.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});