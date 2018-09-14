const localhost = "http://192.168.12.38"
const testhost = 'http://60.205.1.4:20000'
const host = 'https://api.dakaapp.com'
// 微信登录
function apiLogin(data) {
    return sendRequest('/_API/_wxLogin', 'POST', data).then(res => res.data)
}

// 随机获取分享语录
function apiGetShareWord() {
    let shareWord = [
        '好吃你就多吃点，不好吃多少也要吃点。',
        '今天吃喝不努力 明天努力找吃喝。',
        '吃的更多，吃的更饱，吃的更好！',
        '吃货的座右铭：Just eat it !',
        '瘦子吃给胖子看，是一件很残酷的事儿。',
        '胖子吃给瘦子看，是一件很拉风的事儿。',
        '识食物者为俊杰。',
        '最让我感动的三句话：给你带好吃的，请你去吃好吃的，带你去吃好吃的。',
        '两情若是长久时，又岂在猪猪肉肉。'
    ]
    let index = Math.floor((Math.random()) * shareWord.length)
    return shareWord[index]
}

/**
 * 封装请求函数
 */
function sendRequest(url, method, data) {
    var token = wx.getStorageSync('token')
    return new Promise((resole, reject) => {
        wx.request({
            url: testhost + url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'D-TOKEN': token
            },
            success: resole,
            fail: reject
        })
    })
}

// 省份数据
var provinces = [
    {
        "id": 1,
        "name": "北京",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 2,
        "name": "安徽",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 3,
        "name": "澳门",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 4,
        "name": "福建",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 5,
        "name": "甘肃",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 6,
        "name": "广东",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 7,
        "name": "广西",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 8,
        "name": "贵州",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 9,
        "name": "海南",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 10,
        "name": "河北",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 11,
        "name": "河南",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 12,
        "name": "黑龙江",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 13,
        "name": "重庆",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 14,
        "name": "湖北",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 15,
        "name": "湖南",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 16,
        "name": "吉林",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 17,
        "name": "江苏",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 18,
        "name": "江西",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 19,
        "name": "辽宁",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 20,
        "name": "内蒙古",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 21,
        "name": "宁夏",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 22,
        "name": "青海",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 23,
        "name": "山东",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 24,
        "name": "山西",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 25,
        "name": "陕西",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 26,
        "name": "上海",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 27,
        "name": "四川",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 28,
        "name": "台湾",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 29,
        "name": "天津",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 30,
        "name": "西藏",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 31,
        "name": "香港",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 32,
        "name": "新疆",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 33,
        "name": "云南",
        "imgUrl": "",
        "num": 0
    },
    {
        "id": 34,
        "name": "浙江",
        "imgUrl": "",
        "num": 0
    }
]

module.exports = {
    provinces: provinces,
    apiLogin: apiLogin,
    apiGetShareWord: apiGetShareWord,
}
