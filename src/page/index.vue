<template>
  <div class="container">
    {{ msg }}
    <img :src="require('@/images/bg.jpg')">
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            msg: "从0到1手把手带你捋一套webpack+vue单页项目模板"
        };
    },
    computed: {
        ...mapGetters({
            userInfo: "userInfo"
        })
    },
    mounted() {
        this.babelCompileTest();
        this.fetchUserInfo();
    },
    methods: {
        ...mapActions(["fetchUserInfo"]),
        
        async babelCompileTest() {
            setTimeout(() => {
                console.log("babelCompileTest");
                const [first, ...rest] = [1, 2, 3, 4, 5];
                console.log('first', first);
                console.log('rest', rest);
            }, 10);
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-size: 20px;
}

.unused-css {
    color: #fff;
}
</style>
