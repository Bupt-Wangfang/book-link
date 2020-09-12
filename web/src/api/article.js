import request from '@/http'

export function getArticles(data = {}) {
    return request.post('/article/list', data).then(({ data }) => data)
}