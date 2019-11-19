<template>
  <div class="terms-view">
    <h1>Termos de uso</h1>
    <md-content class="terms-view__content md-scrollbar">
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Casamentiss faiz malandris se pirulitá. Aenean aliquam molestie leo, vitae iaculis nisl. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
        Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Manduma pindureta quium dia nois paga. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis!
        Mé faiz elementum girarzis, nisi eros vermeio. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Quem num gosta di mé, boa gentis num é.
        Per aumento de cachacis, eu reclamis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
      </p>
    </md-content>
    <md-button to="/register" class="terms-view__goback md-primary">Voltar</md-button>
  </div>
</template>

<script>
export default {
  name: 'Terms',
  beforeMount () {
    if (this.$store.getters.isLoggedIn) this.$store.dispatch('logout')
  }
}
</script>

<style lang="scss">
@import '../../../styles/variables.scss';

.terms-view {
  &__content.md-content {
    overflow: auto;
    max-height: 400px;
    text-align: justify;
    background-color: $--background;
    p {padding-right: 8px; margin: 0px}
  }
  &__goback {
    float: right;
    margin: 20px 0 0 0;
  }
}

</style>
