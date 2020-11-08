var draw_template = 
	'<div>'+
	'	<div>'+
	'		<div id="draw_allmap" style="width:100%"></div>'+
	'	</div>'+
	'</div>',
	draw_created = function(){
		
	},
	draw_data = {
		map:'',
		keys:''
	},
	draw_methods = {
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
			this.map = new BMapGL.Map("draw_allmap");          
			this.map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);
			this.map.enableScrollWheelZoom(true);
			// 绘制面
			var polygonarr = {};
			polygonarr['polygon_data'] = [
			    new BMapGL.Point(116.387112, 39.920977),
			    new BMapGL.Point(116.385243, 39.913063),
			    new BMapGL.Point(116.394226, 39.917988),
			    new BMapGL.Point(116.401772, 39.921364),
			    new BMapGL.Point(116.41248, 39.927893)
			];
			var polygonObj = {};
			polygonObj['polygon_data_d'] = new BMapGL.Polygon(polygonarr['polygon_data'], {
			    strokeColor: 'blue',
			    strokeWeight: 2,
			    strokeOpacity: 0.5
			});
			this.map.addOverlay(polygonObj['polygon_data_d']);			
			
			function openEdit() {
			    polygonObj['polygon_data_d'].enableEditing();
			}
			function closeEdit() {
			    polygonObj['polygon_data_d'].disableEditing();
			}
			// 绘制线
			var linearrObj = {};
			linearrObj['linearr_data'] = [
			    new BMapGL.Point(116.399, 39.910),
			    new BMapGL.Point(116.405, 39.920),
			    new BMapGL.Point(116.423493, 39.907445)
			]
			var polylineObj = {};//通过遍历写入
			polylineObj['linearr_data_d'] = new BMapGL.Polyline(linearrObj['linearr_data'], {
			    strokeColor: 'blue',
			    strokeWeight: 2,
			    strokeOpacity: 0.5
			});
			this.map.addOverlay(polylineObj['linearr_data_d']);
			
			function openEdit1() {
			    polylineObj['linearr_d'].enableEditing();
			}
			function closeEdit1() {
			    polylineObj['linearr_d'].disableEditing();
			}
			// 绘制圆
			var circlearrObj = {};
			circlearrObj['circlearr_data'] = {s:116.404,e:39.915,r:500,color:'blue',strokeWeight:2,strokeOpacity:0.5};
			var circleObj = {};
			circleObj['circlearr_data_d'] = new BMapGL.Circle(
				new BMapGL.Point(
					circlearrObj['circlearr_data'].s, 
					circlearrObj['circlearr_data'].e
				), 
				circlearrObj['circlearr_data'].r, 
				{
					strokeColor: circlearrObj['circlearr_data'].color,
					strokeWeight: circlearrObj['circlearr_data'].strokeWeight,
					strokeOpacity: circlearrObj['circlearr_data'].strokeOpacity
				}
			);
			this.map.addOverlay(circleObj['circlearr_data_d']);
			
			function openEdit2() {
			    circleObj['circlearr_data_d'].enableEditing();
			}
			function closeEdit2() {
			    circleObj['circlearr_data_d'].disableEditing();
			}
		},
		//*监听
		appheight:function(){//app容器调整
			var h = window.innerHeight,
			bh = document.body.clientHeight,
			deh = document.documentElement.clientHeight,
			wh = h ? h : bh ? bh : deh;
			if(document.getElementById('draw_allmap')){
				document.getElementById('draw_allmap').style.height = wh - 60 +'px'
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
	draw_mounted = function(){
		this.listens()
	},
	drawVue = {
		template:draw_template,
		created:draw_created,
		data:function(){
			return draw_data
		},
		methods:draw_methods,
		mounted:draw_mounted
	}