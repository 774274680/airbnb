import hyRequest from '@/services'

export function getHomeGoodPrice() {
  return hyRequest.get({
    url: '/home/goodprice',
  })
}
