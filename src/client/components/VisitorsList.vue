<template>
    <div class="visitors">
        <ul>
            <li v-for="li in visitors" :key="li.id">
                <h2>
                    <span>{{li.userName}}</span>
                    <i>{{li.payType}}</i>
                </h2>
                <p>门诊号：{{li.cardId}}</p>
            </li>
        </ul>

        <router-link to="#" class="add-btn">添加就诊人</router-link>
    </div>
</template>

<script>
import api from "../api/index"
export default {
    data() {
        return {
            visitors: []
        }
    },
    mounted () {
        api.getVisitors(res => {
            this.visitors = res.data.list
        })
    }
}
</script>


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
