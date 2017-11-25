<template>
    <div class="user">
        <!-- 就诊卡 -->
        <div class="card">
            <div class="content">
                <div class="left">
                    <h2>
                        <span>秦小辉</span>
                        <i>医保</i>
                    </h2>
                    <p>就诊卡号：028364758</p>
                </div>
                <div class="right" @click="maskShow=!maskShow">
                    <img src="#" alt="">
                    <p>点击出示就诊二维码</p>
                </div>
            </div>
        </div>
        <!-- 链接菜单 -->
        <ul class="menu">
            <router-link tag="li" to="/info">
                <span>个人信息</span>
            </router-link>
            <li>
                <span>就诊人管理</span>
            </li>
            <li>
                <span>我的挂号</span>
            </li>
        </ul>
        <!-- 就诊二维码弹层 -->
        <div :class="['ewm-mask', {'on': maskShow}]" @click="maskShow=!maskShow">
            <div class="content">
                <img src="#" alt="">
                <p>出示就诊二维码给医护人员</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                maskShow: false
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import "../assets/css/_Mixins";
    .user {
        .ewm-mask {
            position: fixed;
            background: #4343E8;
            width: 7.5rem;
            height: 100%;
            top: 0;
            left: 0;
            margin: 0 auto;
            opacity: 0;
            z-index: 0;
            &.on {
                opacity: 1;
                z-index: 2;
                transition: opacity .4s;
            }

            .content {
                position: absolute;
                width: 100%;
                top: 50%;
                @include prefix_property(transform, translateY(-60%));
            }

            img {
                width: 5rem;
                height: 5rem;
                background-color: #fff;
                @include radius(.14rem);
                margin: 0 auto;
                display: block;
            }

            p {
                color: #fff;
                text-align: center;
                margin-top: .3rem;
                font-size: .36rem;
            }
        }
        .menu {
            background: #fff;
            margin-top: .4rem;
            padding-left: .3rem;
            position: relative;
            z-index: 1;
            li {
                position: relative;
                &:after {
                    @include border_btm;
                }
                padding: .34rem 0;
            }
            span {
                line-height: .42rem;
                display: inline-block;
                font-size: .3rem;
            }
        }

        .card {
            padding: .3rem;
            position: relative;
            z-index: 1;
            .content {
                @include flex_box;
                @include pack_justify;
                @include prefix_property(background-image, linear-gradient(0deg, #4343E8 0%, #164DBA 100%));
                @include radius(.14rem);
                padding: .3rem;
                color: #fff;
            }   
        }
        
        h2 {
            span {
                font-size: .36rem;
                line-height: .5rem;
                font-weight: bold;
            }
            i {
                font-size: .22rem;
                display: inline-block;
                width: .66rem;
                height: .34rem;
                background: rgba(255, 255, 255, .1);
                text-align: center;
                line-height: .36rem;
                margin-left: .18rem;
                vertical-align: .06rem;
            }
        }
        p {
            opacity: .8;
        }
        .left {
            position: relative;
            p {
                font-size: .3rem;
                line-height: .43rem;
                margin-top: .05rem;
            }
        }
        .right {
            img {
                width: 2.4rem;
                height: 2.4rem;
                background: #fff;
                @include radius(.14rem);
            }
            p {
                text-align: center;
                font-size: .26rem;
                line-height: .37rem;
                margin-top: .13rem;
            }
        }
    }
</style>
