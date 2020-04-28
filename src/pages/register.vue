<template>
  <q-page>
     <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-card class="fixed-center col-md-4 col-xs-12 bg-white"  flat>
          <q-input
        filled
        v-model="name"
        label="Your name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="NIK"
        label="Your gmail"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="NPM"
        label="Nama Kampus"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="age"
        label="Umur"
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
        <q-btn label="Submit" type="submit" color="primary" to="/"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      username: null,
      pass: null,
      NPM: null,
      name: null,
      NIK: null,
      age: null
    }
  },

  methods: {
    onSubmit () {
      console.log('Ini Fungsi Submit')
    },

    onReset () {
      this.username = null
      this.pass = null
    }
  }
}
</script>
