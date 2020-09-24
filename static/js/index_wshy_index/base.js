var created_ = function(){},
	datas = {
		swiperdata1:[
			'static/imgs/index_wshy_index/timg.jpg',
			'static/imgs/index_wshy_index/u=1125723489,855057867&fm=26&gp=0.jpg',
			'static/imgs/index_wshy_index/u=2050224734,3478897659&fm=26&gp=0.jpg'
		],
		swiperdata2:[
			'这里是消息1',
			'这里是消息2',
			'这里是消息3',
		],
		menuitems:[
			{'icon':'',dec:'每日推荐',color:'#7d00cc'},
			{'icon':'',dec:'货源广场',color:'#14b3ba'},
			{'icon':'',dec:'商家搜寻',color:''},
			{'icon':'',dec:'入驻申请',color:'darksalmon'},
		],
		items:objlist
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
		//跳去搜索页
		searchpage:function(){
			location.href = 'index_wshy_searchpage.html'
		},
		//swiper
		setswiper:function(){
			new Swiper('#swipers',{
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
			new Swiper('#swipers2',{
				speed:2000,
				autoplay: {
				    delay: 3000,
				    stopOnLastSlide: false,
				    disableOnInteraction: false,
				},
				loop:true,
				direction : 'vertical',
			})
		},
		setlist:function(){
			var m = []
			for(var i = 0; i<objlist.length;i++){
				m[i] = objlist[i]
			}
			/**/
			for(var k = 0; k < 15 ; k++ ) {
				for(var i = 0; i<m.length;i++){
					this.items.push(m[i])
				}				
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
		this.setswiper()
		this.setlist()
	},
	vue = new Vue({
		el:'#app',
		created:created_,
		data:datas,
		methods:methods_,
		mounted:mounted_
	})
