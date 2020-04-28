<template>
    <q-page>
        <div class="row">
            <div class="col">
                <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://www.ruangmuslimah.co/wp-content/uploads/2017/12/ukhti-1280x720.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
            </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="text-h1 text-bold">Daftar Seminar</div>

                </div>
            </div>
            <div class="row">
                <div class="col" style="height: 170px;max-width: 300px">
                    <q-card class="my-card">
      <img src="https://lh3.googleusercontent.com/proxy/5Js89AP4Ev3qclW1sANldBqbKQkX5QYooxE0hRKdKvYnKTP36kJ1fYUA5NOs5CZfXW2eE_LsQBUwuw6BALa5Dr8RGcP66fYhBf6N6gbmEbOAn34D5_aVF-wec2Gkx49dM-9kTj3DjxOX1g">

      <q-card-section>
        <div class="text-h6">Seminar nasional prodi teknik</div>
        <div class="text-subtitle2">by John Doe</div>
        <q-btn color="secondary" label="daftar" to="register"/>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
                </div>
            </div>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>
