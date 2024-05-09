import request from '@/request/request'
export function apiAddress() {
    return request({
        url: '/system/config/list',
        method: 'get',
        data: query
    })
}
