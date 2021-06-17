import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDqddTCNwf5pjmZ5szacmT7kxlR-YvItX4',
    libraries: 'places'
  }
})
