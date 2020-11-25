import axios from 'axios'
// ilmeisesti android-emulaattoria käytettäessä urlin oltava mallia 10.0.2.2:portti
// const baseUrl = 'http://10.0.2.2:3001/places'
const baseUrl = 'https://raspberrybackend.herokuapp.com/results'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  console.log(request.data)
  return request.data
}

export default { getAll }
