var created_ = function(){},
	components_ = {
		nulls:{template:' '},
		allcommentVue,
		alldynamicVue,
		alluserVue,
		leftchatinfo:leftchatinfoVue,
		rightchatinfo:rightchatinfoVue,
		filecards:allfilecardVue,
	},
	datas = {//vue初始数据
		getsign:'',
		winheight:'',
		winwidth:'',
		setnav:0,
		listcom1:'nulls',
		listcom2:'nulls',
		listcom3:'nulls',
		//
		firstshade:0,
		fixleft:'-7000px',//移动端的消息窗口移动高度
		shadeshow:false,
		fileboxheight:'0px',
		chatlist:[
			{type:'text',content:155522663344,link:'',from:'other'},
			{type:'thefile',content:'',link:'/',from:'me'},
		]
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
		//设置组件显示
		setcomShow:function(com_,num_,_num){
			var _this = this
			if(num_ == _num){
				if(this[num_] == 'nulls'){
					_this[num_] = com_
				}else{
					return;
				}
			}
		},
		//初始化右边可滚动下拉插件
		chatboxmescroll:function(){
			setTimeout(function() {
				new MeScroll('chatmescroll',{
					down:{
						textInOffset:'下拉加载',
						textOutOffset:'释放加载'
					}
				})
				new MeScroll('filebox')
			}, 0);			
		},
		//移动端打开聊天窗口
		openchat:function(){
			this.firstshade = 1
			if(this.getsign!='win'){
				this.fixleft = '0px'
			}			
		},
		//右边的选择图片嵌入文本域模拟演示
		getimg:function(){
			var _this = this;
			this.shadeshow = true//
			var imgdom = document.createElement('img');
			imgdom.style.display = 'inline-block'
			imgdom.style.minWidth = 30+'px'
			imgdom.style.minHeight = 30+'px'
			imgdom.style.maxHeight = 60+'px'
			imgdom.id = '_'+new Date().getTime()
			document.getElementById('cont').appendChild(imgdom)
			var img = new Image()
			img.src = 'static/imgs/chat_index/timg.jpg'
			img.onload = function(){
				setTimeout(function(){
					imgdom.src = img.src
					_this.shadeshow = false
				},500)				
			}
		},
		//右边点击弹出文件助手
		showfilebox:function(){
			this.fileboxheight == '100%'?this.fileboxheight = '0%':this.fileboxheight = '100%'
		},
		//监听
		listens:function(){
			var _this = this;
			document.getElementById('app').style.visibility = 'visible'
			this.winheight = this.getwidthandheight('h')
			this.winwidth = this.getwidthandheight('w')
			window.addEventListener('resize',function(){
				_this.winheight = _this.getwidthandheight('h')
				_this.winwidth = _this.getwidthandheight('w')
			})
		}
	},
	mounted_ = function(){
		this.listens()
		this.getsign = this.ifpc()
		//初始化点击某一个
		this.setnav = 1
		this.setcomShow('allcommentVue','listcom1','listcom1')
		//启动右边滚动插件
		this.chatboxmescroll()
	},
	vue = new Vue({
		el:'#app',
		created:created_,
		components:components_,
		data:datas,
		methods:methods_,
		mounted:mounted_
	})
	/*
		props:['type']
		props: {
		    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
		    propA: Number,
		    // 多个可能的类型
		    propB: [String, Number],
		    // 必填的字符串
		    propC: {
		      type: String,
		      required: true
		    },
		    // 带有默认值的数字
		    propD: {
		      type: Number,
		      default: 100
		    },
		    // 带有默认值的对象
		    propE: {
		      type: Object,
		      // 对象或数组默认值必须从一个工厂函数获取
		      default: function () {
		        return { message: 'hello' }
		      }
		    },
		    // 自定义验证函数
		    propF: {
		      validator: function (value) {
		        // 这个值必须匹配下列字符串中的一个
		        return ['success', 'warning', 'danger'].indexOf(value) !== -1
		      }
		    }
		}
	 */
	