<template>
  <div>
    {{ msg }}
    <!-- <img :src="require('@/images/1.jpeg')"> -->
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
        ...mapActions(["fetchUserInfo"]),,,,
        
        babelCompileTest() {
            setTimeout(() => {
                console.log("babelCompileTest");
            }, 10);
        }
    }
};
</script>

<style lang="less" scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-size: 20px;
}
</style>
