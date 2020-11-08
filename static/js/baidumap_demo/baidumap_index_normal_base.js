var normal_template = 
	'<div>'+
	'	<div>'+
	'		<div id="allmap" style="width:100%"></div>'+
	'	</div>'+
	'</div>',
	normal_created = function(){
		
	},
	normal_data = {
		map:'',
		local:'',
		keys:''
	},
	normal_methods = {
		// *百度地图API功能
		getloaction:function(){//获取当前位置
			var _this = this,
				map = new BMap.Map();
			new BMap.Geolocation().getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					console.log(r.address.city)//r.point.lng,r.point.lat
				}
				else {
					alert('failed'+this.getStatus());
				}
			},{enableHighAccuracy: true})//关于状态码						
			//BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
			//BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
			//BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
			//BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
			//BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
			//BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
			//BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
			//BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
			//BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)						
		},
		baidumaps:function(){//地图定位位置
			window.BMap_loadScriptTime = (new Date).getTime();//						
			this.map = new BMap.Map("allmap");          
			this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
			this.local = new BMap.LocalSearch(this.map, {
				renderOptions: {map: this.map, panel: "r-result"}
			});
			// local.search(this.keys||'广州');
			this.map.enableScrollWheelZoom(true);
		},
		//*监听
		appheight:function(){//app容器调整
			var h = window.innerHeight,
				bh = document.body.clientHeight,
				deh = document.documentElement.clientHeight,
				wh = h ? h : bh ? bh : deh;
				if(document.getElementById('allmap')){
					document.getElementById('allmap').style.height = wh - 60 +'px'
				}			
		},
		listens:function(){
			this.appheight()//app容器调整
			var _this = this// 百度地图API功能
			_this.getloaction()
			_this.baidumaps()
			window.addEventListener('resize',function(){
				_this.appheight()//app容器调整
			})							
		}		
	},
	normal_mounted = function(){
		this.listens()
	},
	normalVue = {
		template:normal_template,
		created:normal_created,
		data:function(){
			return normal_data
		},
		methods:normal_methods,
		mounted:normal_mounted
	}