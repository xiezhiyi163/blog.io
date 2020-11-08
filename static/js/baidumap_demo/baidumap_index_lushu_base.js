var lushu_template = 
	'<div>'+
	'	<div>'+
	'		<div id="lushu_allmap" style="width:100%"></div>'+
	'	</div>'+
	'</div>',
	lushu_created = function(){
		
	},
	lushu_data = {
		map:'',
		keys:''
	},
	lushu_methods = {
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
			var _this = this;
			this.map = new BMap.Map('lushu_allmap');
			this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
			this.map.enableScrollWheelZoom(true);
			window.start = "广州江夏";
			window.end = "广州人和";
			//三种驾车策略：最少时间，最短距离，避开高速
			window.routePolicy = [BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS];
			//传入不同的索引，点击事件调用以下api
			this.setlushu(0)
		},
		setlushu:function(i){
			var _this = this;
			this.map.clearOverlays(); //看情况进行清空			
			search(start,end,routePolicy[i]); //i是获取routePolicy策略的索引，调用下面的api即可
			function search(start,end,route){ 
				var driving = new BMap.DrivingRoute(_this.map, {renderOptions:{map: _this.map, autoViewport: true},policy: route});
				driving.search(start,end);
			}
		},
		//*监听
		appheight:function(){//app容器调整
			var h = window.innerHeight,
				bh = document.body.clientHeight,
				deh = document.documentElement.clientHeight,
				wh = h ? h : bh ? bh : deh;
				if(document.getElementById('lushu_allmap')){
					document.getElementById('lushu_allmap').style.height = wh - 60 +'px'
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
	lushu_mounted = function(){
		this.listens()
	},
	lushuVue = {
		template:lushu_template,
		created:lushu_created,
		data:function(){
			return lushu_data
		},
		methods:lushu_methods,
		mounted:lushu_mounted
	}