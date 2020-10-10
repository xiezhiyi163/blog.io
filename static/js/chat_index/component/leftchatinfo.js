var leftchatinfo = {
		created:function(){},
		props:["type"],
		components:{
			filecards:allfilecardVue
		},
		datas:{
			getsign:'',
		},
		methods:{
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
		},
		mounted:function(){
			this.getsign = this.ifpc()
		}
	},
	leftchatinfoVue = {
		template:'#leftchatinfo',
		created:leftchatinfo.created,
		props:leftchatinfo.props,
		components:leftchatinfo.components,
		data:function(){
			return leftchatinfo.datas
		},
		methods:leftchatinfo.methods,
		mounted:leftchatinfo.mounted
	};//脚手架这些都是在vue文件里面的，只需要在路由那里进行懒加载引入即可使用，或者也可以当成组件封装，在某个vue文件里面引入
	//这里就相当于脚手架组件里面的export，然后引入组件，把export出来的对象赋给一个变量，相同的意思
