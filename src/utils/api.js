

// //get请求方式
// export function gets (url,data){
//     return request.get(url,{
//         params:data
//     })
// }

// //post请求方式
// export function posts(url,data){
//     return request.post(url,data)
// }

// 当前城市请求地址接口
export function ajaxCity(type){
    return gets(`/v1/cities?type=${type}`)
}

import request from './request'
// get请求
export function gets(url,data) {
    return request.get(url, {
       params:data
   }) 
}
// post请求
export function posts(url,data) {
   return request.post(url,data) 
}
// 获取城市列表
export function getCity(type) {
    return gets(`/v1/cities?type=${type}`)
}
// 获取验证码图片
export function code() {
    return posts('/v1/captchas')
}
// 登陆验证
// export function login(obj) {
//     return posts('/v2/login',obj)
// }
// 进入详情
export function detail(id) {
    return gets(`/v1/cities/${id}`)
}
// 搜索
export function search(id,keyword) {
    return gets(`/v1/pois?type=search&city_id=${id}&keyword=${keyword}`)
}

// 九宫格数据
export function getNav(){
    return gets(`/v2/index_entry?geohash=31.22299,121.36025&group_type=1&flags[]=F`)
}

// 商家数据
export function getShop(){
    return gets(`/shopping/restaurants?latitude=31.22299&longitude=121.36025&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=`)
}

