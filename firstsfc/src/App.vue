<template>
  <div>
    <h1>Food & Music Dashboard</h1>
    
    <food-item />
    <food-item2 />
    <personal-profile />
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
      <p>Loading instruments or no data found...</p>
    </div>
  </div>
</template>