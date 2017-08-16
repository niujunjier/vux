<template>
    <div>
        <group title="Basic Usage">
            <x-switch title="default false"></x-switch>
            <x-switch title="default true" :inline-desc="value1 + ''" v-model="value1"></x-switch>
        </group>
        <group title="disabled">
            <x-switch title="default false" disabled></x-switch>
            <x-switch title="default true" :value="true" disabled></x-switch>
        </group>
        <group title="prevent default">
            <x-switch title="default false" prevent-default v-model="value2" @on-click="onClick"></x-switch>
        </group>
        <group title="html title">
            <x-switch disabled title="switch red"></x-switch>
        </group>
    </div>
</template>


<script>
    import { XSwitch, Group } from 'vux'

    export default {
        components: {
            XSwitch,
            Group
        },
        methods: {
            onClick(newVal, oldVal) {
                console.log(newVal, oldVal)
                this.$vux.loading.show({
                    text: 'in processing'
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                    this.value2 = newVal
                }, 1000)
            }
        },
        data() {
            return {
                value1: true,
                value2: false
            }
        }
    }
</script>