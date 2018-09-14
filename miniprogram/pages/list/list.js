// pages/list/list.js
const common = require('../../utils/common.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        provinces: [],
        currentProvince: '1',
    },

    /**
     * 点击省份
     */
    bindTapProvince: function(e) {
        let province = e.currentTarget.id
        let currentProvince =  this.data.currentProvince
        if (currentProvince != province) {
            this.setData({ currentProvince: province })
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        //获取省份列表
        this.setData({provinces: common.provinces})
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})