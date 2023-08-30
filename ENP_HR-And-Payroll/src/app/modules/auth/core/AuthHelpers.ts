import {AuthModel} from './_models'

const AUTH_LOCAL_STORAGE_KEY = 'token'
const AccessKey = 'accessToken'
const TenantKey = 'tenant'
const getAuth = (): AuthModel | undefined => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)
  if (!lsValue) {
    return
  }

  try {
    const auth: AuthModel = JSON.parse(lsValue) as AuthModel
    if (auth) {
      // You can easily check auth_token expiration also
      return auth
    }
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
  }
}
const getTenant = (): any | undefined => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(TenantKey)
  if (!lsValue) {
    return
  }

  try {
    const tenant: any = lsValue
    if (tenant) {
      return tenant
    }
  } catch (error) {
    console.error('TENANT LOCAL STORAGE PARSE ERROR', error)
  }
}

const setAuth = (auth: AuthModel) => {
  if (!localStorage) {
    return
  }
  
  try {
    const lsValue = JSON.stringify(auth)
    const tok = JSON.stringify(auth.jwtToken)
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, lsValue)
     //here I am saving the jwtToken of the login user
     localStorage.setItem(AccessKey, tok)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
  }
}

const setTenant = (tenant: any) => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.setItem(TenantKey, tenant)
  } catch (error) {
    console.error('TENANT LOCAL STORAGE SAVE ERROR', error)
  }
}

const removeAuth = () => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)
    localStorage.removeItem(TenantKey)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error)
  }
}

export function setupAxios(axios: any) {
  axios.defaults.headers.Accept = 'application/json'
  axios.interceptors.request.use(
    (config: {headers: {Authorization: string}}) => {
      const auth = getAuth()
      if (auth && auth.jwtToken) {
        config.headers.Authorization = `Bearer ${auth.jwtToken}`
      }
      return config
    },
    (err: any) => Promise.reject(err)
  )
}

export {getAuth, setAuth, removeAuth ,setTenant, getTenant, AUTH_LOCAL_STORAGE_KEY,TenantKey}
