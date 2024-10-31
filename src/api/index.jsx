import axios from 'axios'

const api = axios.create({
    baseURL: "https://quran-api.jstnlt.my.id/surah"
})

export default Api