const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second
    //   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

const showToast = msg => {
    wx.showToast({
        title: msg,
        icon: 'none',
        duration: 1500
    })
}

var postfix = '_deadtime';

function put(k, v, t) {
    wx.setStorageSync(k, v)
    var seconds = parseInt(t);
    if (seconds > 0) {
        var timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000 + seconds;
        wx.setStorageSync(k + postfix, timestamp + "")
    } else {
        wx.removeStorageSync(k + postfix)
    }
}

function get(k, def) {
    var deadtime = parseInt(wx.getStorageSync(k + postfix))
    if (deadtime) {
        if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {
            if (def) { return def; } else { return; }
        }
    }
    var res = wx.getStorageSync(k);
    if (res) {
        return res;
    } else {
        return def;
    }
}

function remove(k) {
    wx.removeStorageSync(k);
    wx.removeStorageSync(k + postfix);
}

function clear() {
    wx.clearStorageSync();
}

module.exports = {
    put: put,
    get: get,
    remove: remove,
    clear: clear,
    formatTime: formatTime,
    formatTask: formatTask,
    formatTaskList: formatTaskList,
    formatRankList: formatRankList,
    formatBalanceFlow: formatBalanceFlow,
    formatTaskRecordList: formatTaskRecordList,
    showToast: showToast
}