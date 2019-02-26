
Ext.define('Foresto.view.main.Main', {
    extend: 'Ext.panel.Panel',
    height: '100%',
	width: '100%',
    centered:true,
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
        		//handler:'cutForms'
        		handler: function() {
                    if (!this.overlay) {
                        this.overlay = Ext.Viewport.add({
                            xtype: 'foresto-cutarea',
                            scrollable: true,
                            
                            renderTo: Ext.getBody(),
                            height:'55%',
                            margin: '208 98 200 215',
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
                            //width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 400,
                            //maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 220 : 400,
                            scrollable: true
                            
                        });
                    }

                    this.overlay.show();
                }
        	},{
        		text:'+Договор',
        		ui:'action',
        		cls: 'grbuttons',
        		margin:2,
        		height: 35,
        		width: 145,
        		scope: this,
        		handler: function() {
                    if (!this.overlay) {
                        this.overlay = Ext.Viewport.add({
                            xtype: 'foresto-agreement',
                            
                            renderTo: Ext.getBody(),
                            height:'77%',
                            margin: '208 98 200 215',
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
                            //width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 400,
                            //maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 220 : 400,
                            scrollable: true
                            
                        });
                    }

                    this.overlay.show();
                }
        	},{
        		xtype:'spacer'
        	},{
        		text:'Мои проекты',
        		ui:'action',
            	margin:2,
        		cls: 'grbuttons',
        		height: 35,
        		width: 210,
        		handler: function() {
        			
        			Ext.create('Ext.panel.Panel',{
        				height: '30%',
        				header: {
        					cls : 'hdr2'
        			        
        			    },
        				width: 910,
                		renderTo:'main',
                		centered:true,
                		margin: '795 0 0 1417',
                		autoDestroy: true,
                		items:[{
                			xtype:'rentlist'
                		}],
                		collapsible:true,
                		clossable: true,
                		scope: this, 
                		tools: [{
                				type:'help'
                				},{
                				type:'search'		
                				},{
                				type:'close',
                				handler: function(e) {
                					
                						e.hide()
                				}
                				}],
                		title:'Договор'
        			})
                }	 
        	},{
        		text:'Мои лесосеки',
        		cls: 'grbuttons',
        		ui:'action',
        		height: 35,
        		width: 205,
        		margin:2,
        		handler: function() {
                    if (!this.overlay) {
                        this.overlay = Ext.Viewport.add({
                            xtype: 'contlistII',
                           // title:'Мои лесосеки',
                           // cls:'toolbar',
                            renderTo: Ext.getBody(),
                            height:'77%',
                            margin: '208 98 200 215',
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
                            //width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 400,
                            //maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 220 : 400,
                            scrollable: true
                            
                        });
                    }

                    this.overlay.show();
                }
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
                text: 'ВОЙТИ',
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
