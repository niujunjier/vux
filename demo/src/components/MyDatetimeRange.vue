<template>
    <div>
        <group :title="value + ''">
            <datetime-range title="Choose" start-date="2017-01-01" end-date="2017-02-02" format="YYYY年MM月DD日" v-model="value"
                @on-change="onChange"></datetime-range>
        </group>
    </div>
</template>



<script>
    import { Group, DatetimeRange } from 'vux'

    export default {
        components: {
            Group,
            DatetimeRange
        },
        methods: {
            onChange(val) {
                console.log('change', val)
            }
        },
        data() {
            return {
                value: ['2017-01-15', '03', '05']
            }
        }
    }

</script>