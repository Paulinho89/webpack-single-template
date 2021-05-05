import Axios from "axios";
import Vue from "vue";

const vm = new Vue();
const fetch = async (config) => {
    // 基础参数
    const {
        url, method, params, timeout, ...other
    } = config;

    // 创建axios实例并配置默认值
    const axiosIns = Axios.create({
        // 请求头可以按需配置
        headers: {},
        // 设置响应超时时间
        timeout: timeout || 1 * 60 * 1000
    });
    // 处理请求参数
    let options;

    if (method === "post") {
        options = {
            url,
            method: "post",
            data: params,
            ...other
        };
    } else {
        options = {
            url,
            method: "get",
            params,
            ...other
        };
    }
    // 处理响应结果
    const response = await axiosIns(options).then((res) => {
        let { code } = res.data;
        const { msg } = res.data;
        
        if (code !== "0") {
            vm.$message.error(msg);
            return false;
        }
        return res.data;
    }).catch((error) => {
        console.log(error);
        return false;
    });
    return response;
};

export default fetch;
