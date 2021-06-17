<template>
  <div>
    <NavBar />
    <b-container fluid class="container">
      <b-row>
        <b-col>
          <div class="symbols-container">
            <div class="mb-3">
              Detections Found
            </div>
            <b-col md="2">
              <img class="droneaid-symbol" src="symbols/icon-sos.png" alt="">
              <div class="text-center">
                1
              </div>
            </b-col>
          </div>
          <scale-loader
            class="scale-loader"
            color="red"
            :loading="false"
            :height="80"
            :width="5"
            :radius="100"
          />
          <img class="detected-image" src="mariana.jpg">
          <div class="button-toolbar">
            <b-row>
              <b-col md="6">
                <b-button href="/upload" variant="outline-danger">
                  BACK
                </b-button>
              </b-col>
              <b-col md="6" align="right">
                <b-dropdown id="model-dropdown" text="CHANGE MODEL" class="m-md-2" variant="danger">
                  <b-dropdown-item active>
                    DroneAid Symbol Language
                  </b-dropdown-item>
                  <b-dropdown-item>Natural S.O.S.</b-dropdown-item>
                  <b-dropdown-item>Flooded Roads</b-dropdown-item>
                </b-dropdown>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col class="map-column">
          <b-row class="exif-data-container mb-5">
            <b-col>
              <b-row class="mb-4">
                DJI Mavic Pro
              </b-row>
              <b-row>
                <img src="drones/dji-mavic-pro.jpg" alt="" class="drone-icon">
              </b-row>
            </b-col>
            <b-col class="text-center">
              <b-row class="mb-4">
                Timestamp
              </b-row>
              <b-row>
                10/7/2017
              </b-row>
              <b-row>
                3:24pm (UTC)
              </b-row>
            </b-col>
            <b-col class="text-center">
              <b-row class="mb-4">
                Location
              </b-row>
              <b-row>
                Humacao, PR
              </b-row>
              <b-row>
                <small>(18.1249958, -65.8870485)</small>
              </b-row>
            </b-col>
          </b-row>
          <b-row>
            <GmapMap
              :center="{lat:18.1249958, lng:-65.8870485}"
              :zoom="14"
              style="width: 540px; height:436px; margin-top:14px"
              :options="{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: true,
                disableDefaultUi: false
              }"
            >
              <GmapMarker
                v-for="(m, index) in markers"
                :key="index"
                :position="m.position"
                :clickable="true"
                :icon="m.icon"
                @click="center=m.position"
              />
            </GmapMap>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { ScaleLoader } from '@saeris/vue-spinners'
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar,
    ScaleLoader
  },
  data () {
    return {
      markers: [
        {
          position: {
            lat: 18.1249958,
            lng: -65.8870485
          },
          icon: 'marker-sos.png'
        }
      ]
    }
  }
}
</script>

<style>
.detected-image {
  width: 100%;
  padding: 24px;
}
.map-column {
  padding: 24px;
}
.button-toolbar {
  padding: 0 24px;
}
.scale-loader {
  text-align: center;
}
.symbols-container {
  padding:16px;
  height: 80px;
  margin-top:4px;
  margin-bottom: 64px;
}
.exif-data-container {
  height: 80px;
  margin-top:4px;
}
.droneaid-symbol {
  padding:4px;
  width: 64px;
}
.drone-icon {
  width: 80px;
  text-align: center
}
</style>
