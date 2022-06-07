import router from './index.js'

// 페이지로 넘어가기 전
router.beforeEach((to) => {
  // to: 접근하고자 하는 페이지의 정보를 들고있는 객체(meta정보)
  if(to.meta.auth) {
    const { name } = JSON.parse(localStorage.getItem('currentUser') || '{}')
    if(name) {
      return true
    } else {
      return '/'
    }
  }

  return true
})
