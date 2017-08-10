<template>
  <div>
    <group>
      <x-switch title="Show Me" v-model="show"></x-switch>
    </group>
    <div v-transfer-dom>
      <alert v-model="show" title="Congratulations" @on-show="onShow" @on-hide="onHide">Your Message is sent successfully~</alert>
    </div>
    <group title="content">
      <x-switch title="Show Me" v-model="show2"></x-switch>
    </group>
    <div v-transfer-dom>
      <alert v-model="show2" title="Congratulations" content="Your Message is sent successfully~"></alert>
    </div>
    <group title="Use as a plugin">
      <!-- 注意： 以这种形式调用必须在main.js里引入AlertPlugin-->
      <cell title="Show Me" @click.native="showPlugin" is-link></cell>
      <cell title="will auto close in 3s" @click.native="showPluginAuto" is-link></cell>
    </group>
  </div>
</template>



<script>
  import { Alert, Group, XSwitch, Cell, TransferDomDirective as TransferDom } from 'vux'

  export default {
    name: 'MyAlert',
    directives: {
      TransferDom
    },
    components: {
      Alert,
      Group,
      XSwitch,
      Cell
    },
    data() {
      return {
        show: false,
        show1: false,
        show2: false
      }
    },
    methods: {
      onHide() {
        console.log('on hide')
      },
      onShow() {
        console.log('on show')
      },
      showPlugin() {
        console.log(this)
        this.$vux.alert.show({
          title: 'VUX is Cool',
          content: 'Do you agree?',
          onShow() {
            console.log('Plugin: I\'m showing')
          },
          onHide() {
            console.log('Plugin: I\'m hiding now')
          }
        })
      },
      showPluginAuto() {
        this.showPlugin()
        setTimeout(() => {
          this.$vux.alert.hide()
        }, 3000)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>