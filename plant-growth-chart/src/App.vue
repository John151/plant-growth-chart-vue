<template>
  <div id="app">
    <h1>Plant Growth Chart</h1>

     <label>Height</label>
      <input type="number" v-model="newHeight">
      <br>
      <label>Date</label>
      <input type="date" v-model="newDate">
      <button v-on:click="addRecord">Add Record</button>

      <plant-chart v-bind:chartData="chartData"></plant-chart>

  </div>
</template>

<script>
import PlantChart from './components/PlantChart.vue'

export default {
  name: 'App',
  components: {
    PlantChart
  },
  data() {
      return {
          newHeight: 0,
          newDate: '',
          allRecords: []
      }
  },
  mounted() {
      this.getAllData()
  },
    methods: {
      addRecord() {
          let record = {height: this.newHeight, date: this.newDate}
          this.$plant_record_api.addPlantRecord(record).then( () => {
              console.log('todo update chart')
              this.getAllData()
          })
      },
      getAllData() {
          this.$plant_record_api.getAllPlantRecords().then ( records => {
              this.allRecords = records
          })
      }
    },
    computed: {
      chartData() {
      let labels = this.allRecords.map(rec => rec.date)
      let height = this.allRecords.map(rec => rec.height)
          return {
      labels: labels,
      datasets: [
          {
              label: 'height for date',
              data: height
          }
      ]
      }
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
