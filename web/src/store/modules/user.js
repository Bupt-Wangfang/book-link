import { login } from '@/api'
import { getUserInfo } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'
import router from '@/router'

export default {
    state: {
        isLogin: !!localStorage.getItem('token'),
        userName: '',
        userId: '', // 用户ID
        avatar: '' // 头像
    },
    mutations: {
        setLoginState(state, val) {
            state.isLogin = val;
        },
        setUserInfo(state, user) {
            user.name && (state.userName = user.name);
            user.id && (state.userId = user.id);
            user.avatar && (state.avatar = user.avatar);
        }
    },
    actions: {
        getUserInfo({ commit, state, dispatch }) {
            if(state.isLogin && !state.userId) {
                return getUserInfo().then(({ code, data }) => {
                    commit('setUserInfo', data);
                }).catch(() => {
                    dispatch('clearUserData');
                });
            }
        },
        login({ commit }, userInfo) {
            return login(userInfo).then((code, data) => {
                const token = data.token;
                if(token) {
                    commit('setLoginState', true);
                    setToken(token);
                    return true;
                }
                return false;
            })
        },
        clearUserData({ commit }) {
            commit('setLoginState', false);
            removeToken();
            commit('setUserInfo', {name: '', avatar: ''});
        },
        loginOut({ dispatch }) {
            dispatch('clearUserData');
            router.push('./login');
        }
    },
}