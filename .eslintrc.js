module.exports = {
    "root": true,
    "extends": [
        // 使用 eslint-plugin-vue 插件，并继承 eslint-config-vue 的 recommended 配置
        "plugin:vue/recommended"
    ],
    // 自定义 parser，详见 https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
    "parserOptions": {
        "parser": "babel-eslint"
    },
    rules: {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
};
