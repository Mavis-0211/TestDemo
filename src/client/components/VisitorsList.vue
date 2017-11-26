<template>
    <div class="visitors">
        <ul>
            <li>
                <h2>
                    <span>李花花</span>
                    <i>医保支付</i>
                </h2>
                <p>门诊号：20173232</p>
            </li>
            <li>
                <h2>
                    <span>张大大</span>
                    <i>全费支付</i>
                </h2>
                <p>门诊号：20173232</p>
            </li>
        </ul>

        <router-link to="#" class="add-btn">添加就诊人</router-link>
    </div>
</template>

<style lang="scss" scoped>
    @import "../assets/css/_Mixins";
    .visitors {
        ul {
            padding: .3rem .3rem 0;
        }
        h2 {
            margin-bottom: .04rem;
            font-size: 0;
            span {
                font-weight: bold;
                font-size: .36rem;
                line-height: .5rem;
            }
            i {
                display: inline-block;
                font-size: .2rem;
                position: relative;
                color: #888;
                padding: .02rem .06rem;
                margin-left: .1rem;
                vertical-align: .04rem;
                
                &:before {
                    @include border(#888);
                    @include radius(.1rem);
                }
            }
        }
        li {
            background-color: #fff;
            padding: .5rem;
            @include radius(.14rem);
            margin-bottom: .3rem;

            p {
                font-size: .3rem;
                line-height: .42rem;
                color: #888;
            }
        }
    }
</style>
