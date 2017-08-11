<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
    </div>
    <router-link v-for="item in demoList" :to="item"><group :title="item"><cell :title="item" :value="item" is-link></cell></group></router-link>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  name:'Home',
  components: {
    Group,
    Cell
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
        'MyClock'
      ]
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
