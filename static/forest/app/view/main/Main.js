
Ext.define('Foresto.view.main.Main', {
    extend: 'Ext.panel.Panel',
    height: '100%',
	width: '100%',
    centered:true,
    layout:'fit',
   // layout:'box',
    plugins: 'responsive',
    responsiveConfig:{
    	tall:{
    		tabPosition:'center'
    	}
    },
    xtype: 'app-main',
    controller:'menuform',     
    requires: [
        'Foresto.view.map.Map',
        'Foresto.view.main.ButtonController',
        'Foresto.view.forms.LoginRoom',
        'Foresto.model.EditLCA',
        'Foresto.model.EditListRenters'
   	    
    ],
    autosize:true,
    id:"main",
    header: {
    	height: 65,
        cls: 'header-cls',
        title : {
            cls : 'header-title-cls',
            text : 'ЛЕСОВЕД(pre-alpha)'
        }
    },
    

    tools: [{
        type: 'menu',
        handler: function() {
            Ext.Viewport.toggleMenu('top');
        }
        }],
    
    items: [{
    	xtype: 'foresto-map'

    },{
        	xtype:'toolbar',
        	id:'maptoolbar',
        	cls:'toolbars',
        	docked:'top',
        	height: 38,
        	items:[{
        		text:'+Лесосека',
        		ui:'action',
        		cls: 'grbuttons',
        		height: 35,
        		width: 150,
        		margin:2,
        		handler:'cutForms'
        	},{
        		text:'+Договор',
        		ui:'action',
        		cls: 'grbuttons',
        		margin:2,
        		height: 35,
        		width: 145,
        		handler: 'agreeForm'
        	},{
        		xtype:'spacer'
        	},{
        		text:'Мои проекты',
        		ui:'action',
            	margin:2,
        		cls: 'grbuttons',
        		height: 35,
        		width: 210,
        		handler: 'projectList' 
        	},{
        		text:'Мои лесосеки',
        		cls: 'grbuttons',
        		ui:'action',
        		height: 35,
        		width: 205,
        		margin:2,
        		handler: 'cutareaList'
        	}]
    }],
           
    initialize: function() {
        Ext.Viewport.setMenu(this.getMenuCfg('top'), {
            side: 'top'
        });
    },
    doDestroy: function() {
        Ext.Viewport.removeMenu('top');
        this.callParent();
    },
    getMenuCfg: function(side) {
        return {
            items: [{
                text: 'Меню',
                iconCls: 'x-fa fa-pencil',
                cls:'justbuttons',
                modal: true,
                hideOnMaskTap: true,
                scope: this,
                handler: function() {
                    if (!this.overlay) {
                        this.overlay = Ext.Viewport.add({
                            xtype: 'login',
                            renderTo: Ext.getBody(),
                            fullscreen: true,
                            modal: true,
                            hideOnMaskTap: true,
                            showAnimation: {
                                type: 'popIn',
                                duration: 250,
                                easing: 'ease-out'
                            },
                            hideAnimation: {
                                type: 'popOut',
                                duration: 250,
                                easing: 'ease-out'
                            },
                            centered: true,
                            width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 400,
                            maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 220 : 400,
                            scrollable: true
                            
                        });
                    }

                    this.overlay.show();
                }
            }]
        };
    }
    
});
