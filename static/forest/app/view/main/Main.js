
Ext.define('Foresto.view.main.Main', {
    extend: 'Ext.panel.Panel',
    height: '100%',
	width: '100%',
    centered:true,
    layout:'box',
    scope:this,
    
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
        'Foresto.view.map.Mapworkspace',
        'Foresto.view.forms.Cutarea',
        'Foresto.model.EditLCA'
   	    
    ],
    autosize:true,
    padding: 0,
    id:"bighBox",
    header: {
        cls: 'header-cls',
        title : {
            cls : 'header-title-cls',
            text : 'ГИС ПОДДЕРЖКИ ЛЕСОПОЛЬЗОВАНИЯ(pre-alpha)'
        }
    },
    tools: [{
        type: 'menu',
        handler: function() {
            Ext.Viewport.toggleMenu('top');
        }
        }],
    
    items:[{
        xtype: 'carousel',
        id: "mainPart",
        flex: 1,
        defaults: {
            border: true,
            ui: 'light'
        },
        items: [{
            
            header: {
            	cls : 'hdr2',
               title : {
                    cls : 'hdr2',
                    text : 'КАРТА'}
            },   
            
            id:'mapId',
            xtype: 'panel',
            layout:'vbox',
            padding: 0,
            scope: this,
            items: [{
            	xtype:'toolbar',
            	cls:'toolbars',
            	width: 160,
            	docked:'left',
            	scrollable: {
            		y: false
            	},
            	items:[{
            		text:'Проекты',
            		ui:'action',
            		margin:2,
            		cls: 'grbuttons',
            		height: 35,
            		width: 120,
            		handler: function() {
            			
            			Ext.create('Ext.panel.Panel',{
            				height: '30%',
            				header: {
            					cls : 'hdr2'
            			        
            			    },
            				width: 910,
                    		renderTo:'bighBox',
                    		centered:true,
                    		margin: '98 0 0 215',
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
            		text:'Лесосеки',
            		cls: 'grbuttons',
            		ui:'action',
            		height: 35,
            		width: 120,
            		margin:2,
            		
            		
            		handler: function() {
            			
            			Ext.create('Ext.panel.Panel',{
            				height: 300,
            				header: {
            					cls : 'hdr2'
            			        
            			    },
            				width: 850,
                    		renderTo:'bighBox',
                    		centered:true,
                    		margin: '98 0 0 215',
                    		autoDestroy: true,
                    		items:[{
                    			xtype:'contlistII'
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
                    		title:'Лесосеки',
                    		listeners:{
                    		      afterrender: function(e){
                    		          var d = e.getHeaderContainer();
                    		          e.setHeight(10);
                    		      }  
                    		    }
                    		
            				
            			})
                    }
            	},{
            		xtype:'spacer'
            	},{
            		text:'+Лесосека',
            		ui:'action',
            		cls: 'grbuttons',
            		height: 35,
            		width: 120,
            		margin:2,
            		handler:'cutForms'
            	},{
            		text:'+Договор',
            		ui:'action',
            		cls: 'grbuttons',
            		margin:2,
            		height: 35,
            		width: 120,
            		handler:'agreForms'
            	}]
            },{
                xtype: 'foresto-map',
                id:'mapsource',
                layout:'box'
            }]
           
            
        },{
            title: 'Отчетность',
            header:{
            	cls: 'hdr2'
            },
            xtype: 'panel',
            
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            
            items:[{
            	xtype:'button',
            	cls:'grbuttons',
            	ui: 'confirm',
            	text:'Получить отчёт I-ИЛ',
            	margin:'10px',
            	height: 100,
        		width: 215
            	
            },{
            	xtype:'button',
            	cls:'grbuttons',
            	ui: 'confirm',
            	text:'Получить отчёт I-ВЛ',
            	height: 100,
        		width: 215
            }]
        }]
    },{
        xtype: 'panel',
       
        header: {
            cls: 'header-cls',
            title : {
                cls : 'header-title-cls',
                text : 'Управление'
            }
        },
        layout: 'fit',
       
        items:[{
        	xtype: 'carousel',
        	direction: 'vertical',
        	
            items: [{
                styleHtmlContent: true,
                layout: {
                    type: 'card',
                    align: 'center'
                },
                items: [{
                	xtype:'button',
                	ui: 'standart',
                	cls: 'buttonView',
                	text: 'Ввод информации',
                	id: 'EnterInfoId',
                	handler: function () {
                		 Ext.create('Ext.panel.Panel', {
                   		 
                   		
                   		
                   		 autoshow: true,
                   		 items: [{
                   			 xtype:'foresto-enterInfo'
                   		}]
                   		
                   	}).show();
                   	}
                	
                	
                }]  
                
                
            },
            {
                
                style: 'background-color: #6C9D5D',
                styleHtmlContent: true,
                layout: {
                    type: 'card',
                    align: 'center'
                },
                items: [{
                	xtype:'button',
                	cls: 'buttonView',
                	
                	text: 'Просмотр'
                		
                	
                }]
                
            }]
        	
        }],
        hidden: true,
        border: true,
        width: '18%'
        
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
                cls:'grbuttons',
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
    },
    /*initialize: function() {

        if (!this.overlay) {
            this.overlay = Ext.Viewport.add({
                xtype: 'mapWorkSpace',
                draggable:'true',
                renderTo: Ext.getBody(),
                fullscreen: true,
                centered: true,
                width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 400,
                maxHeight: 1254,
                scrollable: false
                
            });
        }

        this.overlay.show();
    	
    	  
    }*/
    /*
    
    initialize: function() {
    	
    	this.add({
    		  xtype:'mapWorkSpace',
    		  id:'mapWorkSpace',
    		  maxHeight: 1215,
    		  width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 400,
    		  scrollable: false,
    		  draggable: true,
    		  centered:true
    				  
    	  });
    	  
    }
    
    initialize: function () {
    	var mworkspace = Ext.create( 'Foresto.view.map.Mapworkspace');
    
    	
    }*/
});

