var created_ = function(){
		
	},
	datas = {
		//@danmudata
		num:0,
		danmudatas:[
			//time是模拟弹幕出现时间
			{text:'测试弹幕测试弹幕测试弹幕',id:'did1',type:'left',time:10},
			{text:'3355226',id:'did2',type:'left',time:20},
			{text:'3355226',id:'did3',type:'left',time:30},
			{text:'3355226',id:'did4',type:'left',time:40},
			{text:'3355226',id:'did5',type:'left',time:50},
			{text:'3355226',id:'did6',type:'left',time:60},
			{text:'3355226',id:'did7',type:'left',time:70},//
			{text:'3355226',id:'did2a',type:'left',time:520},
			{text:'3355226',id:'did3a',type:'left',time:530},
			{text:'3355226',id:'did4a',type:'left',time:540},
			{text:'3355226',id:'did5a',type:'left',time:550},
			{text:'3355226',id:'did6a',type:'left',time:560},
			{text:'3355226',id:'did7a',type:'left',time:570},//
			{text:'3355226',id:'did2b',type:'left',time:920},
			{text:'3355226',id:'did3b',type:'left',time:930},
			{text:'3355226',id:'did4b',type:'left',time:940},
			{text:'3355226',id:'did5b',type:'left',time:950},
			{text:'3355226',id:'did6b',type:'left',time:960},
			{text:'3355226',id:'did7b',type:'left',time:970},
			{text:'3355226',id:'tdid1',type:'top',time:10},
			{text:'测试弹幕',id:'tdid2',type:'top',time:20},
			{text:'3355226',id:'tdid3',type:'top',time:30},
			{text:'3355226',id:'tdid4',type:'top',time:40},
			{text:'3355226',id:'tdid5',type:'top',time:50},
			{text:'3355226',id:'tdid6',type:'top',time:60},
			{text:'3355226',id:'tdid7',type:'top',time:70},//
			{text:'3355226',id:'tdid2a',type:'top',time:520},
			{text:'3355226',id:'tdid3a',type:'top',time:530},
			{text:'3355226',id:'tdid4a',type:'top',time:540},
			{text:'3355226',id:'tdid5a',type:'top',time:550},
			{text:'3355226',id:'tdid6a',type:'top',time:560},
			{text:'3355226',id:'tdid7a',type:'top',time:570},//
			{text:'3355226',id:'tdid2b',type:'top',time:920},
			{text:'3355226',id:'tdid3b',type:'top',time:930},
			{text:'3355226',id:'tdid4b',type:'top',time:940},
			{text:'3355226',id:'tdid5b',type:'top',time:950},
			{text:'3355226',id:'tdid6b',type:'top',time:960},
			{text:'3355226',id:'tdid7b',type:'top',time:970},
			{text:'3355226',id:'bdid1',type:'bottom',time:10},
			{text:'3355226',id:'bdid2',type:'bottom',time:20},
			{text:'3355226',id:'bdid3',type:'bottom',time:30},
			{text:'3355226',id:'bdid4',type:'bottom',time:40},
			{text:'3355226',id:'bdid5',type:'bottom',time:50},
			{text:'3355226',id:'bdid6',type:'bottom',time:60},
			{text:'3355226',id:'bdid7',type:'bottom',time:70},//
			{text:'3355226',id:'bdid2a',type:'bottom',time:520},
			{text:'3355226',id:'bdid3a',type:'bottom',time:530},
			{text:'3355226',id:'bdid4a',type:'bottom',time:540},
			{text:'3355226',id:'bdid5a',type:'bottom',time:550},
			{text:'3355226',id:'bdid6a',type:'bottom',time:560},
			{text:'3355226',id:'bdid7a',type:'bottom',time:570},//
			{text:'3355226',id:'bdid2b',type:'bottom',time:920},
			{text:'3355226',id:'bdid3b',type:'bottom',time:930},
			{text:'3355226',id:'bdid4b',type:'bottom',time:940},
			{text:'3355226',id:'bdid5b',type:'bottom',time:950},
			{text:'3355226',id:'bdid6b',type:'bottom',time:960},
			{text:'3355226',id:'bdid7b',type:'bottom',time:970},
		]
	},
	methods_ = {
		// @danmu
		setdanmu:function(text,ids,type){//弹幕发射的逻辑
			var danmuwrap_ = document.getElementById('danmuwrap')
			//以25高的距离为基准
			if(type=='left')
			{
				(function(_this){
					var dom = document.createElement('span');
					dom.innerText = text;
					if(document.querySelectorAll('.dans').length!=0){
						//设置要添加的class索引
						var h = (document.getElementById('danmuwrap').offsetHeight-document.getElementById('danmuwrap').offsetHeight%25)/25
						var nums = 0
						for(var i = 0;i<h;i++){
							_this.num = i+1
							var lengths = document.querySelectorAll('.dan'+_this.num)
							if(lengths.length == 0){
								break;
							}
							if(lengths[lengths.length-1]){
								if(lengths[lengths.length-1].offsetLeft < danmuwrap_.offsetWidth-lengths[lengths.length-1].offsetWidth){
									nums = _this.num-1
									break;
								}
								nums = _this.num						
							}
						}//在判断有没有空位，紧接着判断有没有空的行，直到塞不下，依次判断追加
						var thenum = 0
						for(var i = 0;i<h;i++){
							thenum = i+1
							var lengths2 = document.querySelectorAll('.dan'+thenum)
							if(lengths2[lengths2.length-1]){
								if(lengths2[lengths2.length-1].offsetLeft < danmuwrap_.offsetWidth-lengths2[lengths2.length-1].offsetWidth){
									dom.id = ids;
									dom.className = 'dans dan'+_this.num;
									dom.style.top = (nums)*25+'px'
									danmuwrap_.appendChild(dom)
									dom.style.right = -dom.offsetWidth+'px'
									_this.num = 0		
									window['danmumove'+ids] = function(){
										_this.danmumoving_(ids,text.length)
									}
									window['danmumove'+ids]()						
									break;
								}					
							}else{
								dom.id = ids;
								dom.className = 'dans dan'+_this.num;
								dom.style.top = (nums)*25+'px'
								danmuwrap_.appendChild(dom)
								dom.style.right = -dom.offsetWidth+'px'
								_this.num = 0							
								window['danmumove'+ids] = function(){
									_this.danmumoving_(ids,text.length)
								}
								window['danmumove'+ids]()						
								break;
							}
						}
					}else{
						_this.num++;
						dom.id = ids;
						dom.className = 'dans dan'+_this.num;
						dom.style.top = (_this.num-1)*25+'px'
						danmuwrap_.appendChild(dom)
						dom.style.right = -dom.offsetWidth+10+'px'
						_this.num = 0
						window['danmumove'+ids] = function(){
							_this.danmumoving_(ids,text.length)
						}
						window['danmumove'+ids]()						
					}
				})(this)
			}
			else
			{
				(function(_this){
					var dom1 = document.createElement('p');
					dom1.innerText = text;
					if(document.querySelectorAll(type=='top'?'.tdans':'.bdans').length!=0){
						var h = ((document.getElementById('danmuwrap').offsetHeight-document.getElementById('danmuwrap').offsetHeight%25)/25)/2
						var nums = 0
						for(var i = 0;i<h;i++){
							_this.num = i+1
							var lengths = document.querySelectorAll((type=='top'?'.tdan':'.bdan')+_this.num)
							if(lengths.length == 0){
								nums = _this.num;
								break;
							}
						}
						var thenum1 = 0
						for(var i = 0;i<h;i++){
							thenum1++;
							var lengths1 = document.querySelectorAll((type=='top'?'.tdan':'.bdan')+thenum1);
							if(lengths1.length==0){
								dom1.id = ids;
								dom1.className = (type=='top'?'tdans tdan':'bdans bdan')+nums;
								if(type=='top'){
									dom1.style.top = (nums-1)*25+'px'								
								}else{
									dom1.style.bottom = (nums-1)*25+'px'
								}
								dom1.style.textAlign = 'center'
								danmuwrap_.appendChild(dom1);
								_this.num = 0;
								window['tbdanmu'+ids] = function(){
									_this.danmutophidden_(ids)
								}
								window['tbdanmu'+ids]()
								break;
							}
						}
					}else{
						_this.num++;
						dom1.id = ids;
						dom1.className = (type=='top'?'tdans tdan':'bdans bdan')+_this.num;
						if(type=='top'){
							dom1.style.top = (_this.num-1)*25+'px'								
						}else{
							dom1.style.bottom = (_this.num-1)*25+'px'
						}
						dom1.style.textAlign = 'center'
						danmuwrap_.appendChild(dom1);
						_this.num = 0;
						window['tbdanmu'+ids] = function(){
							_this.danmutophidden_(ids)
						}
						window['tbdanmu'+ids]()
					}
				})(this)
			}
		},
		danmutophidden_:function(ids){
			setTimeout(function(){
				document.getElementById(ids).remove()
			},5000)
		},
		danmumoving_:function(ids,textl){
			if(Number(document.getElementById(ids).style.right.split('px')[0]) > document.getElementById('danmuwrap').offsetWidth){
				document.getElementById(ids).remove()
				return;
			}
			document.getElementById(ids).style.right = Number(document.getElementById(ids).style.right.split('px')[0]) +2 + 'px'
			setTimeout(window['danmumove'+ids],5)
		},
		danmuload:function(){//遍历数据并进行弹幕加载，模拟哪一时刻出现的弹幕，真正使用的时候得要修改这里的逻辑，把time作为视频的哪一个时间位置进行发射弹幕
			var _this = this;
			var texts = '',types = '',ids = '',times = ''
			function m(texts2,types2,ids2,times2){
				setTimeout(function(){
					_this.setdanmu(texts2,ids2,types2)//发送弹幕和弹幕加载
				},times2)				
			}
			for(var i = 0;i<this.danmudatas.length;i++){
				texts = _this.danmudatas[i].text
				types = _this.danmudatas[i].type
				ids = _this.danmudatas[i].id
				times = _this.danmudatas[i].time;
				m(texts,types,ids,times)
			}
		}
	},
	mounted_ = function(){
		this.danmuload()
	},
	vue = new Vue({
		el:'#app',
		created:created_,
		data:datas,
		methods:methods_,
		mounted:mounted_
	})