<template>
  <div>
    <b-container fluid class="container">
      <b-row class="container-chooseModel">
        <b-col>
          <b-card
            title="DroneAid Symbols"
            img-src="symbols.png"
            img-alt="DroneAid Symbols"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 model"
            align="center"
          >
            <b-card-text>
              Detect icons from the DroneAid Symbols Language.
            </b-card-text>

            <b-button href="/upload" variant="danger">
              SELECT
            </b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Natural S.O.S."
            img-src="sos-mariana.jpg"
            img-alt="Natural S.O.S."
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 model"
            align="center"
          >
            <b-card-text>
              Detect S.O.S. signs written with chalk, paint, twigs and logs.
            </b-card-text>

            <b-button v-b-tooltip.hover href="#" variant="danger" title="Coming Soon">
              SELECT
            </b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Flooded Roads"
            img-src="floodedroad.jpg"
            img-alt="Flooded Roads"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 model"
            align="center"
          >
            <b-card-text>
              Classify an image of a road as flooded or safe.
            </b-card-text>

            <b-button v-b-tooltip.hover href="#" variant="danger" title="Coming Soon">
              SELECT
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ChooseModel'
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
  .container-chooseModel {
    margin-top: 48px;
  }
  .model:hover {
    outline-style: solid;
    outline-color: red;
    outline-width: thin;
  }
  .model-unavailable {
    background-color: rgba(0,0,0,0.5);
  }
</style>
