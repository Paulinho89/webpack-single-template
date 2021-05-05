import { queryUserInfo } from "@/api";
import { USER_INFO } from "./mutation-type";

const fetchUserInfo = ({ commit }) => (
    new Promise((resolve, reject) => {
        queryUserInfo().then(res => {
            if (res) {
                commit(USER_INFO, res.data);
            } else {
                commit(USER_INFO, {});
            }
            resolve(res);
        }).catch(e => reject(e));
    })
);

export default {
    fetchUserInfo
};
