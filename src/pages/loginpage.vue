<template>
<q-page class="bg-grey-3">
  <div class="row">
    <q-card class="fixed-center col-md-4 col-xs-12 bg-white"  flat>
     <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="Your Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="pass"
        label="Your Password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn to="/register" label="regis" type="submit" color="primary"/>
        <q-btn to="/halamanutama" label="home" type="submit" color="primary"/>
      </div>
          </q-form>
      </q-card>
  </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      username: null,
      pass: null
    }
  },

  methods: {
    onSubmit () {
      if (this.username === 'rudi' && this.pass === '123') {
        this.$q.notify({
          type: 'positive',
          message: 'yess'
        })
        this.$router.push('/home')
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'mampus lu ga bisa login,username/pasword salah'
        })
      }
    },

    onReset () {
      this.username = null
      this.pass = null
    }
  }
}
</script>
