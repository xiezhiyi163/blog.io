var alluser = {
		created:function(){},
		components:{
			cards:allcardVue
		},
		datas:{
			mescroll3:true,
			tiplist:[0,0,0]
		},
		methods:{
			setmescroll:function(){
				var _this = this;
				new MeScroll('mescroll3')
				setTimeout(function() {
					_this.mescroll3 = false
				}, 500);
			}
		},
		mounted:function(){
			this.setmescroll()
		}
	},
	alluserVue = {
		template:'#all-user',
		created:alluser.created,
		components:alluser.components,
		data:function(){
			return alluser.datas
		},
		methods:alluser.methods,
		mounted:alluser.mounted
	};//脚手架这些都是在vue文件里面的，只需要在路由那里进行懒加载引入即可使用，或者也可以当成组件封装，在某个vue文件里面引入
	//这里就相当于脚手架组件里面的export，然后引入组件，把export出来的对象赋给一个变量，相同的意思
	