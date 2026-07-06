import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Equipment from '../views/Equipment.vue'
import Rooms from '../views/Rooms.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/equipment', name: 'Equipment', component: Equipment },
  { path: '/rooms', name: 'Rooms', component: Rooms },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
