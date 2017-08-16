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
import MyCheckList from '@/components/MyCheckList'
import MyCLock from '@/components/MyCLock'
import MyColorPicker from '@/components/MyColorPicker'
import MyConfirm from '@/components/MyConfirm'
import MyCountDown from '@/components/MyCountDown'
import MyCountUp from '@/components/MyCountUp'
import MyDatetimeRange from '@/components/MyDatetimeRange'
import MyDatetime from '@/components/MyDatetime'
import MyDatetimeView from '@/components/MyDatetimeView'
import MyFlexBox from '@/components/MyFlexBox'
import MyFlow from '@/components/MyFlow'
import MyGrid from '@/components/MyGrid'
import MyIcon from '@/components/MyIcon'
import MyInCalender from '@/components/MyInCalender'
import MyInlineMore from '@/components/MyInlineMore'
import MyMarquee from '@/components/MyMarquee'
import MyMasker from '@/components/MyMasker'
import MyMsg from '@/components/MyMsg'
import MyPanel from '@/components/MyPanel'
import MyPicker from '@/components/MyPicker'
import MyPropover from '@/components/MyPropover'
import MyPropH from '@/components/MyPropH'
import MyPropupP from '@/components/MyPropupP'
import MyPropupR from '@/components/MyPropupR'
import MyPropup from '@/components/MyPropup'
import MyPreview from '@/components/MyPreview'
import MyQrcode from '@/components/MyQrcode'
import MyRadio from '@/components/MyRadio'
import MyRange from '@/components/MyRange'
import MyRater from '@/components/MyRater'
import MySearch from '@/components/MySearch'
import MySelecter from '@/components/MySelecter'
import MySpinner from '@/components/MySpinner'
import MyStep from '@/components/MyStep'
import MySwipeOut from '@/components/MySwipeOut'
import MySwiper from '@/components/MySwiper'
import MyTab from '@/components/MyTab'
import MyTimeLine from '@/components/MyTimeLine'
import MyToast from '@/components/MyToast'
import MyEmoji from '@/components/MyEmoji'
import MyXadress from '@/components/MyXadress'
import MyXbutton from '@/components/MyXbutton'
import MyXcircle from '@/components/MyXcircle'
import MyXdialog from '@/components/MyXdialog'
import MyXheader from '@/components/MyXheader'
import MyXimg from '@/components/MyXimg'
import MyXinput from '@/components/MyXinput'
import MyXnumber from '@/components/MyXnumber'
import MyXprogress from '@/components/MyXprogress'
import MyXswich from '@/components/MyXswich'
import MyXtable from '@/components/MyXtable'
import MyXtextarea from '@/components/MyXtextarea'

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
    },
    {
      path: '/MyCheckList',
      name: 'MyCheckList',
      component: MyCheckList
    },
    {
      path: '/MyCLock',
      name: 'MyCLock',
      component: MyCLock
    },
    {
      path: '/MyColorPicker',
      name: 'MyColorPicker',
      component: MyColorPicker
    },
    {
      path: '/MyConfirm',
      name: 'MyConfirm',
      component: MyConfirm
    },
    {
      path: '/MyCountDown',
      name: 'MyCountDown',
      component: MyCountDown
    },
    {
      path: '/MyCountUp',
      name: 'MyCountUp',
      component: MyCountUp
    },
    {
      path: '/MyDatetimeRange',
      name: 'MyDatetimeRange',
      component: MyDatetimeRange
    },
    {
      path: '/MyDatetime',
      name: 'MyDatetime',
      component: MyDatetime
    },
    {
      path: '/MyDatetimeView',
      name: 'MyDatetimeView',
      component: MyDatetimeView
    },
    {
      path: '/MyFlexBox',
      name: 'MyFlexBox',
      component: MyFlexBox
    },
    {
      path: '/MyFlow',
      name: 'MyFlow',
      component: MyFlow
    },
    {
      path: '/MyGrid',
      name: 'MyGrid',
      component: MyGrid
    },
    {
      path: '/MyIcon',
      name: 'MyIcon',
      component: MyIcon
    },
    {
      path: '/MyInCalender',
      name: 'MyInCalender',
      component: MyInCalender
    },
    {
      path: '/MyInlineMore',
      name: 'MyInlineMore',
      component: MyInlineMore
    },
    {
      path: '/MyMarquee',
      name: 'MyMarquee',
      component: MyMarquee
    },
    {
      path: '/MyMasker',
      name: 'MyMasker',
      component: MyMasker
    },
    {
      path: '/MyMsg',
      name: 'MyMsg',
      component: MyMsg
    },
    {
      path: '/MyPanel',
      name: 'MyPanel',
      component: MyPanel
    },
    {
      path: '/MyPicker',
      name: 'MyPicker',
      component: MyPicker
    },
    {
      path: '/MyPropover',
      name: 'MyPropover',
      component: MyPropover
    },
    {
      path: '/MyPropH',
      name: 'MyPropH',
      component: MyPropH
    },
    {
      path: '/MyPropupP',
      name: 'MyPropupP',
      component: MyPropupP
    },
    {
      path: '/MyPropupR',
      name: 'MyPropupR',
      component: MyPropupR
    },
    {
      path: '/MyPropup',
      name: 'MyPropup',
      component: MyPropup
    },
    {
      path: '/MyPreview',
      name: 'MyPreview',
      component: MyPreview
    },
    {
      path: '/MyQrcode',
      name: 'MyQrcode',
      component: MyQrcode
    },
    {
      path: '/MyRadio',
      name: 'MyRadio',
      component: MyRadio
    },
    {
      path: '/MyRange',
      name: 'MyRange',
      component: MyRange
    },
    {
      path: '/MyRater',
      name: 'MyRater',
      component: MyRater
    },
    {
      path: '/MySearch',
      name: 'MySearch',
      component: MySearch
    },
    {
      path: '/MySelecter',
      name: 'MySelecter',
      component: MySelecter
    },
    {
      path: '/MySpinner',
      name: 'MySpinner',
      component: MySpinner
    },
    {
      path: '/MyStep',
      name: 'MyStep',
      component: MyStep
    },
    {
      path: '/MySwipeOut',
      name: 'MySwipeOut',
      component: MySwipeOut
    },
    {
      path: '/MySwiper',
      name: 'MySwiper',
      component: MySwiper
    },
    {
      path: '/MyTab',
      name: 'MyTab',
      component: MyTab
    },
    {
      path: '/MyTimeLine',
      name: 'MyTimeLine',
      component: MyTimeLine
    },
    {
      path: '/MyToast',
      name: 'MyToast',
      component: MyToast
    },
    {
      path: '/MyEmoji',
      name: 'MyEmoji',
      component: MyEmoji
    },
    {
      path: '/MyXadress',
      name: 'MyXadress',
      component: MyXadress
    },
    {
      path: '/MyXbutton',
      name: 'MyXbutton',
      component: MyXbutton
    },
    {
      path: '/MyXcircle',
      name: 'MyXcircle',
      component: MyXcircle
    },
    {
      path: '/MyXdialog',
      name: 'MyXdialog',
      component: MyXdialog
    },
    {
      path: '/MyXheader',
      name: 'MyXheader',
      component: MyXheader
    },
    {
      path: '/MyXimg',
      name: 'MyXimg',
      component: MyXimg
    },
    {
      path: '/MyXinput',
      name: 'MyXinput',
      component: MyXinput
    },
    {
      path: '/MyXnumber',
      name: 'MyXnumber',
      component: MyXnumber
    },
    {
      path: '/MyXprogress',
      name: 'MyXprogress',
      component: MyXprogress
    },
    {
      path: '/MyXswich',
      name: 'MyXswich',
      component: MyXswich
    },
    {
      path: '/MyXtable',
      name: 'MyXtable',
      component: MyXtable
    },
    {
      path: '/MyXtextarea',
      name: 'MyXtextarea',
      component: MyXtextarea
    }
  ]
})
