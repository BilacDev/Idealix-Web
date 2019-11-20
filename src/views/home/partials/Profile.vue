<template>
  <div id="">

  </div>
</template>
<script>
export default {
  name: 'Profile',
  data: () => ({
    editProfileForm: {
      id: 0,
      name: '',
      email: '',
      picture: '',
      password: ''
    }
  }),
  computed: {
    responsableInfo: {
      get () {
        return this.$store.getters.responsableInfo
      },
      set (responsableInfo) {
        this.editProfileForm.id = responsableInfo.id
        this.editProfileForm.name = responsableInfo.name
        this.editProfileForm.email = responsableInfo.email
        this.editProfileForm.picture = responsableInfo.picture
        this.editProfileForm.password = ''
      }
    }
  },
  beforeMount () {
    this.editProfileForm = this.responsableInfo
  },
  methods: {
    editProfile () {
      this.$store.dispatch('editProfile', this.editProfileForm)
        .then(() => {

        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
<style lang="scss">
</style>
