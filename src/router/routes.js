const routes = [
  {
    path: '/',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/loginpage.vue') },
      { path: 'register', component: () => import('pages/register.vue') },
      { path: 'halamanutama', component: () => import('pages/halamanutama.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/loginpage.vue') },
      { path: 'register', component: () => import('pages/register.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
