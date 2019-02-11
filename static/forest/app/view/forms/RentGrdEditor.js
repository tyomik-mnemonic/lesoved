Ext.define('Foresto.view.forms.RentGrdEditor',{
	extend: 'Ext.form.Panel',
	header:{
		cls : 'hdr2',
		text:'Редактировать договор'
	},
	layout: 'vbox',
	xtype:'rentgrdeditor',
	collapsible: true,
	hidden:true,
	items:[
	{	name: 'id',
		xtype:'textfield'
	},{
		name:'document'
		xtype:'textfield'
			
	},{
		name:'document_num',
		xtype:'textfield'
	},{
		name:'legal_type',
		xtype:'textfield'
		
	},{
		name:'fio_represent',
		xtype:'textfield'
	},{
		name:'position_represent',
		xtype:'textfield'
	},{
		name:'certificate',
		xtype:'textfield'
	}]
});

/*
 Ext.create({
    xtype: 'grid',
    fullscreen: true,
    plugins: {
        grideditable: {
            triggerEvent: 'childdoubletap',
            enableDeleteButton: true,
            formConfig: null, // See more below

            defaultFormConfig: {
                xtype: 'formpanel',
                scrollable: true,
                items: [{
                    xtype: 'fieldset'
                }]
            },

            toolbarConfig: {
                xtype: 'titlebar',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    ui: 'decline',
                    text: 'Cancel',
                    align: 'left',
                    action: 'cancel'
                }, {
                    xtype: 'button',
                    ui: 'confirm',
                    text: 'Submit',
                    align: 'right',
                    action: 'submit'
                }]
            },
        }
    },
    store: {
        fields: [],
        data: [{
            name: 'Jake'
        }, {
            name: 'Finn'
        }]
    },
    columns: [{
        text: 'Name',
        dataIndex: 'name',
        flex: 1,
        editable: true
    }]
 */