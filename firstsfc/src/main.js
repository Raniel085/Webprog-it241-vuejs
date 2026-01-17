import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './Components/FoodItem.vue'
import FoodItem2 from './Components/FoodItem2.vue'

const app = createApp(App)

// Register BOTH components so they can be used in App.vue
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)

app.mount('#app')