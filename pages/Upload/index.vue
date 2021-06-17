<template>
  <div>
    <NavBar />
    <b-container fluid class="container">
      <h1 class="title">
        Drop Image(s) Here
      </h1>
      <div class="mt-5">
        <b-col md="8" offset-md="2">
          <dropzone id="dropzone" ref="el" :options="options" :destroy-dropzone="true" />
          <div class="mt-5">
            <b-row>
              <b-col md="4">
                <b-button href="/" variant="outline-danger">
                  BACK
                </b-button>
              </b-col>
              <b-col md="4" offset-md="4" align="right">
                <b-button href="/detections" variant="danger">
                  PROCESS
                </b-button>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </div>
    </b-container>
  </div>
</template>

<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
import NavBar from '~/components/NavBar'

export default {
  components: {
    Dropzone,
    NavBar
  },
  data () {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: 'http://httpbin.org/anything'
      }
    }
  }
}
</script>

<style>
  .logo {
    width: 160px;
    margin-top: 24px;
  }
  .title {
    text-align:center;
    margin-top:48px;
  }
  #dropzone {
    height:300px;
  }
  .dropzone .dz-message {
    text-align: center;
    margin: 7em 0;
}
</style>
