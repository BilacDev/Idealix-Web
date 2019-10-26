<template>
  <div class="login-view">
    <div class="login-view__logo-content">
      <h1>iDealix</h1>
    </div>
    <div class="login-view__form-content">
      <div class="login-view__form-card">

        <transition name="fade">
          <form v-if="externalTab === 'LOGIN'" novalidate class="md-layout" @submit.prevent="validateUser">
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
            <span>Não possui uma conta? <a @click="externalTab = 'REGISTER'">Cadastre-se agora mesmo</a></span>
          </form>
        </transition>

        <transition name="fade">
          <form v-if="externalTab === 'REGISTER'" novalidate class="md-layout" @submit.prevent="validateUser">
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
              <md-checkbox v-model="remember" class=" md-raised md-primary">Li e aceito os <a @click="externalTab = 'TERMS'">Termos de Uso</a></md-checkbox>
              <md-button class="md-raised md-primary">Cadastrar</md-button>
            </div>
            <span>Ja possui uma conta? <a @click="externalTab = 'LOGIN'">Clique aqui para acessar</a></span>
          </form>
        </transition>

        <transition name="fade">
          <div v-if="externalTab === 'TERMS'">
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Casamentiss faiz malandris se pirulitá. Aenean aliquam molestie leo, vitae iaculis nisl. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
              Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Manduma pindureta quium dia nois paga. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis!
              Mé faiz elementum girarzis, nisi eros vermeio. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Quem num gosta di mé, boa gentis num é.
              Per aumento de cachacis, eu reclamis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
            </p>
            <div class="submits">
              <span></span>
              <md-button @click="externalTab = 'REGISTER'" class="md-primary">Voltar</md-button>
              <span></span>
            </div>
          </div>
        </transition>

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
    externalTab: 'LOGIN',
    formRules: {}
  }),
  methods: {
    submit () {
    }
  }
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

.login-view {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &__logo-content {
    width: 50%;
    height: 100%;
    background: linear-gradient(to right bottom, $--primary-color, $--secondary-color);
    h1 {
      color: white;
      font-weight: 400;
      margin: 20px;
    }
  }
  &__form-content {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__form-card {
    width: 400px;
    // height: auto;
    // max-height: 600px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-align: justify;
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
    }
  }
}
</style>
