Ext.define('Foresto.view.forms.LoginWorkSpace', {
    extend: 'Ext.panel.Panel',
    requires: ['Foresto.model.EditListRenters',
              'Foresto.model.EditLCA',
              'Ext.field.Select',
              'Ext.panel.Panel',
              
              'Ext.tab.Panel'
              ],
   
    
    height: 800,
    width: 1000,
    id:'loginWS',
    fullscreen: true,
    
    closable: false,
    header: {
        cls: 'header-cls'
        
    },
    scrollable: true,
    
    xtype: 'loginWS',
    title: 'ЛИЧНЫЙ КАБИНЕТ',
    layout:'fit',
    
    
    modal: true,
    hideOnMaskTap: true,
 
    centered: true,
    
    items:[{
    	xtype:'tabpanel',
    	fullscreen: true,
    	autoSize:true,
    	cls: 'header-cls',
    	tabBarPosition: 'bottom',
        layout:'card',
    	shadow: true,
        activeTab: 1,
        
        defaults: {
            scrollable: true,
            userSelectable: {
               bodyElement: true
            }
        },
    	items: [
    	        {
    	        	xtype: 'panel',
    	        	layout:'vbox',
    	        	
    	        	title: 'ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ',
    	        	cls: 'header-cls',
    	        	
    	        	items:[
    	        	       {xtype: 'selectfield',
    	        	        label: 'Имя',
    	        	        margin: 4,
    	        	       },{
    	        	    	xtype: 'selectfield',
       	        	        label: 'Статус',
       	        	        margin: 4,
    	        	       },{
    	        	    	xtype: 'selectfield',
       	        	        label: 'Регион',
       	        	        margin: 4,   
    	        	       },{
    	        	    	xtype: 'button',
    	        	    	ui:'confirm',
    	        	    	text:'Добавить арендатора',
    	        	    	disabled:false,
    	        	    	handler: function() { 
    	        	        	//run actionSheet with buttons for PhysicalFaces and Organisations form types
    	        	        	var items = [{
    	        	                xtype:'panel',
    	        	                cls:'viewresize',
    	        	                scrollable: true,
    	        	                scope: this,
    	        	                layout: 'vbox',
    	        	                
    	        	                renderTo: 'mainPart',
    	        	                
    	        	                handler: function() {
    	        	              	  this.action4.hide();
    	        	                }
    	        	          	},{	  xtype:'button',
    	        	                  text: 'Физические лица и ИП', //run form with fields for Phy face and IndP
    	        	                  ui: 'confirm',
    	        	                  cls:'renttypebutton',
    	        	                  
    	        	                  handler: function() {
    	        	                	  var items33 = [{
    	        	                          xtype:'foresto-renterdata',
    	        	                          scrollable: true,
    	        	                          scope: this,
    	        	                          
    	        	                          renderTo: 'mainPart',
    	        	                          
    	        	                          handler: function() {
    	        	                        	  this.action33.hide();
    	        	                          }
    	        	                    	},{
    	        	                          text: 'Сохранить',
    	        	                          ui: 'confirm',
    	        	                          cls:'renttypebutton',
    	        	                          
    	        	                          handler: function() {
    	        	                          	
    	        	                          	
    	        	                          	
    	        	                          	Ext.Ajax.request({
    	        	                          		url:'/api/renter-individual/',
    	        	                          		method: 'POST',
    	        	                          		params: dataSet01
    	        	                          	})
    	        	                          }
    	        	                          
    	        	                    	},{
    	        	                    		  text: 'Отменить',
    	        	                            ui: 'Decline',
    	        	                            scope: this,
    	        	                            cls:'renttypebutton',
    	        	                            handler: function() {
    	        	                                this.actions33.hide();
    	        	                          }
    	        	                    	}];
    	        	                    	if (!this.actions33) {
    	        	                            this.actions33 = Ext.create('Ext.ActionSheet', {
    	        	                                items: items33
    	        	                            });
    	        	                        }

    	        	                        Ext.Viewport.add(this.actions33);
    	        	                        this.actions33.show();
    	        	                	  
    	        	                  	
    	        	                  }
    	        	          	}, {
    	        	          		  xtype:'button', //it is need be replaced to LoginWS Controller
    	        	          		  text: 'Юридические лица',
    	        	          		  cls:'renttypebutton',
    	        	                  ui: 'confirm',
    	        	                  scope: this,
    	        	                  
    	        	                  handler: function() {
    	        	                	  var items332 = [{
    	        	                          xtype:'foresto-companydata',
    	        	                          scrollable: true,
    	        	                          scope: this,
    	        	                          
    	        	                          renderTo: 'mainPart',
    	        	                          
    	        	                          handler: function() {
    	        	                        	  this.action332.hide();
    	        	                          }
    	        	                    	},{
    	        	                          text: 'Сохранить',
    	        	                          cls:'renttypebutton',
    	        	                          ui: 'confirm',
    	        	                          
    	        	                          handler: function() {
    	        	                          	
    	        	                          	var dataup1 = this.up().items.items[0];
    	        	                          	var dataSet1 = dataup1.getValues();
    	        	                          	
    	        	                          	Ext.Ajax.request({
    	        	                          		url:'/api/renter-entity/',
    	        	                          		method: 'POST',
    	        	                          		params: dataSet1
    	        	                          	})
    	        	                          }
    	        	                          
    	        	                    	},{
    	        	                    		text: 'Отменить',
    	        	                    		cls:'renttypebutton',
    	        	                            ui: 'Decline',
    	        	                            scope: this,
    	        	                            handler: function() {
    	        	                                this.actions332.hide();
    	        	                          }
    	        	                    	}];
    	        	                    	if (!this.actions332) {
    	        	                            this.actions332 = Ext.create('Ext.ActionSheet', {
    	        	                                items: items332
    	        	                            });
    	        	                        }

    	        	                        Ext.Viewport.add(this.actions332);
    	        	                        this.actions332.show();
    	        	                	  
    	        	                  	
    	        	                  }
    	        	          	},{
    	        	          		  xtype:'button',
    	        	          		  text: 'Отменить',
    	        	                  ui: 'Decline',
    	        	                  cls:'renttypebutton',
    	        	                  scope: this,
    	        	                  handler: function() {
    	        	                      this.actions3.hide();
    	        	                }
    	        	          	}];
    	        	          	if (!this.actions3) {
    	        	                  this.actions3 = Ext.create('Ext.ActionSheet', {
    	        	                      items: items
    	        	                  });
    	        	              }

    	        	              Ext.Viewport.add(this.actions3);
    	        	              this.actions3.show();
    	        	          }	
    	        	 
    	        	    	},{
    	        	    	xtype: 'button',
        	        	    text:'Редактировать профиль'
    	        	    	}
    	        	       ]
    	        },
    	        {	xtype:'panel',
    	        	
    	        	title: 'СПИСОК ДОГОВОРОВ',
    	        	items:[{
    	        			xtype: 'contlistII',
    	        			layout:'fit',
    	        			maxHeight: 5,
    	        			multiColumnSort:true,
 //   	        			autoSize:true,
//    	        			hideHeaders:true
    	        		  }]
    	        },
    	        {	xtype: 'panel',
    	        	title: 'СПИСОК ЛЕСОСЕК'
    	        		
    	        },{	
    	        	title: 'АРЕНДАТОРЫ',
    	        	xtype: 'rentlist',
    	        	maxHeight: 500,
//    	        			autoSize:true,
//    	        			layout:'fit',
    	        			multiColumnSort:true,
    	        			hideHeaders:true
    	        	
    	        	
    	        }
    	        ]
    }],
    
   
    scrollable: true,
    scope: this
});