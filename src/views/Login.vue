<template>
  <div class="login-view">
    <div class="login-view__logo elevation">
      <h1>iDealix</h1>
    </div>
    <div class="login-view__content">

        <transition name="fade">
          <form v-if="externalTab === 'LOGIN'" class="login-view__form" @submit.prevent="validateUser" novalidate>
            <h1>Login</h1>
            <md-field>
              <label for="email">E-mail</label>
              <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="isSending" />
            </md-field>
            <md-field>
              <label for="password">Senha</label>
              <md-input type="password" name="password" id="password" v-model="form.password" :disabled="isSending" />
            </md-field>
            <div class="login-view__form--submit">
              <md-checkbox v-model="remember" class=" md-raised md-primary" :disabled="isSending">Lembre-se de mim</md-checkbox>
              <md-button class="md-raised md-primary" @click="validateLogin" :disabled="isSending">Entrar</md-button>
            </div>
            <span>Não possui uma conta? <a @click="externalTab = 'REGISTER'">Cadastre-se agora mesmo</a></span>
          </form>
        </transition>

        <transition name="fade">
          <form v-if="externalTab === 'REGISTER'" class="login-view__form" novalidate @submit.prevent="validateUser">
            <h1>Cadastre-se</h1>
            <md-field>
              <label for="first-name">Nome</label>
              <md-input name="name" id="name" autocomplete="name" v-model="form.name" :disabled="isSending" />
            </md-field>
            <md-field>
              <label for="email">E-mail</label>
              <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="isSending" />
            </md-field>
            <md-field>
              <label for="password">Senha</label>
              <md-input type="password" name="password" id="password" v-model="form.password" :disabled="isSending" />
            </md-field>
            <div class="login-view__form--submit">
              <md-checkbox v-model="remember" class="md-raised md-primary" :disabled="isSending">Li e aceito os <a @click="externalTab = 'TERMS'">Termos de Uso</a></md-checkbox>
              <md-button class="md-raised md-primary" @click="createAccount" :disabled="isSending">Cadastrar</md-button>
            </div>
            <span>Ja possui uma conta? <a @click="externalTab = 'LOGIN'">Clique aqui para acessar</a></span>
          </form>
        </transition>

        <transition name="fade">
          <div v-if="externalTab === 'TERMS'" class="login-view__form">
            <h1>Termos de uso</h1>
            <md-content class="md-scrollbar">
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Casamentiss faiz malandris se pirulitá. Aenean aliquam molestie leo, vitae iaculis nisl. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
                Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Manduma pindureta quium dia nois paga. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis!
                Mé faiz elementum girarzis, nisi eros vermeio. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Quem num gosta di mé, boa gentis num é.
                Per aumento de cachacis, eu reclamis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
              </p>
            </md-content>
            <md-button @click="externalTab = 'REGISTER'" class="md-primary">Voltar</md-button>
          </div>
        </transition>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    externalTab: 'LOGIN',
    form: {
      name: '',
      email: '',
      password: ''
    },
    formRules: {},
    remember: false,
    isSending: false
  }),
  methods: {
    createAccount () {

    },
    validateLogin () {

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
  &__logo {
    width: 50%;
    height: 100%;
    background: linear-gradient(to right bottom, $--primary-color, $--secondary-color);
    h1 {
      margin: 30px 16px;
      color: $--white;
      font-weight: 400;
    }
  }
  &__content {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {margin-bottom: 40px;}
  }
  &__form {
    width: 400px;
    &--submit {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    > span {
      display: block;
      text-align: center;
      margin-top: 40px;
    }
    > button {
      float: right;
      margin-top: 20px;
    }
    .md-content {
      max-height: 400px;
      text-align: justify;
      overflow: auto;
      background-color: $--background;
      p {padding-right: 8px; margin: 0px}
    }
  }
}
</style>
