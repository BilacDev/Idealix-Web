<template>
  <div class="login-view">
    <div class="login-view__logo-content">
      <h1>iDealix</h1>
    </div>

    <div class="login-view__form-content">
      <md-tabs md-alignment="fixed">
        <md-tab id="tab-home" md-label="Login">

          <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-field>
              <label for="email">Email</label>
              <md-input type="email" name="email" id="email" autocomplete="email" v-model="email" :disabled="sending" />
            </md-field>
            <md-field>
              <label for="password">Password</label>
              <md-input type="password" name="password" id="password" v-model="password" :disabled="sending" />
            </md-field>
            <md-button class="md-raised md-primary">Primary</md-button>
          </form>

        </md-tab>
        <md-tab id="tab-pages" md-label="Register">

          <form novalidate class="md-layout" @submit.prevent="validateUser">
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
            <md-button class="md-raised md-primary">Primary</md-button>
          </form>

        </md-tab>
      </md-tabs>
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
  width: 100vw;
  height: 100vh;
  &__logo-content {
    height: 100%;
    width: 50%;
    display: flex;
    background: linear-gradient(to right bottom, #78475f, #4e7495);
    h1 {
      color: white;
      font-weight: 400;
      letter-spacing: 1px;
      font-size: 30px;
      line-height: 30px;
      margin: 20px;
    }
  }
  &__form-content {
    // box-shadow: 0px 0px 8px 0px rgba(#000000, 0.64);
    width: 50%;
    border-radius: 4px;
    padding: 32px;
    background: rgba(255, 255, 255, 1);
  }
}
</style>
