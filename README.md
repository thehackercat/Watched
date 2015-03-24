# overview
第三方豆瓣电影 for Windows 8.1 客户端

![Imgur](http://i.imgur.com/Uw8Kjbd.jpg)
![Imgur](http://i.imgur.com/EjqRgdF.jpg)

# todo
* more in resultSearch Page...
* more in itemDetail Page...if Douban allows.
	* 如果获取的海报是“偏高”的，那么在 section3 中可能显示并不很美观
	* 更多的功能，比如海报、预告片、在线观看等等
* icon and launch picture. (韩)
* Charms Bar Share based on screen shot of the movie item detail page. [Document](https://msdn.microsoft.com/en-us/library/windows/apps/windows.applicationmodel.datatransfer.datatransfermanager.showshareui.aspx)
* 影人页面
* 剧集页面（剧集使用 Trakt.tv 的 API 获取剧集更新，监测 kickass 的资源更新，在线播放等）
* 「看过」的更多功能
* *豆瓣在新版 API 中去掉了收藏电影的接口，科科*

# update
2015.03.24

* searchResult Page
	* 增加了更详细的内容显示
	* 本来想在每一个页面都加上搜索框，但是总不能实现，觉得 focus 上出了什么异怪的问题...

2015.03.21

* searchResult Page
	* 虽然最后并没有使用 Charms Bar 进行搜索，好像是微软把这个控件改掉了，显得非常的 low 逼...但是我们实现了哦耶！

2015.03.20

* itemDetail Page
	* 降伏 WinJS.UI.Rating
	* 凌晨：dirty 地解决了卡顿问题，解决方法包括
		* [Nicholas C. Zakas - Speed up your JavaScript, Part 4](http://www.nczonline.net/blog/2009/02/03/speed-up-your-javascript-part-4/)
		* `You API access rate limit has been exceeded. Contact api-master@douban.com if you want higher limit. `
	* 凌晨：海报推荐的一个小bug，现在返回的是被推荐最多的一张海报
	
		附图中剧照为[「美丽人生」被推荐最多的剧照](http://movie.douban.com/photos/photo/825925921/)
	![Imgur](http://i.imgur.com/GCl6i82.jpg)

2015.03.19

* itemDetail Page
	* 海报（豆瓣不向普通权限开放海报的接口，自己 hack 了一下）
	* 角儿 ListView

2015.03.18

* add itemDetail Page
	* 基本信息
	* CSS 文本两端对齐 [知乎](http://www.zhihu.com/question/19895400/answer/13383826)
* fix a bug: 首页点进去会错乱到口碑榜的其他电影

2015.03.11

* add 豆瓣电影口碑榜（豆瓣不向普通权限开放口碑榜接口, dirty hack）

2015.03.10

* groupDetail Page

2015.03.09

* groupedItems Page

