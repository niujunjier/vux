<template>
    <div>

        <div style="padding:15px;">
            <x-button type="primary" plain @click.native="showPlugin">Used as a plugin</x-button>
        </div>

        <group title="default format: YYYY-MM-DD">
            <datetime v-model="value1" @on-change="change" title="Birthday"></datetime>
        </group>

        <group title="custom minute list: every 15 minutes">
            <datetime v-model="minuteListValue" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" @on-change="change"
                title="Birthday"></datetime>
        </group>

        <group title="custom hour list">
            <datetime v-model="hourListValue" format="YYYY-MM-DD HH:mm" :hour-list="['09', '10', '11', '12', '13', '14', '15', '16']"
                :minute-list="['00', '15', '30', '45']" @on-change="change" title="Birthday"></datetime>
        </group>

        <group title="readonly">
            <datetime v-model="valueReadonly" :readonly="readonly" @on-change="change" title="Birthday"></datetime>
        </group>
        <div style="padding:15px">
            <x-button type="primary" plain @click.native="readonly = !readonly">toggle readonly</x-button>
        </div>

        <group title="format display value">
            <datetime v-model="formatValue" :display-format="formatValueFunction" @on-change="change" title="Birthday"></datetime>
        </group>

        <div style="padding:15px;">
            <x-button type="primary" @click.native="formatValue = '2017-11-11'">set value: 2017-11-11</x-button>
        </div>

        <group title="Limit hours">
            <datetime v-model="limitHourValue" format="YYYY-MM-DD HH:mm" :min-hour=9 :max-hour=18 @on-change="change" title="Limit hours"
                inline-desc="09-18"></datetime>
        </group>

        <group title="set start-date and end-date 2015-11-11 ~ 2017-10-11">
            <datetime v-model="limitHourValue" :start-date="startDate" :end-date="endDate" format="YYYY-MM-DD HH:mm" @on-change="change"
                title="start time"></datetime>
        </group>

        <div style="padding:15px;">
            <x-button @click.native="reRender" type="primary">2016-11-11 ~ 2018-10-11</x-button>
        </div>

        <group title="format: format">
            <datetime v-model="value2" :format="format" @on-change="change" title="start time"></datetime>
        </group>

        <div style="padding:15px;">
            <x-button type="primary" @click.native="toggleFormat">toggle format</x-button>
        </div>

        <group title="Placeholder">
            <datetime v-model="value3" default-selected-value="2017-06-18 13" format="YYYY-MM-DD HH" placeholder="Please select"
                @on-change="change" title="start time"></datetime>
        </group>

        <group title="set default-selected-value to 2017-11-11">
            <datetime v-model="value3_1" default-selected-value="2017-11-11" format="YYYY-MM-DD" placeholder="Please select" @on-change="change"
                title="start time" :inline-desc="`current value: ${value3_1}`"></datetime>
        </group>

        <group title="set min-year and max-year">
            <datetime v-model="value4" placeholder="Please select" :min-year=2000 :max-year=2016 format="YYYY-MM-DD HH:mm" @on-change="change"
                title="years after 2000"></datetime>
        </group>

        <group title="prop:compute-hours-function">
            <datetime format="YYYY-MM-DD HH" v-model="computeHoursValue" :compute-hours-function="computeHoursFunction" title="Birthday"></datetime>
        </group>

        <group title="specified template text in Chinese">
            <datetime v-model="value5" placeholder="Please select" :min-year=2000 :max-year=2016 format="YYYY-MM-DD HH:mm" @on-change="change"
                title="Chinese" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分"
                confirm-text="完成" cancel-text="取消"></datetime>
        </group>

        <group title="show center button and clear the value">
            <datetime v-model="value6" @on-change="change" title="Birthday" clear-text="clear" @on-clear="clearValue"></datetime>
        </group>

        <group title="show center button to set date to today">
            <datetime v-model="value7" @on-change="change" title="Birthday" clear-text="today" @on-clear="setToday"></datetime>
        </group>

        <group title="custom trigger slot">
            <datetime v-model="value7" @on-change="change" title="Birthday" clear-text="today" @on-clear="setToday">
                <x-button>Click me</x-button>
            </datetime>
        </group>

        <group title="required">
            <datetime v-model="value8" title="Required" clear-text="clear" @on-clear="clearValue8" :required="true"></datetime>
        </group>

        <group title="use prop:show.sync(vue^2.3) to control visibility">
            <datetime v-model="value9" @on-change="change" title="Birthday" :show.sync="visibility"></datetime>
        </group>

        <div style="padding:15px;">
            <x-button type="primary" plain @click.native="visibility = true">显示</x-button>
        </div>

    </div>
</template>



<script>
    import { Datetime, Group, XButton } from 'vux'

    export default {
        components: {
            Datetime,
            Group,
            XButton
        },
        data() {
            return {
                readonly: true,
                minuteListValue: '2017-06-12 09:00',
                hourListValue: '2017-06-12 09:00',
                format: 'YYYY-MM-DD HH:mm',
                value1: '2015-11-12',
                valueReadonly: '2015-11-12',
                value2: '',
                value3: '',
                value3_1: '',
                value4: '',
                value5: '',
                value6: '2016-08-18',
                value7: '',
                value8: '',
                limitHourValue: '',
                startDate: '2015-11-11',
                endDate: '2017-10-11',
                formatValue: '2017-10-11',
                formatValueFunction(val) {
                    return val.replace(/-/g, '$')
                },
                value9: '',
                visibility: false,
                computeHoursValue: '',
                computeHoursFunction(date, isToday, generateRange) {
                    if (isToday) {
                        return generateRange(new Date().getHours(), 23)
                    } else {
                        return generateRange(0, 23)
                    }
                }
            }
        },
        methods: {
            showPlugin() {
                this.$vux.datetime.show({
                    cancelText: '取消',
                    confirmText: '确定',
                    format: 'YYYY-MM-DD HH',
                    value: '2017-05-20 18',
                    onConfirm(val) {
                        console.log('plugin confirm', val)
                    },
                    onShow() {
                        console.log('plugin show')
                    },
                    onHide() {
                        console.log('plugin hide')
                    }
                })
            },
            toggleFormat() {
                this.format = this.format === 'YYYY-MM-DD HH:mm' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm'
            },
            reRender() {
                this.startDate = '2016-11-11'
                this.endDate = '2018-10-11'
            },
            change(value) {
                console.log('change', value)
            },
            clearValue(value) {
                this.$data.value6 = ''
            },
            clearValue8(value) {
                this.$data.value8 = ''
            },
            setToday(value) {
                let now = new Date()
                let cmonth = now.getMonth() + 1
                let day = now.getDate()
                if (cmonth < 10) cmonth = '0' + cmonth
                if (day < 10) day = '0' + day
                this.$data.value7 = now.getFullYear() + '-' + cmonth + '-' + day
                console.log('set today ok')
            }
        }
    }

</script>

<style scoped lang="less">
    .center {
        padding-top: 10px;
        padding-left: 15px;
        color: green;
    }
</style>