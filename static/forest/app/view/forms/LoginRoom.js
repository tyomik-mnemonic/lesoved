Ext.define('Foresto.view.forms.LoginRoom', {
    extend: 'Ext.form.Panel',
    title: 'Вход',
    width: 500,
    height: 250,
    id:'login',
    fullscreen: true,
    layout:'vbox',
    closable: false,
    requires: ['Foresto.view.forms.LoginWorkSpace',
               'Foresto.model.EditListRenters'],
    modal: true,
    hideOnMaskTap: true,
   
    header: {
        cls: 'header-cls'
        
    },
    scrollable: true,
    
    xtype: 'login',
    
	
	
	
	items: [
            {
                //SCROLL DOWN FOR HANDLER
                xtype: 'textfield',
                margin: 6,
                name: 'name',
                label: 'Name',
                labelCls: 'fielddesign',
                value: 'user',
                autoCapitalize: false
            },{
                xtype: 'passwordfield',
                margin: 6,
                name: 'password',
                label: 'Password',
                labelCls: 'textFieldDesign',
                value: 'test'
            },{
            	xtype: 'button',
            	text:'Войти',
            	cls:'grbuttons',
            	ui: 'confirm',
            	margin: 4
            	
            	
            	
            },{
            	xtype: 'button',
                text:'Регистрация',
                cls:'grbuttons',
                margin: 4,
                handler: function() {
                    if (!this.overlay) {
                        this.overlay = Ext.Viewport.add({
                            xtype: 'loginWS',
                            layout:'fit',
                            hidden: true
                            
                            
                            
                        });
                    }

                    this.overlay.show();
                }
            			
            }
            	
            
            
        ]
});



