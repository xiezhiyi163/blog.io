var tableprops_ = ['listdata','listtitle','listprops','listhascheck','listallcheck'],
	tablemethods_ = {
		// changedatatest:function(){//直接操作有父级数据的属性，可直接修改父级的数据
		// 	this.listdata[0].wechat = '3333'
		// }
	},
	tablemounted_ = function(){
		
	},
	tableComponent_ = {
		template:'#tableComponent_',
		props:tableprops_,
		methods:tablemethods_,
		mounted:tablemounted_
	};//看作是脚手架引进来的vue组件
var cardprops_ = ['listdata','listtitle','listprops','listtitles','listhascheck','listallcheck'],
	cardmethods_ = {},
	cardmounted_ = function(){
		
	},
	cardComponent_ = {
		template:'#cardComponent_',
		props:cardprops_,
		methods:cardmethods_,
		mounted:cardmounted_
	};
var components_ ={
		tableList:tableComponent_,
		cardlist:cardComponent_
	},
	created_ = function(){},
	datas = {
		pcormob:'',
		tabletitle:['微信登录','手机登录','账号登录','日期'],
		tableprops:['wechat','phone','account','date'],
		tableallcheck:0,
		tablelistdata:[
			{
				wechat:4,
				phone:8,
				account:9,
				date:'2020-08-05',
				check:0,
			},
			{
				wechat:7,
				phone:8,
				account:5,
				date:'2020-09-05',
				check:0,
			},
			{
				wechat:4,
				phone:8,
				account:9,
				date:'2020-08-05',
				check:0,
			},
			{
				wechat:7,
				phone:8,
				account:5,
				date:'2020-09-05',
				check:0,
			},
			{
				wechat:4,
				phone:8,
				account:9,
				date:'2020-08-05',
				check:0,
			},
			{
				wechat:7,
				phone:8,
				account:5,
				date:'2020-09-05',
				check:0,
			},
			{
				wechat:4,
				phone:8,
				account:9,
				date:'2020-08-05',
				check:0,
			},
			{
				wechat:7,
				phone:8,
				account:5,
				date:'2020-09-05',
				check:0,
			},
		]
	},
	methods_ = {
		//拿到设备标识和屏幕宽高
		ifpc:function(){
			var UA = navigator.userAgent
			if(UA.indexOf('Windows') != -1 || UA.indexOf('Macintosh') != -1) {
				return 'win'
			} else {
				return 'mob'
			}
		},
		getwidthandheight:function(type){
			if(type == 'w'){
				var ww = window.innerWidth,
					ddw = document.documentElement.clientWidth,
					dbw = document.body.clientWidth,
					tw = ww?ww:ddw?ddw:dbw;
				return tw							
			}else{
				var wh = window.innerHeight,
					ddc = document.documentElement.clientHeight,
					dbc = document.body.clientHeight,
					th = wh?wh:ddc?ddc:dbc;
				return th							
			}
		},
		//setpcormob
		setpcormob:function(){
			if(this.ifpc()=='win'){
				this.pcormob = 'pc'
			}else{
				this.pcormob = 'mob'
			}
		},
		//监听
		listens:function(){
			setTimeout(function(){
				document.getElementById('app').style.visibility = 'visible'
			},150)
		}
	},
	mounted_ = function(){
		this.setpcormob()
		this.listens()
	},
	vue = new Vue({
		el:'#app',
		components:components_,
		created:created_,
		data:datas,
		methods:methods_,
		mounted:mounted_
	})