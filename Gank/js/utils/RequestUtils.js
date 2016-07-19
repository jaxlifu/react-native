import DateUtils from './DateUtils'

var MAX_TIME_OUT = 10 * 1000;

const RequestUtils = {
	API_DATE: 'http://gank.io/api/day/history',
	API_DAILY: 'http://gank.io/api/day/',

	getDateArray() {
		return fetchWithTimeout(MAX_TIME_OUT, this.API_DATE).then(respone => respone.json());
	},

	async getContents(dateArray) {
		const proc = (date) => {
			const url = DataUtils.convertDate(this.API_DAILY + date);

			return fetchWithTimeout(MAX_TIME_OUT, url)
				.then(respone => respone.json())
				.then(responeData => {
					responeData.date = date;
					return responeData;
				});
		}

		return await Promise.all(dateArray.map(proc)); //all 同时执行,全部成功才算ok then里边的参数是每一个promise结果的有序集
	}
}

//设置fetch的超时时间
const fetchWithTimeout = (timeout, ...args) => {
	// race all, 都是并行执行promise，前者的状态由最先改变的那个决定。all则是全部通过才算成功
	// race并行执行多个promise，结果由最先结束的Promise决定
	return Promise.race([fetch(...args), delay(timeout)]);
}

//链接超时
const delay = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			reject(new Error('timeout'));
		}, ms);
	});
}

module.exports = RequestUtils;