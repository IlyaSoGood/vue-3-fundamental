import {createStore} from "vuex";

export default createStore({
    state: {
        likes: 2,
        isAuth: false
    },
    getters: {
        doubleLikes(state) {
            //геттер обязательно должен что-то возвращать
            //в компонентах геттер не вызываем, а обращаемся как к объекту ($store.getters.doubleLikes)
            return state.likes * 2
        }
    },
    mutations: {
        incrementsLikes(state) {
            state.likes += 1;
        },
        decrementLikes(state) {
            state.likes -= 1;
        }
    },
    actions: {

    },
    modules: {

    }
});