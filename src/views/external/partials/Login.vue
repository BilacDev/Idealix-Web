<template>
  <form class="login-view" @submit.prevent="validateUser" novalidate>
    <h1>Login</h1>
    <md-field>
      <label for="email">E-mail</label>
      <md-input type="email" name="email" id="email" autocomplete="email" v-model="loginForm.email" :disabled="isSending" />
    </md-field>
    <md-field>
      <label for="password">Senha</label>
      <md-input type="password" name="password" id="password" v-model="loginForm.password" :disabled="isSending" />
    </md-field>
    <div class="login-view__submit">
      <md-checkbox v-model="isRemember" class="md-raised md-primary" :disabled="isSending">Lembre-se de mim</md-checkbox>
      <md-button class="md-raised md-primary" @click="validateLogin" :disabled="isSending">Entrar</md-button>
    </div>
    <span class="login-view__switch">Não possui uma conta? <router-link to="/register">Cadastre-se agora mesmo</router-link></span>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    loginForm: {
      email: '',
      password: ''
    },
    formRules: {},
    isRemember: false,
    isSending: false
  }),
  methods: {
    validateLogin () {

    }
  },
  beforeMount () {
    this.$store.dispatch('logout')
  }
}
</script>

<style lang="scss">
.login-view {
  &__submit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .md-button {margin: 0;}
  }
  &__switch {
    display: block;
    text-align: center;
    margin-top: 40px;
  }
}
</style>
