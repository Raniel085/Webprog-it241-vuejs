<template>
  <div>
    <h1>Food & Music Dashboard</h1>
    
    <food-item />
    <food-item2 />
    <personal-profile />
    
    <hr />
    <rest-api /> <hr />

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
    <div v-else>
      <p>Connecting to Supabase...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient' // Ensure this file exists!

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