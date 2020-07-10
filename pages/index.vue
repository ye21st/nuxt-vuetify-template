<template>
    <v-layout column justify-center align-center>
        <div class="my-2">
            <v-btn color="success" dark @click="test()">调用弹窗</v-btn>
        </div>
    </v-layout>
</template>

<script>
export default {
    name: "Index",
    methods: {
        test() {
            this.$alert({
                text: "信息",
            });
        },
    },
};
</script>
