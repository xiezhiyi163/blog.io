var created_ = function(){
	
	},
	datas ={
		histlist:[]
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
		//清空历史记录并dom结构判断
		clearhistory:function(){
			this.histlist = []
			window.sessionStorage.setItem('his',[])
		},
		//搜索然后添加到local并写入，使得列表不为空
		sethistory:function(){
			if(!document.getElementById('searchkey').value){
				window.location.href = 'index_wshy_searchres.html'
				return;
			}
			var f = 0
			for(var i=0;i<this.histlist.length;i++){
				this.histlist[i] == document.getElementById('searchkey').value?f = 1:f = 0
			}
			if(f != 1){
				this.histlist.push(document.getElementById('searchkey').value)
			}
			if(this.histlist.length>10){
				this.histlist.splice(0,1);
			}
			window.sessionStorage.setItem('his',this.histlist);
			window.location.href = 'index_wshy_searchres.html'
		},
		//一开始拿到并写入历史记录
		gethistory:function(){
			window.sessionStorage.getItem('his')!=''?(
				window.sessionStorage.getItem('his').indexOf(',')!=-1?this.histlist = window.sessionStorage.getItem('his').split(','):
				this.histlist = [window.sessionStorage.getItem('his')]
			):''
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
		this.gethistory()
	},
	vue = new Vue({
		el:'#app',
		created:created_,
		data:datas,
		methods:methods_,
		mounted:mounted_
	})