Ext.define('Foresto.view.forms.LoginWorkSpace', {
    extend: 'Ext.form.Panel',
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
    title: 'Регистрация',
    layout:'vbox',
    
    
    modal: true,
    hideOnMaskTap: true,
 
    centered: true,
    
    items:[{
    	xtype:'selectfield',
    	label:'Правовая форма'
    },{
    	xtype:'selectfield',
    	label:'Правовая форма2'
    }],
    
   
    scrollable: true,
    scope: this
});