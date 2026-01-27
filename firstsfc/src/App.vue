<template>
  <div>
    <h1>Food</h1>
    
    <food-item />
    <personal-profile />
    <comment-form />
    <comment />

    <hr />

    <div v-if="instruments.length > 0">
      <h3>Instruments from Database:</h3>
      <ul>
        <li v-for="instrument in instruments" :key="instrument.id">
          {{ instrument.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const instruments = ref([])

async function getInstruments() {
  try {
    const { data, error } = await supabase.from('instruments').select()
    if (error) throw error
    if (data) instruments.value = data
  } catch (err) {
    console.error("Supabase Error:", err.message)
  }
}

onMounted(() => {
  getInstruments()
})
</script>

<style>
/* Add any global styles here if needed */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 20px;
}
</style>