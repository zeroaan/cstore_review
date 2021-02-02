export const FOODDATA = [
  {
    id: 0,
    name: "신라면",
    price: "1,300",
    liked: 5,
    review: 7,
    star: 4.0,
    image:
      "https://www.costco.co.kr/medias/sys_master/images/h64/h96/9867844452382.jpg",
  },
  {
    id: 1,
    name: "삼양라면",
    price: "1,100",
    liked: 3,
    review: 5,
    star: 3.5,
    image:
      "https://lh3.googleusercontent.com/proxy/JRtxdcmZKJzkbN_LfqCxg36PBpqSV4Iz27J9NN3uPcvrPT7vJhCF7uE5-WuozWcgVgkwi9hWTM5hur0VHGDpViW-yjIKLhFqfJl7p6_h_22nglJwaWkKoQ3-Mj6muIUGtLwQuwzy2KY",
  },
  {
    id: 2,
    name: "열라면",
    price: "1,200",
    liked: 4,
    review: 2,
    star: 4.2,
    image:
      "http://img.danawa.com/prod_img/500000/427/242/img/1242427_1.jpg?shrink=500:500&_v=20181016142232",
  },
]

export const bestStarData = [...FOODDATA].sort(function (a, b) {
  return b.star - a.star
})

export const bestReviewData = [...FOODDATA].sort(function (a, b) {
  return b.review - a.review
})
