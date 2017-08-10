import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloFromVux'
import Hello from '@/components/Hello'
import MyAlert from '@/components/MyAlert'
import MyBadge from '@/components/MyBadge'
import MyBlur from '@/components/MyBlur'
import MyButtonTab from '@/components/MyButtonTab'
import MyCalendar from '@/components/MyCalendar'
import MyCard from '@/components/MyCard'
import MyCellBox from '@/components/MyCellBox'
import MyformPreview from '@/components/MyformPreview'
import MyCell from '@/components/MyCell'
import MyCheckIcon from '@/components/MyCheckIcon'
import MyChecker from '@/components/MyChecker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/MyAlert',
      name: 'MyAlert',
      component: MyAlert
    },
    {
      path: '/MyBadge',
      name: 'MyBadge',
      component: MyBadge
    },
    {
      path: '/MyBlur',
      name: 'MyBlur',
      component: MyBlur
    },
    {
      path: '/MyButtonTab',
      name: 'MyButtonTab',
      component: MyButtonTab
    },
    {
      path: '/MyCalendar',
      name: 'MyCalendar',
      component: MyCalendar
    },
    {
      path: '/MyCard',
      name: 'MyCard',
      component: MyCard
    },
    {
      path: '/MyCellBox',
      name: 'MyCellBox',
      component: MyCellBox
    },
    {
      path: '/MyformPreview',
      name: 'MyformPreview',
      component: MyformPreview
    },
    {
      path: '/MyCell',
      name: 'MyCell',
      component: MyCell
    },
    {
      path: '/MyCheckIcon',
      name: 'MyCheckIcon',
      component: MyCheckIcon
    },
    {
      path: '/MyChecker',
      name: 'MyChecker',
      component: MyChecker
    }
  ]
})
