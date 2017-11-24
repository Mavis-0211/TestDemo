<template>
    <div id="app">
        <nav>
            <router-link to="/home">home</router-link>
            <router-link to="/user">user</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import "./assets/css/App.scss"
    export default {
        name: "app"
    }
</script>


<style lang="scss" scoped>

</style>
