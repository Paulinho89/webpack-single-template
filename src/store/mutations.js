import { USER_INFO } from "./mutation-type";

export default {
    [USER_INFO](state, data) {
        state.userInfo = data;
    }
};
