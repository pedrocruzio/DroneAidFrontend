<template>
  <div>
    <NavBar />
    <div>
      <h1 class="title">
        Object Detection Tool
      </h1>
    </div>
    <ChooseModel />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import ChooseModel from '~/components/ChooseModel'

export default {
  components: {
    ChooseModel,
    NavBar
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
</style>
