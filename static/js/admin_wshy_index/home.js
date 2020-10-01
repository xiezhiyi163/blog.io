var created_ = function(){},
	datas = {
		pcormob:'',
		echartinit:'',
		options:{
			animation:false,
			//有前缀x_的表示不启用的
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985'
					}
				}
			},
			legend: {
				left:'35',
				data: ['联盟广告', '直接访问', '搜索引擎']
			},
			x_toolbox: {
				feature: {
					saveAsImage: {}
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [
				{
					type: 'category',
					boundaryGap: false,
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					name: '联盟广告',
					type: 'line',
					stack: '总量',
					areaStyle: {
						color:'coral'
					},
					data: [220, 182, 191, 234, 290, 330, 310]
				},
				{
					name: '直接访问',
					type: 'line',
					stack: '总量',
					areaStyle: {
						color:'pink'
					},
					data: [320, 332, 301, 334, 390, 330, 320]
				},
				{
					name: '搜索引擎',
					type: 'line',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'top'
						}
					},
					areaStyle: {
						color:'lightsteelblue'
					},
					data: [820, 932, 901, 934, 1290, 1330, 1320]
				}
			]
		},
		echartresizeflag:true,
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
		//setpcormob
		setpcormob:function(fn){
			if(this.ifpc()=='win'){
				this.pcormob = 'pc'
			}else{
				this.pcormob = 'mob'
			}
			fn()
		},
		//
		loadcharts:function(){
			var _this = this;
			setTimeout(function() {
				if(document.getElementById('echarts')){
					_this.echartinit = echarts.init(document.getElementById('echarts'));
					_this.echartinit.setOption(_this.options)
					setTimeout(function() {
						_this.options.animation = !_this.options.animation
						_this.echartinit.setOption(_this.options)
					}, 0);				
				}else{
					_this.echartinit = echarts.init(document.getElementById('echarts2'));
					_this.echartinit.setOption(_this.options)
					setTimeout(function() {
						_this.options.animation = !_this.options.animation
						_this.echartinit.setOption(_this.options)
					}, 0);				
				}			
			}, 150);
		},
		//监听
		listens:function(){
			var _this = this;
			document.getElementById('app').style.visibility = 'visible';//
			window.addEventListener('resize',function(){
				//echarts响应式重置尺寸逻辑
				if(_this.echartinit!=''){					
					if(_this.echartresizeflag == false){
						return
					}else if (_this.echartresizeflag == true){
						_this.echartresizeflag = !_this.echartresizeflag
						setTimeout(function() {
							_this.echartresizeflag = !_this.echartresizeflag
							_this.echartinit.resize()
						}, 150);
					}				
				}
			})
		}
	},
	mounted_ = function(){
		this.setpcormob(this.loadcharts)		
		this.listens()
	},
	/* loadapp */
	vue = new Vue({
		el:'#app',
		created:created_,
		data:datas,
		methods:methods_,
		mounted:mounted_,
	})
