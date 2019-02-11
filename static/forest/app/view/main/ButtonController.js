Ext.define('Foresto.view.main.ButtonController', {
	//This controller have created to manage buttons of forms on the main view
	extend: 'Ext.app.ViewController',
	
	alias: 'controller.menuform',
	layout: 'float',
	
	requires: [
	           'Foresto.view.forms.Cutarea',
	           'Foresto.view.forms.RenterData',
	           'Foresto.view.forms.Agreement',
	           'Foresto.view.forms.Kvartal',
	           'Foresto.view.forms.RenterDataCompany',
	           'Foresto.view.map.Mapworkspace',
	           ],
	

	
	
	views: ['Foresto.view.main.Main'],
	
	
	
	
	
	cutForms: function() {
    	var items32120 = [{
            xtype:'foresto-cutarea',
            scrollable: true,
            scope: this,
            
            renderTo: 'mainPart',
            
            handler: function() {
          	  this.action32120.hide();
            }
      	},{
              text: 'Сохранить',
              cls:'grbuttonsBig',
              ui: 'confirm',
              handler: function() {
                	
                	var dataup32120 = this.up().items.items[0];
              		var dataSet32120 = dataup32120.getValues()
                	
                	Ext.Ajax.request({
                		url:'/api/forestry-cutarea/',
                		method: 'POST',
                		params: dataSet32120
                	})
                }
      	},{
      		  text: 'Отменить',
      		  cls:'grbuttonsBig',
              ui: 'Decline',
              scope: this,
              handler: function() {
                  this.actions32120.hide();
            }
      	}];
      	if (!this.actions32120) {
              this.actions32120 = Ext.create('Ext.ActionSheet', {
                  items: items32120
              });
          }

          Ext.Viewport.add(this.actions32120);
          this.actions32120.show();
      },
    
    agreForms: function() {
    	var items2 = [{
          xtype:'foresto-agreement',
          scrollable: true,
          scope: this,
          
          renderTo: 'mainPart',
          
          handler: function() {
        	  this.action2.hide();
          }
    	},{
            text: 'Сохранить',
            cls:'grbuttonsBig',

            handler: function() {
            	var dataup2 = this.up().items.items[0];
              	var dataSet2 = dataup2.getValues()
               
                	
                Ext.Ajax.request({
                	url:'/api/contract/',
                	method: 'POST',
                	params: dataSet2
                })
             }
    	},{
      		  text: 'Отменить',
      		  cls:'grbuttonsBig',
              scope: this,
              handler: function() {
                  this.actions2.hide();
            }
      	}];
    	if (!this.actions2) {
            this.actions2 = Ext.create('Ext.ActionSheet', {
                items: items2
            });
        }

        Ext.Viewport.add(this.actions2);
        this.actions2.show();
    },
    
    renterForms: function() { 
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
                    	  var dataup01 = this.up().items.items[0];
                    		var dataSet01 = dataup01.getValues()
                      	
                      	
                      	
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
      		  xtype:'button', //run form with fieldsset for organisations
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
      }	,
    	
    quartForms: function() {
    	var items4 = [{
            xtype:'foresto-kvartal',
            scrollable: true,
            scope: this,
            
            renderTo: 'mainPart',
            
            handler: function() {
          	  this.action4.hide();
            }
      	},{
              text: 'Сохранить',
              cls:'renttypebutton',
              ui: 'confirm',
              handler: function() {
              	
              	
              	
              	Ext.Ajax.request({
              		url:'/api/forestry/',
              		method: 'POST',
              		params: dataSet1
              	})
              }
      	}, {
      		  text: 'Отменить',
              ui: 'Decline',
              cls:'renttypebutton',
              scope: this,
              handler: function() {
                  this.actions4.hide();
            }
      	}];
      	if (!this.actions4) {
              this.actions4 = Ext.create('Ext.ActionSheet', {
                  items: items4
              });
          }

          Ext.Viewport.add(this.actions4);
          this.actions4.show();
      },
      listCutarea: function() {
      	var items5 = [{
              xtype:'mapWorkSpace',
              scrollable: true,
              scope: this,
              
              renderTo: 'mainPart',
              
              handler: function() {
            	  this.action5.hide();
              }
        	},{
                text: 'Сохранить',
                cls:'renttypebutton',
                ui: 'confirm',
                handler: function() {
                   
                  	  var dataup05 = this.up().items.items[0];
                  		var dataSet05 = dataup05.getValues()
                    	
                	
                	
                	
                	Ext.Ajax.request({
                		url:'/api/forestry/',
                		method: 'POST',
                		params: dataSet05
                	})
                }
        	}, {
        		  text: 'Отменить',
                ui: 'Decline',
                cls:'renttypebutton',
                scope: this,
                handler: function() {
                    this.actions5.hide();
              }
        	}];
        	if (!this.actions5) {
                this.actions5 = Ext.create('Ext.ActionSheet', {
                    items: items5
                });
            }

            Ext.Viewport.add(this.actions5);
            this.actions5.show();
        }
      
      
      
    	
    	
    
	
	

});



	
	

