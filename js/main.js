//配置页面加载模块参数
require.config({
	//添加加载异步加载CSS的插件
	map:{
		'*':{
			'css':'css.min'
		}
	},
	//配置Javascript文件映射路径
	paths: {
		"modernizr"			:"modernizr.custom",
		//"Framework7"		:"framework7.min",
		//"jquery"			:"jquery-1.11.1.min",
		"jay"				:"jay"
	},
	shim: {//模块依赖关系 demo
		//'swiperscrollbar': {deps:['swiper']},
		//'swiper': {deps: ['jquery']},
		//'jay'  : {deps: ['swiper','swiperscrollbar']}
	}
});
//加载对应css模块
require([
	"css!http://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min",
	"css!../css/style2"
]);
//配置页面加载模块
require(['modernizr'],function(modernizr) {
	!Modernizr.cssanimations?window.location="np.html":'';
});

require(['jay'], 
	function (jay){
		//console.log(jay.init)
		jay.init;
		jay.mainView;
		var $$ = jay.$7;
	
		console.log(jay.$7)
		console.log($$("body").html())
		console.log(jay.mainView)
	}
);



//加载团队内每个人的开发模块
/*
require(["js_init_PowerBrother","js_init_rose","js_init_bill"],function(力哥の爱,露丝,比尔) {
	//执行力哥的方法
	力哥の爱.init();
	力哥の爱.afterinit();
	//执行露丝的方法
	露丝.init();
	//执行比尔的方法
	比尔.init();
});

*/

