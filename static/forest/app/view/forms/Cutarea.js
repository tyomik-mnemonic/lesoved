Ext.define('Foresto.view.forms.Cutarea', {
    extend: 'Ext.tab.Panel',
    title: 'Лесосека',
    id: 'cutareaform',
    scrollable: true,
    xtype: 'foresto-cutarea',
    cls:'hdr2',
    tabBar: {
		cls:'hdr2',
		defaults:{
			cls:'hdr2'
		}
    },
  
    layout:'card',
    items:[{
    	xtype:'formpanel',
    	id:'cutareap1',
    	cls:'justbuttons',
    	title:'Лесосека',
    	scope:this,
    	items:[{
    	    	xtype: 'selectfield',
    	        label: 'субъект РФ',
    	        name: 'subject',
    	        margin: '10 0 0 0',
    	        store: Ext.create('Foresto.store.Subject'),
    	        valueField: 'id',
                displayField:'name'
    	        
    	    },{
    	    	xtype: 'selectfield',
    	        label: 'Номер договора',
    	        name: 'agreement',
    	        store: Ext.create('Foresto.store.AgreeListView'),
    	        valueField: 'id',
                displayField:'num'
    	      //all is ok
    	    },{
        		xtype:'textfield',
        		label: 'урочище',
        		name: 'tract'
        		
        	},{
        		xtype: 'selectfield',
    	        label: 'выдел',
    	        name: 'allo',
    	        store: Ext.create('Foresto.store.Allots'),
    	        valueField: 'id',
                displayField:'num'
        	},{
    	    	xtype: 'textfield',
    	        label: 'док. номер лесосеки',
    	        name: 'subject'
    	        
    	    },{
    	    	xtype: 'textfield',
    	        label: 'площадь лесосеки', //должна собирать с геометрии?
    	        name: 'totalarea',
    	        
    	    },{
    	    	xtype: 'textfield',
    	        label: 'эксплуатационная площадь', 
    	        name: 'exarea',
    	        
    	    },{
    	    	xtype: 'selectfield',
    	        label: 'Целевое назначение',
    	        name: 'task',
    	        store: Ext.create('Foresto.store.Purpose'),
    	        valueField: 'id',
                displayField:'name'
    	    },{
    	    	xtype: 'selectfield',
    	        label: 'Категория лесозащиты',
    	        name: 'ptotection',
    	        store: Ext.create('Foresto.store.ProtectType'),
    	        valueField: 'id',
                displayField:'name'
    	        
    	    },{
    	    	xtype: 'textfield',
    	        label: 'Границы лесосеки',
    	        name: 'geom'
    	     
    	    },{
    	    	xtype: 'textfield',
    	        label: 'материалы',
    	        name: 'video'
    	    },{
    	    	xtype:'button',
    	    	centured:true,
    	    	margin: '20 0 0 0',
    	    	padding: 5,
    	    	width: 180,
    	    	cls: 'buttonsforsave',
    	    	text:'сохранить',
    	    
            	handler: function() {
            		var cutform = this.up();
                  	var dataSetNew1 = cutform.getValues();
                	
                	Ext.Ajax.request({
                		url:'/api/cutarea-fca/',
                		method: 'POST',
                		params: dataSetNew1
                	})
                }
            }]
    	},{
        	xtype:'formpanel',
        	cls:'justbuttons',
        	layout: 'vbox',
            scrollable: true,
            scope:this,
        	title:'Планируемое использование',
        	items:[{
        		xtype:'selectfield',
        		label:'Номер лесосеки',
        		margin: '10 0 0 0',
        	    store: Ext.create('Foresto.store.NumCut'),
    	        valueField: 'id',
                displayField:'num_fca'
        	},{
        		xtype:'selectfield',
                label: 'форма рубки',
                name:'targetUsing',
                store: Ext.create('Foresto.store.FellForm'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'selectfield',
                label: 'вид рубки',
                name:'targetUsing',
                store: Ext.create('Foresto.store.FellType'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'selectfield',
                label: 'тип хозяйства',
                name:'targetUsing',
                store: Ext.create('Foresto.store.TypeOfFarm'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'selectfield',
                label: 'породный состав',
                name:'targetUsing',
                store: Ext.create('Foresto.store.Kind'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'selectfield',
                label: 'сортиментный состав',
                name:'targetUsing',
                store: Ext.create('Foresto.store.Assort'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'selectfield',
                label: 'единица измерения',
                name:'targetUsing',
                store: Ext.create('Foresto.store.CutUnit'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'textfield',
                label:'объем древ.'
            },{
            	xtype:'selectfield',
                label:'недревесный ресурс',
            },{
                xtype:'selectfield',
                label:'объем недрев. рес.',
                	
            },{
            	xtype:'button',
            	centured:true,
            	margin: '20 0 0 0',
            	padding: 5,
            	width: 180,
            	cls: 'buttonsforsave',
            	text:'сохранить',
            
            	handler: function() {
            		var planform = this.up();
                  	var dataSetNew2 = planform.getValues();
                	
                	Ext.Ajax.request({
                		url:'/api/cutarea-fca-use/',
                		method: 'POST',
                		params: dataSetNew2
                	})
                }
           }]
    	},{
        	xtype:'formpanel',
        	cls:'justbuttons',
        	scope:this,
            scrollable: true,
        	title:'Фактическое использование',
        	items:[{
        		xtype:'selectfield',
        		label:'Номер лесосеки',
        		margin: '10 0 0 0',
        	    store: Ext.create('Foresto.store.NumCut'),
    	        valueField: 'id',
                displayField:'num_fca'
        	},{
        		xtype:'selectfield',
                label: 'вид работ',
                name:'targetUsing',
                store: Ext.create('Foresto.store.CutWorks'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'selectfield',
                label: 'тип хозяйства',
                name:'targetUsing',
                store: Ext.create('Foresto.store.TypeOfFarm'),
    	        valueField: 'id',
                displayField:'name'
            },{
        		xtype:'selectfield',
                label: 'вид рубки',
                name:'targetUsing',
                store: Ext.create('Foresto.store.FellForm'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'selectfield',
                label: 'форма рубки',
                name:'targetUsing',
                store: Ext.create('Foresto.store.FellType'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'selectfield',
                label: 'породный состав',
                name:'targetUsing',
                store: Ext.create('Foresto.store.Kind'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'selectfield',
                label: 'сортиментный состав',
                name:'targetUsing',
                store: Ext.create('Foresto.store.Assort'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'textfield',
                label: 'объем древесины',
                name:'targetUsing'
              
            },{
            	 xtype:'selectfield',
                 label: 'Вид использования', //че это?
                 name:'viewofuse',
                 store: Ext.create('Foresto.store.Assort'),
     	        valueField: 'id',
                 displayField:'name'
            },{
            	xtype:'textfield',
                label:'недревесный ресурс',
            },{
            	xtype:'selectfield',
                label: 'единица измерения',
                name:'targetUsing',
                store: Ext.create('Foresto.store.CutUnit'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'textfield',
                label: 'объем недревесных',
                name:'notwood'
                
            },{
                xtype:'selectfield',
                label: 'мероприятия',
                name:'actions',
                store: Ext.create('Foresto.store.Actions'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'selectfield',
                label: 'объект',
                name:'actions',
                store: Ext.create('Foresto.store.ObjectTypes'),
    	        valueField: 'id',
                displayField:'name'
            },{
                xtype:'textfield',
                label: 'используемая площадь',
                name:'area'
              
            },{
            	xtype:'selectfield',
                label: 'лесовосстановление',
                name:'actions',
                store: Ext.create('Foresto.store.Reforestration'),
    	        valueField: 'id',
                displayField:'name'
              
            },{
                xtype:'textfield',
                label: 'комментарий',
                name:'area'
              
            },{
                xtype:'datepickerfield',
                label: 'комментарий',
                name:'area'
              
            },{
                xtype:'button',
            	centured:true,
            	margin: '20 0 0 0',
            	padding: 5,
            	width: 180,
            	cls: 'buttonsforsave',
            	text:'добавить',
            	handler: function() {
            		var factf = this.up();
                  	var dataSetNew3 = factf.getValues();
                	
                	Ext.Ajax.request({
                		url:'/api/cutarea-fca-use/',
                		method: 'POST',
                		params: dataSetNew3
                	})
                }
           }]
        }]
    
});