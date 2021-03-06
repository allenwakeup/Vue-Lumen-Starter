// Import Views
import error404 from 'srcFolder/views/errors/404'
import loginPage from 'srcFolder/views/client/auth/login'
import registerPage from 'srcFolder/views/client/auth/register'
import adminDashboard from 'srcFolder/views/admin/dashboard/index'

export default [
    // Home Page
    { path: '/', redirect: '/login' },

    // Errors
    { path: '*',  component: error404 },

    // Auth
    { path: '/login', name: 'login', component: loginPage, meta: { guest: true } },
    { path: '/register', name: 'register', component: registerPage, meta: { guest: true } },

    // Admin
    { path: '/admin/dashboard', name: 'adminDashboard', component: adminDashboard, meta: { auth: true } },
]