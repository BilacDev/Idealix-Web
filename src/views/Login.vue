<template>
  <div class="login-view">
    <div class="login-view__logo-content">
      <h1>iDealix</h1>
    </div>
    <div class="login-view__form-content">
      <div class="login-view__form-card">

        <form v-if="isLogin" novalidate class="md-layout" @submit.prevent="validateUser">
          <h1>Login</h1>
          <md-field>
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="email" :disabled="sending" />
          </md-field>
          <md-field>
            <label for="password">Password</label>
            <md-input type="password" name="password" id="password" v-model="password" :disabled="sending" />
          </md-field>
          <div class="submits">
            <md-checkbox v-model="remember" class=" md-raised md-primary">Lembre-se de mim</md-checkbox>
            <md-button class="md-raised md-primary">Entrar</md-button>
          </div>
          <span>Não possui uma conta? <a @click="isLogin = !isLogin">Cadastre-se agora mesmo</a></span>
        </form>

        <form v-else novalidate class="md-layout" @submit.prevent="validateUser">
          <h1>Cadastre-se</h1>
          <md-field>
            <label for="first-name">Name</label>
            <md-input name="name" id="name" autocomplete="name" v-model="name" :disabled="sending" />
          </md-field>
          <md-field>
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="email" :disabled="sending" />
          </md-field>
          <md-field>
            <label for="password">Password</label>
            <md-input type="password" name="password" id="password" v-model="password" :disabled="sending" />
          </md-field>
          <div class="submits">
            <md-checkbox v-model="remember" class=" md-raised md-primary">Lembre-se de mim</md-checkbox>
            <md-button class="md-raised md-primary">Cadastrar</md-button>
          </div>
          <span>Ja possui uma conta? <a @click="isLogin = !isLogin">Clique aqui para acessar</a></span>
        </form>

      </div>
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
    remember: false,
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
  width: 100vw;
  height: 100vh;
  &__logo-content {
    height: 100%;
    width: 50%;
    background: linear-gradient(to right bottom, #78475f, #4e7495);
    h1 {
      color: white;
      font-weight: 400;
      margin: 20px;
    }
  }
  &__form-content {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__form-card {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 400px;
    h1 {
      margin-bottom: 40px;
    }

    .submits {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    span {
      width: 100%;
      text-align: center;
      margin-top: 60px;
      a {
        cursor: pointer;
        text-decoration: none !important;
      }
    }
  }
  .md-button {
    margin: 0;
  }
}
</style>
