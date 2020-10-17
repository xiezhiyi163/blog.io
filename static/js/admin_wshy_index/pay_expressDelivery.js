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
var infochoosewrapVuedata = {
		paytype:'',
		mailtype:'',
	},
	infochoosewrapVuemethods = {
		choosetype:function(type){
			this.$emit('choose',type)
		}
	},
	infochoosewrapVuemounted = function(){
		
	},
	infochoosewrapVue = {
		template:'#infochoosewrap',
		data:function(){
			return infochoosewrapVuedata
		},
		methods:infochoosewrapVuemethods,
		mounted:infochoosewrapVuemounted
	};
var created_ = function(){},
	components_ = {
		cardlist:cardComponent_,
		infochoose:infochoosewrapVue
	},
	datas = {
		getsign:'',
		winheight:'',
		winwidth:'',
		tabtype:'pay',
		tabchooseflag:false,//mob标识
		tableprops:{
			pay:['date','price','fnick','nick','fuid','uid'],
			mail:['sdate','gdate','fnick','nick','fuid','uid'],
		},
		tabletitle:{
			pay:['日期','价格','卖家','买家'],
			mail:['发货日期','收货日期','发货人','收货人']
		},
		listdata:{
			pay:[
				{
					date:'20200303',
					price:650,
					fuid:'u62526369',
					uid:'u6252636969',
					fnick:'张三',
					nick:'客户'
				},
				{
					date:'20200303',
					price:650,
					fuid:'u62526369',
					uid:'u6252636969',
					fnick:'张三',
					nick:'客户'
				},
				{
					date:'20200303',
					price:650,
					fuid:'u62526369',
					uid:'u6252636969',
					fnick:'张三',
					nick:'客户'
				},
				{
					date:'20200303',
					price:650,
					fuid:'u62526369',
					uid:'u6252636969',
					fnick:'张三',
					nick:'客户'
				},
			],
			mail:[
				{
					sdate:'20200303',
					gdate:'20200609',
					fuid:'u62526369',
					uid:'u6252636969',
					fnick:'张三',
					nick:'客户'
				},
				{
					sdate:'20200303',
					gdate:'20200609',
					fuid:'u62526369',
					uid:'u6252636969',
					fnick:'张三',
					nick:'客户'
				},
				{
					sdate:'20200303',
					gdate:'20200609',
					fuid:'u62526369',
					uid:'u6252636969',
					fnick:'张三',
					nick:'客户'
				},
				{
					sdate:'20200303',
					gdate:'20200609',
					fuid:'u62526369',
					uid:'u6252636969',
					fnick:'张三',
					nick:'客户'
				},
			]
		}
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
		//获取标识
		getsign_:function(){
			this.getsign = this.ifpc()
		},
		//子组件选中之后传过来触发更新数据
		typechoose:function(type){
			if(this.getsign == 'win'){
				console.log('数据已更新')
			}else{
				this.tabchooseflag = false
				this.tabtype = type.t
				console.log('数据已更新')
			}			
		},
		//滚动容器滑动到顶部
		scrolltop:function(){
			document.querySelector('.tablescrollwrap').scrollTop = 0
		},
		//监听
		listens:function(){
			document.getElementById('app').style.visibility = 'visible'
			var _this = this;
			this.winheight = this.getwidthandheight('h')
			this.winwidth = this.getwidthandheight('w')
			window.addEventListener('resize',function(){
				_this.winheight = _this.getwidthandheight('h')
				_this.winwidth = _this.getwidthandheight('w')
			})
		}
	},
	mounted_ = function(){
		this.getsign_()
		this.listens()
	},
	vue = new Vue({
		el:'#app',
		created:created_,
		components:components_,
		data:datas,
		methods:methods_,
		mounted:mounted_
	})