<template>
  <div>
    <h1>Register</h1>

    <input
      type="email"
      name="email"
      placeholder="email"
      v-model="email"
    >
    <br>
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password"
    >
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      email: "",
      password: ""
    }
  },

  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data); //On renvoie la reponse lorsqu'elle est rendue disponnible par async await
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email changed', value);
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'HelloWorld'
  //   }, 2000)
  // }
}
</script>

<style scoped>
</style>
