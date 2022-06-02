import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'
import AboutName from './AboutName.vue'
import NotFound from './NotFound.vue'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movies/:movieID',
      component: Movie
    },
    {
      path: '/about',
      component: About,
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
      component: NotFound
    }
  ]
})
