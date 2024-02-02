import vue from 'vue'
import App from './App'

new Vue({
    render(createElement) {
        return createElement(app)
    }
}).$mount('#app')