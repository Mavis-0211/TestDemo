<template>
    <div class="info" v-if="domShow">
        <ul>
            <li>
                <label>姓名</label>
                <span>{{userInfo.userName}}</span>
            </li>
            <li>
                <label>就诊号</label>
                <span>{{userInfo.cardId}}</span>
            </li>
            <li>
                <label>身份证号</label>
                <span>{{iDFilter(userInfo.IDNumber)}}</span>
            </li>
            <router-link tag="li" to="/phone_change">
                <label>手机号</label>
                <span>{{telFilter(userInfo.userTel)}}</span>
            </router-link>
        </ul>
        <ul>
            <li>
                <label>费别</label>
                <span>{{userInfo.payType}}</span>
            </li>
        </ul>

        <ul>
            <li>
                <label>紧急联系人</label>
                <span>{{userInfo.touchName}}</span>
            </li>
            <li>
                <label>紧急联系人手机号</label>
                <span>{{userInfo.touchTel}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import api from "../api/index"
export default {
    data() {
        return {
            userInfo: {},
            domShow: false
        }
    },
    mounted () {
        api.getUserInfo(res => {
            this.userInfo = res.data
            this.domShow = true
        })
    },
    methods: {
        telFilter(tel) {
            return tel.replace(/(\w{3})\w*(\w{2})/, '$1******$2')
        },
        iDFilter(ID) {
            return ID.replace(/(\w{1})\w*(\w{1})/, '$1****************$2')
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
            margin-top: .3rem;
        }
        li {
            @include flex_box;
            line-height: .42rem;
            padding: .23rem .3rem .23rem 0;
            @include pack_justify;
            position: relative;

            &:before {
                @include border_btm;
            }

            &:last-child:before {
                height: 0;
            }

            span {
                color: #888;
                @include flex;
                text-align: right;
            }
        }
    }
</style>

