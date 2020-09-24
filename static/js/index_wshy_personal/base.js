var created_ = function(){},
	datas = {
		pricesort:'up',
		starsort:'up',
		ifshowdel:false,
		editdeldone:true,
		items:[
			{
				imgs:'static/imgs/index_wshy_index/u=1125723489,855057867&fm=26&gp=0.jpg',
				dec:'标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题',
				price:'0.00',
				sevice:[1,2,3],
			},
			{
				imgs:'static/imgs/index_wshy_index/u=1125723489,855057867&fm=26&gp=0.jpg',
				dec:'分享图片',
				price:'0.00',
				sevice:[]
			},
			{
				imgs:'static/imgs/index_wshy_index/u=1125723489,855057867&fm=26&gp=0.jpg',
				dec:'分享图片',
				price:'0.00',
				sevice:[]
			},
			{
				imgs:'static/imgs/index_wshy_index/u=1125723489,855057867&fm=26&gp=0.jpg',
				dec:'分享图片',
				price:'0.00',
				sevice:[]
			},
			{
				imgs:'static/imgs/index_wshy_index/u=1125723489,855057867&fm=26&gp=0.jpg',
				dec:'分享图片',
				price:'0.00',
				sevice:[]
			},
			{
				imgs:'',
				dec:'标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题',
				price:'0.00',
				sevice:[]
			},
			{
				imgs:'',
				dec:'标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题',
				price:'0.00',
				sevice:[]
			},
			{
				imgs:'static/imgs/index_wshy_index/u=1125723489,855057867&fm=26&gp=0.jpg',
				dec:'分享图片',
				price:'0.00',
				sevice:[]
			},
			{
				imgs:'static/imgs/index_wshy_index/u=1125723489,855057867&fm=26&gp=0.jpg',
				dec:'分享图片',
				price:'0.00',
				sevice:[]
			},
			{
				imgs:'static/imgs/index_wshy_index/u=1125723489,855057867&fm=26&gp=0.jpg',
				dec:'分享图片',
				price:'0.00',
				sevice:[]
			},
			{
				imgs:'static/imgs/index_wshy_index/u=1125723489,855057867&fm=26&gp=0.jpg',
				dec:'分享图片',
				price:'0.00',
				sevice:[]
			},
			{
				imgs:'static/imgs/index_wshy_index/u=1125723489,855057867&fm=26&gp=0.jpg',
				dec:'标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题示例填充标题',
				price:'0.00',
				sevice:[1,2,3]
			},
		],
		allcheck:false,
		hasbeencheck:[]
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
		remrootFn:function(){
			var tw1 = this.getwidthandheight('w')
			document.querySelector('html').style.fontSize = 100*(tw1>750?750:tw1)/750 + 'px'
		},
		//按钮波纹
		waves:function() {//这里现在直接点击事件调用
			var duration = 750;

			// 样式string拼凑
			var forStyle = function(position) {
				var cssStr = '';
				for (var key in position) {
					if (position.hasOwnProperty(key)) cssStr += key + ':' + position[key] + ';';
				};
				return cssStr;
			}

			// 获取鼠标点击位置
			var forRect = function(target) {
				var position = {
						top: 0,
						left: 0
					},
					ele = document.documentElement;
				'undefined' != typeof target.getBoundingClientRect && (position = target.getBoundingClientRect());
				return {
					top: position.top + window.pageYOffset - ele.clientTop,
					left: position.left + window.pageXOffset - ele.clientLeft
				}
			}

			var show = function(event) {
				var pDiv = event.target,
					cDiv = document.createElement('div');
				pDiv.appendChild(cDiv);
				var rectObj = forRect(pDiv),
					_height = event.pageY - rectObj.top,
					_left = event.pageX - rectObj.left,
					_scale = 'scale(' + pDiv.clientWidth / 100 * 10 + ')';
				var position = {
					top: _height + 'px',
					left: _left + 'px'
				};
				cDiv.className = cDiv.className + " waves-animation",
					cDiv.setAttribute("style", forStyle(position)),
					position["-webkit-transform"] = _scale,
					position["-moz-transform"] = _scale,
					position["-ms-transform"] = _scale,
					position["-o-transform"] = _scale,
					position.transform = _scale,
					position.opacity = "1",
					position["-webkit-transition-duration"] = duration + "ms",
					position["-moz-transition-duration"] = duration + "ms",
					position["-o-transition-duration"] = duration + "ms",
					position["transition-duration"] = duration + "ms",
					position["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
					position["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
					position["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
					position["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
					cDiv.setAttribute("style", forStyle(position));
				var finishStyle = {
					opacity: 0,
					"-webkit-transition-duration": duration + "ms",
					"-moz-transition-duration": duration + "ms",
					"-o-transition-duration": duration + "ms",
					"transition-duration": duration + "ms",
					"-webkit-transform": _scale,
					"-moz-transform": _scale,
					"-ms-transform": _scale,
					"-o-transform": _scale,
					top: _height + "px",
					left: _left + "px",
				};
				setTimeout(function() {
					cDiv.setAttribute("style", forStyle(finishStyle));
					setTimeout(function() {
						pDiv.removeChild(cDiv);
					}, duration);
				}, 100)
			}
			return show
			//这里进行逐个按钮绑定
			// document.querySelector('.waves').addEventListener('click',function(e){
			// 	show(e);
			// },!1);
		},
		//切换
		change:function(type){
			if(type=='p'){
				this.pricechange()
			}else{
				this.starchange()
			}
		},
		changetype_:function(type){
			if(this[type] == 'up'){
				this[type] = 'down'
			}else{
				this[type] = 'up'
			}
		},
		pricechange:function(){
			this.changetype_('pricesort')
		},
		starchange:function(){
			this.changetype_('starsort')
		},
		//数据处理
		itemset:function(){
			var items = []
			for(var i=0;i<this.items.length;i++){
				var obj = {}
				obj.imgs = this.items[i].imgs?this.items[i].imgs:''
				obj.dec = this.items[i].dec?this.items[i].dec:''
				obj.price = this.items[i].price
				obj.sevice = this.items[i].sevice
				obj.checks = false
				items[i] = obj
			}
			this.items = items
		},
		//是否全选和反选
		ifallcheck:function(){
			if(this.allcheck){
				for(var i=0;i<this.items.length;i++){
					this.items[i].checks = false
					this.hasbeencheck=[]
				}
				this.allcheck = false
			}else{
				for(var i=0;i<this.items.length;i++){
					this.items[i].checks = true
					this.hasbeencheck.push(i)
				}
				this.allcheck = true
			}
		},
		//单个是否选中，并直接影响全选
		ifcheck:function(index){
			var flag = true,_this = this;
			function fn(ind){//检测是否存在被选择的，放到一个数组里面
				if(_this.items[ind].checks == false){
					if(_this.hasbeencheck.indexOf(ind)!=-1){
						_this.hasbeencheck.splice(_this.hasbeencheck.indexOf(ind),1)
					}
				}else{
					_this.hasbeencheck.push(ind)
				}
				console.log(_this.hasbeencheck)
			}
			//
			if(this.items[index].checks){//单个取消，直接取消
				this.items[index].checks = false					
				this.allcheck = false
			}else{//单个选中，先勾上，再判断有没有选中的，再取消
				this.items[index].checks = true
				this.allcheck = true
				for(var i=0;i<this.items.length;i++){
					if(this.items[i].checks == false){
						flag = false
					}
				}
				if(flag == false){
					this.allcheck = false
				}
			}
			fn(index)
		},
		//全部取消选择
		nocheck:function(ifdone){
			if(ifdone){
				/* 请求处理完再取消全部选择 */
				console.log(this.hasbeencheck)
				for(var i=0;i<this.items.length;i++){
					this.items[i].checks = false
				}
				this.allcheck = false
				this.hasbeencheck = []
			}else{
				for(var i=0;i<this.items.length;i++){
					this.items[i].checks = false
				}
				this.allcheck = false				
				this.hasbeencheck = []
			}
		},
		//mescroll
		mescrollFn:function(){
			new MeScroll('mesapp')
		},
		//监听
		listens:function(this_){
			this_.remrootFn()
			window.addEventListener('resize',function(){
				this_.remrootFn()
			})
		}
	},
	mounted_ = function(){
		document.getElementById('app').style.visibility = 'visible'
		this.listens(this)
		this.mescrollFn()
		this.itemset()
	},
	vue = new Vue({
		el:'#app',
		created:created_,
		data:datas,
		methods:methods_,
		mounted:mounted_
	})
