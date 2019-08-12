import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: "http://localhost:8081/" //Pointer le client (avec axios) vers l'adresse du serveur
  })
}
