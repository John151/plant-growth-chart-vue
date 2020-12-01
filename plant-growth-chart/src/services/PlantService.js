import axios from 'axios'
export default {
    getAllPlantRecords() {
        return axios.get('/api/plant_records').then( response => {
        return response.data
        })
    },
    addPlantRecord(plantRecord) {
        return axios.post('/api/plant_records', plantRecord).then( response => {
     return response.data
 })
 }
}