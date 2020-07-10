<template>
    <v-snackbar
        ref="messageBox"
        v-model="show"
        :color="color"
        :timeout="timeout"
        :top="top"
        :vertical="'vertical'"
    >
        {{ text }}
    </v-snackbar>
</template>
<script>
export default {
    data() {
        return {
            show: true,
            color: "success",
            timeout: 1500,
            top: true,
            text: "",
        };
    },
    mounted() {},
    methods: {},
};
</script>
