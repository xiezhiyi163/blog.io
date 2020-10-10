var alldynamic = {
		created:function(){},
		components:{
			bigcards:allbigcardVue
		},
		datas:{
			mescroll2:true,
			tiplist:[0,0,0]
		},
		methods:{
			setmescroll:function(){
				var _this = this;
				new MeScroll('mescroll2')
				setTimeout(function() {
					_this.mescroll2 = false
				}, 500);
			}
		},
		mounted:function(){
			setTimeout(function(){//等数据出来完再运行这个
				document.getElementById('mescroll2').style.visibility = 'visible'
			},1)
			this.setmescroll()
		}
	},
	alldynamicVue = {
		template:'#all-dynamic',
		created:alldynamic.created,
		components:alldynamic.components,
		data:function(){
			return alldynamic.datas
		},
		methods:alldynamic.methods,
		mounted:alldynamic.mounted
	};//脚手架这些都是在vue文件里面的，只需要在路由那里进行懒加载引入即可使用，或者也可以当成组件封装，在某个vue文件里面引入
	//这里就相当于脚手架组件里面的export，然后引入组件，把export出来的对象赋给一个变量，相同的意思
