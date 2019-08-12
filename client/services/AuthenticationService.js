import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials) //Envoie la requette vers le serveur avec le endPoint register
  }
}
