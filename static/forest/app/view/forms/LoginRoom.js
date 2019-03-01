Ext.define('Foresto.view.forms.LoginRoom', {
    extend: 'Ext.form.Panel',
    title: 'Вход',
    width: 500,
    height: 310,
    id:'login',
    fullscreen: true,
    layout:'vbox',
    closable: false,
    requires: ['Foresto.view.forms.Regestration'],
    modal: true,
    hideOnMaskTap: true,
   
    header: {
    	cls: 'hdr2'
        
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
            	cls:'justbuttons',
            	ui: 'confirm',
            	margin: 4
            	
            	
            	
            },{
            	xtype: 'button',
                text:'Регистрация',
                cls:'justbuttons',
                margin: 4,
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
            			
            },{
            	xtype: 'button',
                text:'Информация о сервисе',
                cls:'justbuttons',
                margin: 4,
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
            			
            }
        ]
});



