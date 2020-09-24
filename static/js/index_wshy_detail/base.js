var created_ = function(){},
	datas = {
		swiperdata:[
			'static/imgs/index_wshy_index/timg.jpg',
			'static/imgs/index_wshy_index/u=1125723489,855057867&fm=26&gp=0.jpg',
			'static/imgs/index_wshy_index/u=2050224734,3478897659&fm=26&gp=0.jpg'
		],
		typeselect:0,//规格选择
		changetype:1,//图文或者评论切换
		dicuitem:[0],
		winheight:0,
		showpayboxani:'',//遮罩动画
		showpayboxani2:'',//遮罩动画
		paytext:1,//购买或者加入购物车
		shopnum:0,
		shoptype:1,//1，最多100，2无限大
	},
	methods_ = {
		test:function(){
			console.log(100)
		},
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
		waves:function() {
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
		},
		wavesclick:function(){
			this.waves()(event)
		},
		//打开或关闭弹出购买遮罩层
		showorhidepaybox:function(){
			this.showpayboxani.indexOf('showpay')!=-1?
			this.showpayboxani = 'closepaybox 0.3s forwards':
			this.showpayboxani = 'showpaybox 0.3s forwards';
			this.showpayboxani2.indexOf('showpay')!=-1?
			this.showpayboxani2 = 'closepaybox2 0.3s forwards':
			this.showpayboxani2 = 'showpaybox2 0.3s forwards';
		},
		//数量加减操作
		numadd:function(){
			this.shopnum++;
			if(this.shoptype == 1){
				this.shopnum>100?this.shopnum = 100 : ''
			}
		},
		numdown:function(){
			this.shopnum--
			if(this.shopnum < 0){
				this.shopnum = 0
			}
		},
		numinput:function(){
			if(this.shoptype == 1){
				this.shopnum>100?this.shopnum = 100 : ''
			}
		},
		//购买或加入购物车操作
		wavesclick2:function(type){
			var _this = this;
			this.waves()(event)
			if(type=='b'){
				setTimeout(function(){
					_this.showorhidepaybox()
				},500)				
			}else{
				setTimeout(function(){
					_this.showorhidepaybox()
				},500)				
			}
		},
		//swiper
		setswiper:function(){
			new Swiper('#swiperShop',{
				pagination: {
				    el: '.swiper-pagination',
				},
				lazy: {
				    loadPrevNext: false,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				autoplay: {
				    delay: 3000,
				    stopOnLastSlide: false,
				    disableOnInteraction: false,
				},
				loop:true
			})
		},
		//监听
		listens:function(this_){
			this_.remrootFn()
			this_.winheight = this_.getwidthandheight('h')
			window.addEventListener('resize',function(){
				this_.remrootFn()
				this_.winheight = this_.getwidthandheight('h')
			})
		}
	},
	watch_ = {//shopnum,是监听的数据，必须是监听的数据，监听并回调函数
		'shopnum':function(){
			// this.shopnum>100?this.shopnum = 100:''
		}
	},
	mounted_ = function(){
		document.getElementById('app').style.visibility = 'visible'
		this.listens(this)
		this.setswiper()
	},
	vue = new Vue({
		el:'#app',
		created:created_,
		data:datas,
		methods:methods_,
		watch:watch_,
		mounted:mounted_
	})