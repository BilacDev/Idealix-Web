<template>
  <form
    class="register-view"
    novalidate
    @submit.prevent="handleCreateAccount">
    <h1 class="external-view__title">Cadastre-se</h1>

    <md-field>
      <label for="first-name">Nome</label>
      <md-input
        v-model="registerForm.name"
        id="name"
        name="name"
        autocomplete="name" />
    </md-field>

    <md-field>
      <label for="email">E-mail</label>
      <md-input
        v-model="registerForm.email"
        id="email"
        name="email"
        type="email"
        autocomplete="email" />
    </md-field>

    <md-field>
      <label for="password">Senha</label>
      <md-input
        v-model="registerForm.password"
        id="password"
        name="password"
        type="password" />
    </md-field>

    <div class="external-view__submit">
      <md-checkbox
        v-model="registerForm.accepted"
        class="md-raised md-primary">
        Li e aceito os
        <router-link to="/terms">Termos de Uso</router-link>
      </md-checkbox>
      <md-button
        class="md-raised md-primary"
        @click="handleCreateAccount">
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
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data: () => ({
    registerForm: {
      name: '',
      email: '',
      password: '',
      accepted: false
    }
  }),
  methods: {
    ...mapActions(['createAccount']),

    handleCreateAccount () {
      this.createAccount(this.registerForm)
    }
  }
}
</script>
