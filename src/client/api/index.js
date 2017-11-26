import Vue from "vue"
import axios from "axios"

Vue.prototype.Ajax = axios

export default {
    getUser(fn) {
        axios.get("/api/user").then(fn).catch(err => console.log(err))
    },
    getUserInfo(fn) {
        axios.get("/api/userInfo").then(fn).catch(err => console.log(err))
    },
    getVisitors(fn) {
        axios.get("/api/visitorsList").then(fn).catch(err => console.log(err))
    },
    getTel(fn) {
        axios.get("/api/getTel").then(fn).catch(err => console.log(err))
    }
}