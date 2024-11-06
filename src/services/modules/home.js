import hyRequest from '@/services'

export function getHomeGoodPrice() {
  return hyRequest.get({
    url: '/home/goodprice',
  })
}

export function getHomeHighScore() {
  return hyRequest.get({
    url: '/home/highscore',
  })
}

export function getHomeDiscount() {
  return hyRequest.get({
    url: '/home/discount',
  })
}

export function getHomeRecommend() {
  return hyRequest.get({
    url: '/home/hotrecommenddest',
  })
}
