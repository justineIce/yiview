import Vue from 'vue'

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI);

import  Card from './components/card'
import  Table from './components/table'
import  Form from './components/form'
import  CountTo from './components/count-to'

const components=[
    Card,
    Table,
    Form,
    CountTo
]

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    version:'1.0.0',
    install,
    ...components
}
