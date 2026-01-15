  const app2 = Vue.createApp({
  data() {
    return {
      manyFoods: [
        'https://www.w3schools.com/w3images/img_burrito.svg',
        'https://www.w3schools.com/w3images/img_salad.svg',
        'https://www.w3schools.com/w3images/img_cake.svg',
        'https://www.w3schools.com/w3images/img_soup.svg',
        'https://www.w3schools.com/w3images/img_fish.svg',
        'https://www.w3schools.com/w3images/img_pizza.svg',
        'https://www.w3schools.com/w3images/img_rice.svg'
      ]
    }
  }
})
 
app2.mount('#app2')
