<template>
    <div>
        <group-title>rows = 2</group-title>
        <grid :rows="2">
            <grid-item label="Grid" v-for="i in 2" :key="i">
                <img slot="icon" src="../assets/logo.png">
            </grid-item>
        </grid>
         <group-title>rows = 3</group-title>
        <grid>
            <grid-item link="/component/cell" label="Go to Cell">
                <img slot="icon" src="../assets/logo.png">
            </grid-item>
            <grid-item :link="{ path: '/component/cell'}" label="Go to Cell">
                <img slot="icon" src="../assets/logo.png">
            </grid-item>
            <grid-item link="/component/cell" @on-item-click="onItemClick">
                <img slot="icon" src="../assets/logo.png">
                <span slot="label">Go to Cell</span>
            </grid-item>
        </grid>
        <group-title>rows = 4</group-title>
        <grid :rows="4">
            <grid-item label="Grid" v-for="i in 4" :key="i">
                <img slot="icon" src="../assets/logo.png">
            </grid-item>
        </grid>
        <group-title>custom content</group-title>
        <grid :rows="5">
            <grid-item v-for="i in 5" :key="i">
                <span class="grid-center">{{i}}</span>
            </grid-item>
        </grid> 
    </div>
</template>

<script>
    import { Grid, GridItem, GroupTitle } from 'vux'

    export default {
        name: 'MyGrid',
        components: {
            Grid,
            GridItem,
            GroupTitle
        },
        methods: {
            onItemClick() {
                console.log('on item click')
            }
        }
    }

</script>

<style scoped>
    .grid-center {
        display: block;
        text-align: center;
        color: #666;
    }
</style>