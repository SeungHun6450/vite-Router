import { createRouter, createWebHistory } from 'vue-router'
import TheHeader from '~/components/TheHeader.vue'
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'
import AboutName from './AboutName.vue'
import NotFound from './NotFound.vue'


export default createRouter({
  history: createWebHistory(),
  // 페이지가 바뀔 때 스크롤의 위치를 지정해준다.
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      name: 'mainpage',
      path: '/',
      components: {
        // App.vue에서 이름을 매칭하는 부분
        TheHeader,
        default: Home
      }
    },
    {
      path: '/movies/:movieID',
      components:{
        default: Movie,
        TheHeader
      } 
    },
    {
      path: '/about',
      component: About,
      meta: { auth: true },
      children: [
        {
          // /about/name으로 매칭하기 위해(About.vue에서)
          path: 'name',
          component: AboutName
        }
      ]
    },
    {
      path: '/:notFound(.*)*',
      component: NotFound,
      // 다른 페이지로 팅기게 해주는 역할, 개발 전 페이지 대신에 팅겨주는 역할이라고 생각~
      redirect: '/about'
    }
  ]
})
