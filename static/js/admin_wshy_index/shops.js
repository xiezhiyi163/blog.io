var cardprops_ = ['listdata','listtitle','listprops','listtitles','listhascheck','listallcheck','fuidprops','uidprops','canclickdec'],
	cardmethods_ = {},
	cardmounted_ = function(){
		
	},
	cardComponent_ = {
		template:'#cardComponent_',
		props:cardprops_,
		methods:cardmethods_,
		mounted:cardmounted_
	};
var shoplistprops_ = [],
	shoplistmethods_ = {},
	shoplistmounted_ = function(){
		
	}
	shoplistComponent_ = {
		template:'#shoplistComponent_',
		props:shoplistprops_,
		methods:shoplistmethods_,
		mounted:shoplistmounted_,
	};
var components_ ={
		xxx:null,//因为是elementui，如果是脚手架通过npm安装的，得要在这里注册
		cardlist:cardComponent_,
		shoplist:shoplistComponent_,
	},
	created_ = function(){},
	datas = {
		winheight:'',
		pcormob:'',
		tabletitle:['名称','手机号','商品查看','创建日期'],
		tableprops:['nickname','phone','uid','date'],
		tableallcheck:0,
		tablelistdata:[
			{
				nickname:'张胜男',
				phone:8,
				uid:'个人商户',
				date:'2020-08-05',
				check:0,
			},
			{
				nickname:'利斯峰',
				phone:8,
				uid:'企业商户',
				date:'2020-09-05',
				check:0,
			},
			{
				nickname:'张胜男',
				phone:8,
				uid:'个人商户',
				date:'2020-08-05',
				check:0,
			},
			{
				nickname:'利斯峰',
				phone:8,
				uid:'企业商户',
				date:'2020-09-05',
				check:0,
			},
		],
		tablelistcheckitem:[],
		//fix窗口部分
		openfixwindow:false,
		fixtitle:'商品预览'
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
		//elementui表格选择方法，
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			this.tablelistcheckitem = val;
		},
		//监听
		listens:function(){
			var _this = this;
			setTimeout(function(){
				document.getElementById('app').style.visibility = 'visible'
			},150)//
			this.winheight = this.getwidthandheight('h')
			window.addEventListener('resize',function(){
				_this.winheight = _this.getwidthandheight('h')
			})
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