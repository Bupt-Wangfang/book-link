import request from '@/http'

export function getUserInfo () {
  return request.get('/user', { notLogin: true }).then(({ data }) => data)
}

export function register(data) {
  return request.post('/user', data).then(({ data }) => data);
}

export function updateUserInfo(id, data) {
  return request.post(`/user/${id}`, data).then(({ data }) => data);
}