<template>
    <div>
        <br>
        <p style="text-align:center;">
            <inline-loading></inline-loading>
        </p>
        <br>
        <p style="text-align:center;">
            <span style="vertical-align:middle;display:inline-block;font-size:14px;">loading&nbsp;&nbsp;</span>
            <inline-loading></inline-loading>
        </p>
        <br>
        <p style="text-align:center;">
            <inline-loading></inline-loading><span style="vertical-align:middle;display:inline-block;font-size:14px;">&nbsp;&nbsp;loading</span>
        </p>
        <br>
        <div style="text-align:center;">
            <inline-x-number width="50px"></inline-x-number>
        </div>
        <br>
        <div style="text-align:center;">
            <inline-x-number width="50px" button-style="round"></inline-x-number>
        </div>
        <group>
            <cell title="used within cell">
                <inline-x-number style="display:block;" :min="0" width="50px" button-style="round"></inline-x-number>
            </cell>
        </group>
        <load-more tip="正在加载"></load-more>
        <load-more :show-loading="false" tip="暂无数据" background-color="#fbf9fe"></load-more>
        <load-more :show-loading="false" background-color="#fbf9fe"></load-more>
        <group>
            <x-switch title="Toggle" v-model="show1" @on-change="show1change"></x-switch>
        </group>
        <div v-transfer-dom>
            <loading :show="show1" :text="text1"></loading>
        </div>
         <div style="padding: 15px;">
            <x-button @click.native="showLoading" type="primary">显示loading(2s后关闭)</x-button>
        </div> 
    </div>
</template>

<script>
    import { Group, Cell, InlineXNumber, InlineLoading, LoadMore, Loading, XSwitch, XButton, TransferDomDirective as TransferDom } from 'vux'

    export default {
        name:'MyInlineMore',
        directives: {
            TransferDom
        },
        components: {
            InlineLoading,
            Group,
            Cell,
            InlineXNumber,
            Loading,
            LoadMore,
            XSwitch,
            XButton
        },
        data() {
            return {
                show1: false,
                text1: 'Processing'
            }
        },
        methods: {
            showLoading() {
                this.$vux.loading.show({
                    text: 'Loading'
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                }, 2000)
            },
            show1change(val) {
                if (val) {
                    tick(0, (percent) => {
                        if (percent === 100) {
                            this.show1 = false
                            return
                        }
                        this.text1 = `${percent}%`
                    })
                }
            }
        }
    }
    function tick(i, cb) {
        setTimeout(function () {
            i++
            cb(i)
            if (i < 100) {
                tick(i, cb)
            }
        }, 10)
    }

</script>