<template>
  <form
    class="login-view"
    @submit.prevent="validateUser"
    novalidate>
    <h1 class="external-view__title">Login</h1>

    <md-field>
      <label for="email">E-mail</label>
      <md-input
        v-model="loginForm.email"
        :disabled="isSending"
        id="email"
        name="email"
        type="email"
        autocomplete="email" />
    </md-field>

    <md-field>
      <label for="password">Senha</label>
      <md-input
        v-model="loginForm.password"
        :disabled="isSending"
        id="password"
        name="password"
        type="password" />
    </md-field>

    <div class="external-view__submit">
      <md-checkbox
        v-model="loginForm.isRemember"
        :disabled="isSending"
        class="md-raised md-primary">
        Lembre-se de mim
      </md-checkbox>
      <md-button
        :disabled="isSending"
        class="md-raised md-primary"
        @click="doLogin">
        Entrar
      </md-button>
    </div>

    <span class="external-view__switch-link">
      Não possui uma conta?
      <router-link to="/register">Cadastre-se agora mesmo</router-link>
    </span>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    loginForm: {
      email: '',
      password: '',
      isRemember: false
    },
    formRules: {},
    isSending: false
  }),
  beforeMount () {
    if (this.$store.getters.isLoggedIn) this.$store.dispatch('logout')
  },
  methods: {
    doLogin () {
      this.isSending = true
      this.$store.dispatch('login', this.loginForm)
        .then(() => {

        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          this.isSending = false
        })
    }
  }
}
</script>
