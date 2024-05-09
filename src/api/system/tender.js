import request from '@/utils/request'

// 查询关键字
export function getClassify() {
  return request({
    url: '/business/tender/getClassify',
    method: 'get'
  })
}

// 查询用户关键字
export function getClassifyById(id) {
  return request({
    url: '/customize/subscribe/'+id,
    method: 'get'
  })
}
//新增订阅配置
export function addSubscribe(query) {
  return request({
    url: '/customize/subscribe',
    method: 'post',
    data: query
  })
}
//修改订阅配置
export function editSubscribe(query) {
  return request({
    url: '/customize/subscribe',
    method: 'put',
    data: query
  })
}
