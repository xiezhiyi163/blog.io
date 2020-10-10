var allcomment = {
		created:function(){},
		components:{
			cards:allcardVue
		},
		datas:{
			mescroll1:true,
			tiplist:[0,0,0]
		},
		methods:{
			setmescroll:function(){
				var _this = this;
				new MeScroll('mescroll1')
				setTimeout(function() {
					_this.mescroll1 = false
				}, 500);
			},
			shopchatinfo:function(){
				if(document.getElementById('mescroll1').children[0].offsetHeight>0){
					return;
				}
				this.$emit('openchat')
			}
		},
		mounted:function(){
			this.setmescroll()
		}
	},
	allcommentVue = {
		template:'#all-comment',
		created:allcomment.created,
		components:allcomment.components,
		data(){
			return allcomment.datas
		},
		methods:allcomment.methods,
		mounted:allcomment.mounted
	};//脚手架这些都是在vue文件里面的，只需要在路由那里进行懒加载引入即可使用，或者也可以当成组件封装，在某个vue文件里面引入
	//这里就相当于脚手架组件里面的export，然后引入组件，把export出来的对象赋给一个变量，相同的意思
	