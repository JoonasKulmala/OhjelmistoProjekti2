import axios from 'axios'
// ilmeisesti android-emulaattoria käytettäessä urlin oltava mallia 10.0.2.2:<portti>
const baseUrl = 'http://10.0.2.2:<3001>/places'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

export default { getAll }
