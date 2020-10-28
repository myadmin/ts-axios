import Axios from './core/Axios'
import { AxiosInstance } from './types'
import { extend } from './helpers/util'

function createInatsnce(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInatsnce()

export default axios
