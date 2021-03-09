import { AppState } from '../AppState'
import { apodAPI } from './AxiosService'

class APODService {
  async getPicFromDate (date) {
    const res = await apodAPI.get('?date=' + date + '&api_key=bD1nbFHevfXN2kd5rEVrEO0vytke4eMULwRlG2bN')
    AppState.apod_img_url = res.data.url
  }
}

export const apodService = new APODService()
