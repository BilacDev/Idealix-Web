<template>
  <form
    class="register-view"
    novalidate
    @submit.prevent="validateUser">
    <h1 class="external-view__title">Cadastre-se</h1>

    <md-field>
      <label for="first-name">Nome</label>
      <md-input
        v-model="registerForm.name"
        :disabled="isSending"
        id="name"
        name="name"
        autocomplete="name" />
    </md-field>

    <md-field>
      <label for="email">E-mail</label>
      <md-input
        v-model="registerForm.email"
        :disabled="isSending"
        id="email"
        name="email"
        type="email"
        autocomplete="email" />
    </md-field>

    <md-field>
      <label for="password">Senha</label>
      <md-input
        v-model="registerForm.password"
        :disabled="isSending"
        id="password"
        name="password"
        type="password" />
    </md-field>

    <div class="external-view__submit">
      <md-checkbox
        v-model="registerForm.accepted"
        :disabled="isSending"
        class="md-raised md-primary">
        Li e aceito os
        <router-link to="/terms">Termos de Uso</router-link>
      </md-checkbox>
      <md-button
        :disabled="isSending"
        class="md-raised md-primary"
        @click="createAccount">
        Cadastrar
      </md-button>
    </div>

    <span class="external-view__switch-link">
      Ja possui uma conta?
      <router-link to="/login">
        Clique aqui para acessar
      </router-link>
    </span>
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
