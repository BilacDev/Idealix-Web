<template>
  <div class="login-view">
    <h1>Idealix</h1>
    <div v-show='isLogin' class="login-view__form-content">
      <h1>Login</h1>

      <v-form v-model="valid">
        <v-text-field
          v-model="userName"
          :rules="nameRules"
          label="Usuário"
          required />
        <v-text-field
          v-model="userPassword"
          :rules="nameRules"
          label="Senha"
          required />
      </v-form>
      <v-btn @click="submitLogin">Entrar</v-btn>
      <div @click="isLogin = !isLogin">registro</div>
    </div>
    <div v-show='!isLogin' class="login-view__form-content">
      <h1>Registro</h1>

      <v-form v-model="valid">
          <v-text-field
            v-model="userName"
            :rules="nameRules"
            label="Usuário"
            required />
          <v-text-field
            v-model="userPassword"
            :rules="nameRules"
            label="Senha"
            required />
          <v-text-field
            v-model="userEmail"
            :rules="nameRules"
            label="E-mail"
            required />
      </v-form>
      <v-btn @click="submitRegister">Registrar</v-btn>
      <div @click="isLogin = !isLogin">Login</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      isLogin: true
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
