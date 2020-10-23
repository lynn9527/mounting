import http from './http'
export function punchAPI(data) {
  return http({
    url:"/clock",
    method:"post",
    data:data
  })
}



