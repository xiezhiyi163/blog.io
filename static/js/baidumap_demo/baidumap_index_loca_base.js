var loca_template = ''+
	'<div>'+
	'	<div>'+
	'		<div class="loca-mapwrap">'+
	'			<div id="loca_allmap" style="width:100%"></div>'+
	'			<div class="loca-maplistwrap" :style="{height:winheight-240+\'px\'}">'+
	'				<div id="loca_div">'+
	'					<div class="loca-div" style="padding:20px">'+
	'						<div id="loca_maplist" :style="{minHeight:winheight-240+\'px\',width: \'260px\'}">'+
	'						</div>'+
	'					</div>'+
	'				</div>'+
	'				<span class="loca-span" @click="showorclosemaplist()">'+
	'					&equiv;'+
	'				</span>'+
	'			</div>'+
	'		</div>'+
	'		<div class="loca-searchWrap">'+
	'			<div class="loca-searchWrapin">'+
	'				<input v-model="keys" placeholder="输入省市区以便查询" @keypress="searchmap"/>'+
	'			</div>'+
	'			<button @click="searchmap()">搜索</button>'+
	'		</div>'+
	'	</div>'+
	'</div>',
	loca_created = function(){
		
	},
	loca_data = {
		winheight:'',
		map:'',
		local:'',
		keys:'',
	},
	loca_methods = {
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
			this.map = new BMap.Map("loca_allmap");          
			this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
			this.local = new BMap.LocalSearch(this.map, {
				renderOptions: {map: this.map, panel: "loca_maplist"}
			});
			this.local.search(this.keys||'广州');
			this.map.enableScrollWheelZoom(true);
		},
		searchmap:function(e){//搜索
			if(e){
				if(e.keyCode&&e.keyCode == 13){
					this.local.search(this.keys);
				}				
			}else{
				this.local.search(this.keys);
			}
		},
		showorclosemaplist:function(){
			if(document.getElementById('loca_div').offsetWidth!=0){
				document.getElementById('loca_div').style.width = '0px'
			}else{
				document.getElementById('loca_div').style.width = '300px'
			}
		},
		//*监听
		appheight:function(){//app容器调整
			var h = window.innerHeight,
				bh = document.body.clientHeight,
				deh = document.documentElement.clientHeight,
				wh = h ? h : bh ? bh : deh;
				this.winheight = wh;
				if(document.getElementById('loca_allmap')){
					document.getElementById('loca_allmap').style.height = wh - 120 +'px'
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
	loca_mounted = function(){
		this.listens()
	},
	locaVue = {
		template:loca_template,
		created:loca_created,
		data:function(){
			return loca_data
		},
		methods:loca_methods,
		mounted:loca_mounted
	}