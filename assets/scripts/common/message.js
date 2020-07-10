import Vue from "vue";
import Message from "@/components/common/message";

const AlertConstructor = Vue.extend(Message);

const AlertModal = (o) => {
    if (Vue.prototype.$isServer) {
        return;
    }
    const alertDom = new AlertConstructor({
        el: document.createElement("div"),
    });
    document.body.appendChild(alertDom.$el);

    // 标题
    alertDom.text = o.text;
};
export default AlertModal;
