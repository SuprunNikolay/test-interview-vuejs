import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AssetHealth from './views/AssetHealth/AssetHealth'
import TorqueProfile from './views/AssetHealth/TorqueProfile/TorqueProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'asset-health',
          name: 'asset-health',
          component: AssetHealth,
          children: [
            {
              path: 'torque-profile',
              name: 'torque-profile',
              component: TorqueProfile,
            }
          ]
        }
      ]
    },
    {
      path: '*',
      redirect: '/asset-health/torque-profile'
    }
  ]
})
