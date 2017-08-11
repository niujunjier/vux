<template>
  <div>
    <router-link v-for="item in demoList" :to="item"><group :title="item"><cell :title="item" :value="item" is-link></cell></group></router-link>
    <divider>我是有底线的</divider>
  </div>
</template>

<script>
import { Group, Cell, Divider } from 'vux'

export default {
  name:'Home',
  components: {
    Group,
    Cell,
    Divider
  },
  data () {
    return {
      demoList: [
        'Hello',
        'MyAlert',
        'MyBadge',
        'MyBlur',
        'MyButtonTab',
        'MyCalendar',
        'MyCard',
        'MyCellBox',
        'MyformPreview',
        'MyCell',
        'MyCheckIcon',
        'MyChecker',
        'MyCheckList',
        'MyClock',
        'MyColorPicker',
        'MyConfirm',
        'MyCountDown',
        'MyCountUp',
        'MyDatetimeRange',
        'MyDatetimeView',
        'MyDatetime',
        'MyFlexBox',
        'MyFlow',
        'MyGrid',
        'MyIcon',
        'MyInCalender',
        'MyInlineMore',
        'MyMarquee',
        'MyMasker',
        'MyMsg',
        'MyPanel',
        'MyPicker',
        'MyPropover',
        'MyPropH',
        'MyPropupP',
        'MyPropUpR',
        'MyPropup',
        'MyPreview',
        'MyQrcode',
        'MyRadio',
        'MyRange'
      ]
    }
  }
}
</script>

<style>

</style>
