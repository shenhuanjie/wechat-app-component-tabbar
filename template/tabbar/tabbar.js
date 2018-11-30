//初始化数据
function tabbarinit() {
	return [{
			"current": 0,
			"pagePath": "/pages/index/index",
			"iconPath": "/images/home.png",
			"selectedIconPath": "/images/home_on.png",
			"text": "主页"
		},
		{
			"current": 0,
			"pagePath": "/pages/news/news",
			"iconPath": "/images/message.png",
			"selectedIconPath": "/images/message_on.png",
			"text": "资讯"

		},
		{
			"current": 0,
			"pagePath": "/pages/category/category",
			"iconPath": "/images/category.png",
			"selectedIconPath": "/images/category_on.png",
			"text": "分类"
		},
		{
			"current": 0,
			"pagePath": "/pages/buy/buy",
			"iconPath": "/images/buy.png",
			"selectedIconPath": "/images/buy_on.png",
			"text": "购物"
		}
	]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
	var that = target;
	var bindData = {};
	var otabbar = tabbarinit();
	otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath'] //换当前的icon
	otabbar[id]['current'] = 1;
	bindData[bindName] = otabbar
	that.setData({
		bindData
	});
}

module.exports = {
	tabbar: tabbarmain
}
