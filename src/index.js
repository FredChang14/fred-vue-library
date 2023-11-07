import FButton from "./components/FButton.vue";
import { useMouse } from "./composable/useMouse.js";

export { FButton, useMouse }; //用來本地引入

//用來全域引入
const components = [FButton];
export default {
    install: function (Vue, options = {}) {
        components.forEach(component => {
            Vue.component(component.name, component);
        });
    },
};
