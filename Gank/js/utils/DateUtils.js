const DateUtils = {
	//change the date like '2016-07-18' into '2015/07/18'
	convertData(data: string) { //参数类型居然是在后面,这个让java有点不习惯
		//用正则来替换
		return data.replace(new RegExp('-', 'g'), '/');
	},

	//获取当前系统时间
	getCurrentDate() { //MM表示月份 mm表示分钟
		return new Date().Format('yyyy/MM/dd');
	},

	//对时间转化计算
	extendDate() {
		//月(M)、 日(d)、 小时(h)、 分(m)、 秒(s)、 季度(q) 可以用 1 - 2 个占位符，
		// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)

		// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
		// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
		Date.prototype.Format = function(fmt) {
			var o = {
				'M+': this.getMonth() + 1, //月份获取到的是从0开始的
				'd+': this.getDate(), //这里主要是适配before API
				'h+': this.getHours(), //时
				'm+': this.getMinutes(), //分
				's+': this.getSeconds(), //秒
				'q+': Math.floor((this.getMonth() + 3) / 3), //季度
				'S': this.getMilliSeconds(), //毫秒
			};

			//这边两个正则,有点难看,应该是转换年份
			if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
			for (var k in o) {
				if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
			}
			return fmt;
		};
	}
}

DateUtils.extendDate();

module.exports = DateUtils;