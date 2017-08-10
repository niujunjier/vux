<template>
  <div>
    <div style="padding: 15px;">
      <button-tab>
        <button-tab-item>Today</button-tab-item>
        <button-tab-item selected>This Week</button-tab-item>
        <button-tab-item>This Month</button-tab-item>
      </button-tab>      
      <br>
      <divider>Use v-model to set selected item</divider>
      <br>
      <button-tab v-model="demo01">
        <button-tab-item @on-item-click="consoleIndex()">Articles</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex()">Products</button-tab-item>
      </button-tab>
      <br>
      <button-tab v-model="demo01">
        <button-tab-item>Articles sync</button-tab-item>
        <button-tab-item>Products sync</button-tab-item>
      </button-tab>
      <br>
      <divider>Red Dot</divider>
      <br>
      <button-tab>
        <button-tab-item selected>All Messages</button-tab-item>
        <button-tab-item><span class="vux-reddot-s">New Messages</span></button-tab-item>
      </button-tab>
    </div>
  </div>
</template>



<script>
import { ButtonTab, ButtonTabItem, Divider } from 'vux'

export default {
  components: {
    ButtonTab,
    ButtonTabItem,
    Divider
  },
  methods: {
    consoleIndex () {
      console.log('click demo01', this.demo01)
    }
  },
  data () {
    return {
      demo01: 0
    }
  }
}
</script>