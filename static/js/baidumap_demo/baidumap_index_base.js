var created_ = function(){
		
	},
	components_ = {
		normalmap:normalVue,//这里相当于脚手架把vue文件引入进来然后在这里注册
		locamap:locaVue,//这里相当于脚手架把vue文件引入进来然后在这里注册
		lushumap:lushuVue,//这里相当于脚手架把vue文件引入进来然后在这里注册
		drawmap:drawVue//这里相当于脚手架把vue文件引入进来然后在这里注册
	},
	datas = {
		winheight:0,
		itemlist:[
			{
				title:'常规地图预览',
				path:'normalmap'
			},
			{
				title:'可查询省市区和旅游地点的地图预览',
				path:'locamap'
			},
			{
				title:'可进行路线规划查询的地图预览',
				path:'lushumap'//有clearOverlays清空方法
			},
			{
				title:'可进行绘图的地图预览',
				path:'drawmap'
			},			
		],
		patharrForView:[],
		thepath:''
	},
	methods_ = {
		//拿到设备标识和屏幕宽高,rem适配
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
		autoload:function(){
			this.patharrForView[0] = 'normalmap'//一开始默认启动第一个并显示
			this.thepath = 'normalmap'
		},
		//监听
		listens:function(){
			var _this = this;
			document.getElementById('app').style.visibility = 'visible';
			_this.winheight = _this.getwidthandheight('h')
			window.addEventListener('resize',function(){
				_this.winheight = _this.getwidthandheight('h')
			})
		}
	},
	mounted_ = function(){
		this.listens()
		this.autoload()
	},
	vue = new Vue({
		el:'#app',
		created:created_,
		components:components_,
		data:datas,
		methods:methods_,
		mounted:mounted_
	})