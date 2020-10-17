import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/views/LandingPage';
import HomePage from '@/views/HomePage';
import DashboardPage from '@/views/DashboardPage';
import MyHomePage from '@/views/MyHomePage';
import MyHealthPage from '@/views/MyHealthPage';

Vue.use(Router);

const routes = [
    // { 
    //   path: '/', name: 'Home', component: HomePage,
    //   children: [
    //     { path: '/x', name: 'x', component: x},
    //   ]
    // },
    { path: '/', name: 'LandingPage', component: LandingPage },
    { path: '/home', name: 'HomePage', component: HomePage },
    { path: '/dashboard', name: 'DashboardPage', component: DashboardPage },
    { path: '/myhome', name: 'MyHomePage', component: MyHomePage },
    { path: '/myhealth', name: 'MyHealthPage', component: MyHealthPage },
    // { path: '/logout', name: 'logout', component: Logout},
    // { path: '*', redirect: '/'}
  ]
  
  const router = new Router({
    mode: 'history',
    routes,
  })
  
//   router.beforeEach((to, from, next) => {
//     const publicPaths = ['/']
//     const isAuthRequiredPaths = !publicPaths.includes(to.path);
//     // const isLoggedIn = true;
//     const user = localStorage.getItem('user');
//     const isLoggedIn = user !== null ? true : false;
//     // TODO: Uncomment when done
//     if(isAuthRequiredPaths && !isLoggedIn){
//       return next('/login');
//     }else{
//       next();
//     }
//   })
  
  export default router;