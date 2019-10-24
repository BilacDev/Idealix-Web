<template>
  <div class="login-view">
    <h1>Idealix</h1>

    <div v-if='isLogin' class="login-view__form-content">
      <h1>Login</h1>
      <!-- <v-form v-model="valid">
        <v-text-field
          v-model="email"
          :rules="formRules"
          label="E-mail"
          required />
        <v-text-field
          v-model="password"
          :rules="formRules"
          label="Senha"
          required />
      </v-form>
      <v-btn @click="submitLogin">Entrar</v-btn> -->
      <div @click="isLogin = !isLogin">Não possui uma conta? Clique aqui e Registre-se</div>
    </div>

    <div v-if='!isLogin' class="login-view__form-content">
      <h1>Registro</h1>
      <!-- <v-form v-model="valid">
          <v-text-field
            v-model="name"
            :rules="formRules"
            label="Nome"
            required />
          <v-text-field
            v-model="email"
            :rules="formRules"
            label="E-Mail"
            required />
          <v-text-field
            v-model="password"
            :rules="formRules"
            label="Senha"
            required />
      </v-form>
      <v-btn @click="submit">Registrar</v-btn> -->
      <div @click="isLogin = !isLogin">Já possui uma conta? Clique aqui e faça Login</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    name: '',
    email: '',
    password: '',
    isLogin: true,
    formRules: {}
  }),
  methods: {
    submit () {
    }
  }
}
</script>

<style lang="scss">
.login-view {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  &__form-content {
    display: flex;
    flex-direction: column;
  }
}
</style>
