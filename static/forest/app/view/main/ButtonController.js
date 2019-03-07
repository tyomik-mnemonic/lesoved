Ext.define('Foresto.view.main.ButtonController', {
	//This controller have created to manage buttons of forms on the main view
	extend: 'Ext.app.ViewController',
	
	alias: 'controller.menuform',
	layout: 'float',
	
	requires: [
	           'Foresto.view.forms.Cutarea',
	           'Foresto.view.forms.RenterData',
	           'Foresto.view.forms.Agreement',
	           'Foresto.view.forms.RenterDataCompany',
	           'Foresto.view.map.Mapworkspace',
	           ],
	views: ['Foresto.view.main.Main'],
	
	cutForms: function() {
        if (!this.overlay) {
            this.overlay = Ext.Viewport.add({
                xtype: 'foresto-cutarea',
                scope:this,
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
    },
    
    agreeForm: function() {
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
    },
    
    projectList: function() {
        if (!this.overlay) {
            this.overlay = Ext.Viewport.add({
                xtype: 'rentlist',
                
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
    },
    	
    cutareaList: function() {
        if (!this.overlay) {
            this.overlay = Ext.Viewport.add({
                xtype: 'contlistII',
                
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
    },
    /*init: Ext.Viewport.setMenu(this.getMenuCfg('right'), {
        side: 'right',
        reveal: true
    }),*/
    
       
      
});



	
	

