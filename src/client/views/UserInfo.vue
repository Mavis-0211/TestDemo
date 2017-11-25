<template>
    <div class="info">
        <ul>
            <router-link tag="li" to="/phone_change">
                <label>手机号</label>
                <span>{{telFilter(tel)}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tel: "13311112222"
        }
    },
    methods: {
        telFilter(tel) {
            return tel.replace(/(\w{3})\w*(\w{2})/, '$1******$2')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/_Mixins";
    .info {
        ul {
            background-color: #fff;
            padding-left: .3rem;
            font-size: .3rem;
        }
        li {
            @include flex_box;
            line-height: .42rem;
            padding: .23rem .3rem .23rem 0;
            @include pack_justify;

            span {
                color: #888;
                @include flex;
                text-align: right;
            }
        }
    }
</style>

