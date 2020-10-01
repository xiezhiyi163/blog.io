var created_ = function(){},
	datas = {
		winheight:0,//窗口高
		leftnavwidth:280,//左边宽
		leftbigshow:true,
		selectcolor1:'',//yellow
		selectcolor2:'',//#ffa500
		navitems:[{//看作是路由
			title:'首页',
			icon:'home',//有其他可用其他代替
			route:'admin_wshy_home.html',//因为没有路由，这里可看作脚手架路由的路径和vue组件二合一，正确来讲脚手架那里是分开的
			hash:'home',
			children:[]
		},{
			title:'登录查看',
			icon:'sign-in',//有其他可用其他代替
			route:'admin_wshy_loginlist.html',
			hash:'loginlist',
			children:[]
		},{
			title:'每日推荐',
			icon:'lightbulb-o',//有其他可用其他代替
			route:'admin_wshy_shopshare.html',
			hash:'shopshare',
			children:[]
		},{
			title:'商家管理',
			icon:'archive',//有其他可用其他代替
			slide:false,
			children:[
				{
					title:'商品管理',
					icon:'null',//有其他可用其他代替
					route:'admin_wshy_shops.html',
					hash:'shops',
				},{
					title:'鉴黄管理',
					icon:'null',//有其他可用其他代替
					route:'admin_wshy_IdentifyTheYellow.html',
					hash:'IdentifyTheYellow',
				}
			]
		},{
			title:'商家入驻',
			icon:'user',//有其他可用其他代替
			route:'admin_wshy_joinslist.html',
			hash:'joinslist',
			children:[]
		},{
			title:'会员管理',
			icon:'credit-card',//有其他可用其他代替
			route:'admin_wshy_account.html',
			hash:'account',
			children:[]
		},{
			title:'投诉管理',
			icon:'pencil',//有其他可用其他代替
			route:'admin_wshy_remind.html',
			hash:'remind',
			children:[]
		},{
			title:'IP设定',
			icon:'desktop',//有其他可用其他代替
			route:'admin_wshy_ipset.html',
			hash:'ipset',
			children:[]
		},],
		title:'首页',
		routeind:0,//打开的哪个导航
		routeind0:0,//打开的哪个导航(点击有子路由的导航)
		routeind2:0,//打开的哪个导航（点击的子路由导航）
		routelink:'admin_wshy_home.html',
		showIPset:false,
		querys:'',
		pcormob:'',
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
		//setnavwidth
		setnavwidth:function(type){
			var _this = this;
			if(type == 280){
				this.leftnavwidth = 280;
				this.leftbigshow = true
				this.showIPset = false
			}else{
				this.leftnavwidth = 60;
				this.leftbigshow = false
				setTimeout(function() {
					_this.showIPset = true
				}, 150);
			}
		},
		//获取是否移动端
		mobandpc:function(){
			if(this.ifpc()=='win'){
				this.pcormob = 'win'
				this.setnavwidth(280)
			}else{
				this.pcormob = 'mob'
				this.setnavwidth(60)
			}
		},
		//设置使用pc还是移动端样式导航
		setleftnavwidth:function(){
			if(this.leftnavwidth == 280) {
				this.setnavwidth(0)
			}else{
				this.setnavwidth(280)
			}
		},
		/* --- */
		//sethash
		sethash:function(hashs,title,ind){
			window.location.hash = hashs+'__'+title+'__'+ind
		},
		gethash:function(){
			var _this = this;
			function s(l,a,b,b2,c){
				_this.routeind = b
				_this.routeind0 = b2
				_this.routeind2 = c
				_this.title = a
				_this.routelink = 'admin_wshy_'+l+'.html'
			}
			if(location.hash){
				if(location.hash.indexOf('__')!=-1){
					if(location.hash.split('#')[1].split('__').length==3){
						var m = location.hash.split('#')[1].split('__')
						var m1 = decodeURI(m[1])
						var m2 = m[2].indexOf('_')!=-1?m[2].split('_')[0]:m[2]
						var m20 = m[2].indexOf('_')!=-1?m[2]:-1
						var m3 = m[2].indexOf('_')!=-1?m[2]:-1
						s(m[0],m1,m2,m20,m3)
					}else{
						s('home','首页',0,0,-1)
					}
				}else{
					s('home','首页',0,0,-1)
				}
			}else{
				s('home','首页',0,0,-1)
			}
		},
		//隐藏二级导航展开
		hideslide:function(){
			for(var i=0;i<this.navitems.length;i++) {
				if(this.navitems[i].slide){
					this.navitems[i].slide = false
				}
			}
		},
		//监听
		listens:function(){
			var _this = this;
			setTimeout(function() {
				_this.selectcolor1 = 'yellow';
				_this.selectcolor2 = '#ffa500';
			}, 150);//
			document.getElementById('app').style.visibility = 'visible';//				
			this.winheight = this.getwidthandheight('h')
			window.addEventListener('resize',function(){
				_this.winheight = _this.getwidthandheight('h')
			})
		}
	},
	mounted_ = function(){
		this.mobandpc()
		this.listens()
		this.gethash()
	},
	/* appload */
	vue = new Vue({
		el:'#app',
		created:created_,
		data:datas,
		methods:methods_,
		mounted:mounted_,
	})