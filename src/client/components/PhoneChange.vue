<template>
    <div class="phone">
        <div class="warm" v-show="isWarm"><span>请输入正确的手机号码</span></div>
        <div class="form-input">
            <input id="tel" type="tel"  v-model="tel" maxlength="11">
            <i v-show="isClearShow" @click="inputClear"><img src="../assets/imgs/clear.png" alt=""></i>
        </div>
        <div :class="['save-btn', {'on': isAble}]" @click="phoneSave">保存</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tel: '13311112222',
            isWarm: false
        }
    },
    mounted () {
        document.getElementById('tel').focus()
        this.tel = this.telFilter(this.tel)  
    },
    computed: {
        // 是否显示清除图标
        isClearShow() {
            return this.tel.length
        },
        // 保存按钮是否可点
        isAble() {
            return /^\d{11}$/.test(this.tel)
        }
    },
    methods: {
        telFilter(tel) {
            return tel.replace(/(\w{3})\w*(\w{2})/, '$1******$2')
        },
        // 清除输入框
        inputClear() {
            this.tel = ''
            this.isWarm = false
            document.getElementById('tel').focus()
        },
        // 保存
        phoneSave() {
            if(!this.isAble) {
                return
            }
            if(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(this.tel)) {
                this.$router.push({
                    path: '/info'
                })
            } else {
                this.isWarm = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/_Mixins";
    .save-btn {
        width: 6.9rem;
        font-size: .36rem;
        line-height: .5rem;
        color: #fff;
        padding: .22rem 0;
        text-align: center;
        background: #164DBA;
        @include radius(.1rem);
        margin: .4rem auto;
        opacity: .4;

        &.on {
            opacity: 1;
        }
    }
    .phone {
        .warm {
            span {
                color: #fff;
                background-color: #f76260;
                position: fixed;
                top: 0;
                width: 7.5rem;
                text-align: center;
                padding: .2rem 0;
                z-index: 2;
                line-height: .3rem;
            }
            height: .4rem;
            position: relative;
        }
        input {
            width: 100%;
            @include border_box;
            padding: .24rem .3rem;
            line-height: .42rem;
            font-size: .3rem;
        }
        img {
            width: .3rem;
            height: .3rem;
        }
        .form-input {
            margin-top: .3rem;
            position: relative;
            i {
                position: absolute;
                top: .28rem;
                right: .3rem;
            }
        }
    }
</style>

