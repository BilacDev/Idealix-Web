<template>
  <form class="register-view" novalidate @submit.prevent="validateUser">
    <h1>Cadastre-se</h1>
    <md-field>
      <label for="first-name">Nome</label>
      <md-input name="name" id="name" autocomplete="name" v-model="registerForm.name" :disabled="isSending" />
    </md-field>
    <md-field>
      <label for="email">E-mail</label>
      <md-input type="email" name="email" id="email" autocomplete="email" v-model="registerForm.email" :disabled="isSending" />
    </md-field>
    <md-field>
      <label for="password">Senha</label>
      <md-input type="password" name="password" id="password" v-model="registerForm.password" :disabled="isSending" />
    </md-field>
    <div class="register-view__submit">
      <md-checkbox v-model="registerForm.accepted" class="md-raised md-primary" :disabled="isSending">Li e aceito os <router-link to="/terms">Termos de Uso</router-link></md-checkbox>
      <md-button class="md-raised md-primary" @click="createAccount" :disabled="isSending">Cadastrar</md-button>
    </div>
    <span class="register-view__switch">Ja possui uma conta? <router-link to="/login">Clique aqui para acessar</router-link></span>
  </form>
</template>

<script>
export default {
  name: 'Register',
  data: () => ({
    registerForm: {
      name: '',
      email: '',
      password: '',
      accepted: false
    },
    formRules: {},
    isSending: false
  }),
  beforeMount () {
    if (this.$store.getters.isLoggedIn) this.$store.dispatch('logout')
  },
  methods: {
    createAccount () {
      this.isSending = true
      this.$store.dispatch('register', this.registerForm)
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

<style lang="scss">
.register-view {
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
