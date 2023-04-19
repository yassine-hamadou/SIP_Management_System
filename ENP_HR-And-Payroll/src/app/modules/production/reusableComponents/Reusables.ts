import axios from "axios"
import { Api_Endpoint } from "../../../services/ApiCalls"

export const deleteItem = async (endpoint: string, element: any, gridData: any) => {
    try {
     const response =  await axios.delete(`${Api_Endpoint}/${endpoint}/${element.id}`)
      const newData = gridData.filter((item: any) => item.id !== element.id)
      console.log('delete response: ', response.statusText)
      return newData
    } catch (e) {
        console.log('delete error: ', e)
      return gridData
    }
  }

export const loadDataFromApi = async (endpoint: string) => {
    try {
      const response = await axios.get(`${Api_Endpoint}/${endpoint}`)
      console.log(`Get ${endpoint} Response: `, response.statusText)
      return response.data
    } catch (error) {
      console.log(error)
      return {}
    }
  }