import axios from 'axios'
const HOST = 'https://demo-api.vsdev.space'

export const getters = {
  getMainPage: async () => {
    try {
      return await axios.get(`${HOST}/api/delivery/home_page`)
    } catch (e) {
      console.log(e)
    }
  },
  getAboutPage: async () => {
    try {
      return await axios.get(`${HOST}/api/delivery/about_page`)
    } catch (e) {
      console.log(e)
    }
  },
  getWidget: async () => {
    return await axios.get(`${HOST}/api/delivery/left_widget`)
  },
  getForm: async () => {
    return await axios.get(`${HOST}/api/delivery/sales/form`)
  },
  getDel: async () => {
    return await axios.get(`${HOST}/api/delivery/sales`)
  },
}
