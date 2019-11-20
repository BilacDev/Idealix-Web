<template>
  <div id="">

  </div>
</template>
<script>
export default {
  name: 'Profile',
  data: () => ({
    profileData: {
      id: 0,
      name: '',
      email: '',
      picture: ''
    }
  }),
  computed: {
    userInfo: {
      get: function () {
        return this.$store.getters.responsableData
      },
      set: function (userInfo) {
        this.profileData.id = userInfo.id
        this.profileData.name = userInfo.name
        this.profileData.email = userInfo.email
        this.profileData.picture = userInfo.picture
      }
    }
  },
  beforeMount () {
    this.userInfo = this.userInfo
  },
  methods: {
    editProfile () {
      this.$store.dispatch('editProfile', this.profileData)
        .then(() => {

        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
