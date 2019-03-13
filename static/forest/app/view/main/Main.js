
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
        'Foresto.view.map.LayersStore',
        'Foresto.view.main.ButtonController',
        'Foresto.view.forms.LoginRoom',
        'Foresto.model.EditLCA',
        'Foresto.model.EditListRenters',
        'Ext.Menu'
    ],
    autosize:true,
    id:"main",
    header: {
    	height: 65,
        cls: 'header-cls',
        items:[{
        	xtype:'button',
        	text:'Войти',
        	cls:'mainbuttons',
        	handler: function() {
                Ext.Viewport.toggleMenu('right');
            }
        },{
        	xtype:'button',
        	text:'О сервисе',
        	cls:'mainbuttons',
        }],
        title : {
            cls : 'header-title-cls',
            text : 'ЛЕСОВЕД(pre-alpha)'
        },
    },
    
    /*tools: [{
        type: 'menu',
        handler: function() {
            Ext.Viewport.toggleMenu('right');
        }
    }],*/
    
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
    		handler: function() {
    	        if (!this.overlay) {
    	            this.overlay = Ext.Viewport.add({
    	                xtype: 'foresto-agreement',
    	                renderTo: Ext.getBody(),
    	                height:'82%',
    	                scope:this,

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
    	        if (!this.overlay) {
    	            this.overlay = Ext.Viewport.add({
    	                xtype: 'rentlist',
    	                
    	                renderTo: Ext.getBody(),
    	                height:'55%',
    	                width: '70%',
    	                header:{
    	                	title:'Список проектов',
    	                	cls:'hdr2'
    	                },
    	        	
    	                scope:this,

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
    	                
    	                renderTo: Ext.getBody(),
    	                height:'55%',
    	                width: '70%',
    	                scope:this,

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
    	Ext.Viewport.setMenu(this.getMenuCfg('right'), {
        	side: 'right'
    	});
	},
    
    doDestroy: function () {
    	Ext.Viewport.removeMenu('right');
    	this.callParent();
    },
    
    getMenuCfg: function(side) {
        return {
            items: [{
                text: 'Вход',
                iconCls: 'x-fa fa-gear',
                scope: this,
                cls:'mainbuttons',
                handler: function(){
                	var loginf = new Ext.form.Panel ({
                		xtype:'formpanel',
                		layout:'vbox',
                		id:'loginf',
                		items:[{
                			xtype:'textfield',
                			text:'login'
                		}]
                	})
                	
                	return loginf;
                }
            }, {
                text: 'Регистрация',
                iconCls: 'x-fa fa-pencil',
                scope: this,
                cls:'mainbuttons',
                handler: function() {
                    if (!this.overlay) {
                        this.overlay = Ext.Viewport.add({
                            xtype: 'regs',
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
            }]
        }
    },
    
    /*   
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
    }*/
    
});
