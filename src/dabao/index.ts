
import Test from "../Test.vue"
import type {App} from "vue";

function installer(app:App){
    console.log(1);
    app.component("test-abc",Test)
}

export default  installer
