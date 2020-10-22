var cardavatar_created = function(){},
	cardavatar_data = {},
	cardavatar_methods = {},
	cardavatar_mounted = function(){
		
	},
	cardavatar_Vue = {
		template:'#cardavatar',
		created:cardavatar_created,
		data:function(){
			return cardavatar_data
		},
		methods:cardavatar_methods,
		mounted:cardavatar_mounted
	};
var cardspicvodeo_created = function(){},
	cardspicvodeo_data = {},
	cardspicvodeo_methods = {},
	cardspicvodeo_mounted = function(){
		
	},
	cardspicvodeo_Vue = {
		template:'#card_pic_video',
		created:cardspicvodeo_created,
		data:function(){
			return cardspicvodeo_data
		},
		methods:cardspicvodeo_methods,
		mounted:cardspicvodeo_mounted
	};
var created_ = function(){},
	components_ = {
		card:cardspicvodeo_Vue,
		avatarcard:cardavatar_Vue
	},
	datas = {
		winwidth:window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth,
		winheight:window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight,
		//lefttouchslide需要的字段
		ex:0,
		ey:0,
		ot:0,
		startX:0,
		startY:0,
		endX:0,
		endY:0,
		endingX:0,
		endingY:0,
	},
	methods_ = {
		//获取屏幕宽和高
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
		//滚动区域实例化
		setmescroll:function(){
			new MeScroll('cont')
		},
		//setpicheight
		setpicheight:function(){
			setTimeout(function(){
				var m = document.createElement('style');
				m.id = 'setpic'
				var h = document.getElementById('card_pic')?document.getElementById('card_pic').offsetWidth*0.6:document.getElementById('card_video').offsetWidth*0.6
				m.innerHTML = '.card_pic_video,.card_pica,.card_picb {min-height:'+h+'px}.card_pic1 {height:'+h+'px}.card_pic2 {height:'+h/2+'px}'
				document.getElementsByTagName('head')[0].appendChild(m)				
			},0)
		},
		resetpicheight:function(){
			setTimeout(function(){
				var h = document.getElementById('card_pic')?document.getElementById('card_pic').offsetWidth*0.6:document.getElementById('card_video').offsetWidth*0.6
				document.getElementById('setpic').innerHTML = '.card_pic_video,.card_pica,.card_picb {min-height:'+h+'px}.card_pic1 {height:'+h+'px}.card_pic2 {height:'+h/2+'px}'
			},0)
		},
		//设置左边导航的滚动
		leftscroll:function(event){
			var ewd = '';
			var lh = document.getElementById('left').offsetHeight
			var ot = document.getElementById('iconwrap').offsetTop
			var oh = document.getElementById('iconwrap').offsetHeight
			if(oh<lh-60){//总高度小于可视区的时候
				return;
			}
			if(event){//处于滚轮状态的时候
				if(!event.wheelDelta){
					ewd = event.detail/-3*120
				}else{
					ewd = event.wheelDelta
				}				
				document.getElementById('iconwrap').style.top = ot + ewd + 'px'
			}
			//滚轮或者窗口大小有变化的时候
			var ot2 = document.getElementById('iconwrap').offsetTop
			if(ot2>0){
				document.getElementById('iconwrap').style.top = '0px'
			}else if(Math.abs(ot2)>oh-lh+60){
				document.getElementById('iconwrap').style.top = -(oh-lh+60) + 'px'
			}				
		},
		//手势拖动左边导航
		lefttouchslide_0:function(){
			var ev = event||window.event
			this.lefttouchslide(ev,'m')
		},
		lefttouchslide_1:function(){
			var ev = event||window.event
			this.lefttouchslide(ev,'t')
		},
		lefttouchslide:function(event,type){
			var _this = this;
			var ev = event||window.event
			var lh = document.getElementById('left').offsetHeight			
			var oh = document.getElementById('iconwrap').offsetHeight//
			if(type=='m'){
				this.endX = (ev.pageX || ev.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft))-this.startX
				this.endY = (ev.pageY || ev.clientY + (document.body.scrollTop || document.documentElement.scrollTop))-this.startY
			}else{
				this.endX = (ev.touches[0].pageX || ev.touches[0].clientX + (document.body.scrollLeft || document.documentElement.scrollLeft))-this.startX
				this.endY = (ev.touches[0].pageY || ev.touches[0].clientY + (document.body.scrollTop || document.documentElement.scrollTop))-this.startY
			}
			document.getElementById('iconwrap').style.top = this.ot + this.endY+ 'px'
			var ot2 = document.getElementById('iconwrap').offsetTop
			if(ot2>0){
				document.getElementById('iconwrap').style.top = '0px'
			}else if(Math.abs(ot2)>oh-lh+60){
				document.getElementById('iconwrap').style.top = -(oh-lh+60) + 'px'
			}
			//下面的逻辑是为松手之后做准备的
			var fx = ''
			var fy = ''
			if(type=='m'){
				fx = (ev.pageX || ev.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft))
				fy = (ev.pageY || ev.clientY + (document.body.scrollTop || document.documentElement.scrollTop))
				this.endingX = fx-this.ex
				this.endingY = fy-this.ey
				this.ex = fx
				this.ey = fy
			}else{
				fx = (ev.touches[0].pageX || ev.touches[0].clientX + (document.body.scrollLeft || document.documentElement.scrollLeft))
				fy = (ev.touches[0].pageY || ev.touches[0].clientY + (document.body.scrollTop || document.documentElement.scrollTop))
				this.endingX = fx-this.ex
				this.endingY = fy-this.ey
				this.ex = fx
				this.ey = fy
			}
		},
		leftfreemode:function(num){
			var oh = document.getElementById('iconwrap').offsetHeight
			var lh = document.getElementById('left').offsetHeight			
			this.ot = document.getElementById('iconwrap').offsetTop
			document.getElementById('iconwrap').style.transition = '500ms'
			var ot2 = document.getElementById('iconwrap').offsetTop
			if(ot2==0){
				document.getElementById('iconwrap').style.transition = '0ms'
			}else if(Math.abs(ot2)==oh-lh+60){
				document.getElementById('iconwrap').style.transition = '0ms'
			}else{
				document.getElementById('iconwrap').style.top = this.ot + num+ 'px'
				setTimeout(function(){
					document.getElementById('iconwrap').style.transition = '0ms'
					ot2 = document.getElementById('iconwrap').offsetTop
					if(ot2>0){
						document.getElementById('iconwrap').style.top = '0px'
					}else if(Math.abs(ot2)>oh-lh+60){
						document.getElementById('iconwrap').style.top = -(oh-lh+60) + 'px'
					}
				},500)				
			}
		},
		//监听
		listens:function(){
			document.getElementById('app').style.visibility = 'visible'
			var _this = this;
			this.winwidth = this.getwidthandheight('w')
			this.winheight = this.getwidthandheight('h')
			this.setpicheight()
			this.setmescroll()//
			window.addEventListener('resize',function(){
				_this.winwidth = _this.getwidthandheight('w')
				_this.winheight = _this.getwidthandheight('h')
				_this.resetpicheight()
				_this.leftscroll()
			})//
			document.getElementById('left').addEventListener('mousewheel',function(){
				_this.leftscroll(event)
			})//
			document.getElementById('left').addEventListener('mousedown',function(){
				var ev = event||window.event;
				_this.startX = ev.pageX
				_this.startY = ev.pageY
				_this.ot = document.getElementById('iconwrap').offsetTop
				window.addEventListener('mousemove',_this.lefttouchslide_0)
			})
			window.addEventListener('mouseup',function(){
				_this.leftfreemode(_this.endingY*2)//往上就是-，反之则+
				window.removeEventListener('mousemove',_this.lefttouchslide_0)
			})//-----------------
			document.getElementById('left').addEventListener('touchstart',function(){
				var ev = event||window.event;
				_this.startX = ev.touches[0].pageX
				_this.startY = ev.touches[0].pageY
				_this.ot = document.getElementById('iconwrap').offsetTop
				window.addEventListener('touchmove',_this.lefttouchslide_1)
			})
			window.addEventListener('touchend',function(){
				_this.leftfreemode(_this.endingY*2)//往上就是-，反之则+
				window.removeEventListener('touchmove',_this.lefttouchslide_1)
			})
		}
	},
	mounted_ = function(){
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