import Dashboard from './components/Dashboard'
import Widget from './components/Widget'

Nova.booting((Vue, router, store) => {

    router.addRoutes([
        {
            name: 'nova-dashboard',
            path: '/nova-dashboard/:dashboardKey',
            component: Dashboard
        }
    ])

    Vue.component('widget', Widget)

})

