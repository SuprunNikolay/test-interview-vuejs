<template>
  <div class="asset">
    <div class="assetFirstInfo">
      <v-toolbar color="#4a90e2" class="white--text">
        <div class="textInfo">
          Asset overview
          <i class="fas fa-arrow-right"></i>
          <i class="far fa-dot-circle"></i>
          Master-station 1-1
          <i class="fas fa-map-marker-alt"></i>
        </div>
      </v-toolbar>
    </div>
    <div class="assetBar">
      <v-toolbar>
        <v-toolbar-items>
          <v-btn flat>Events</v-btn>
          <v-btn flat>Position</v-btn>
          <v-btn flat>Travel time</v-btn>
          <v-btn flat v-bind:class="{ active: isActive }" v-on:click="isActive = !isActive">
            <router-link to="asset-health/torque-profile/21">
              Torque profile
            </router-link>
          </v-btn>
          <v-btn flat>Work orders</v-btn>
          <v-btn flat>Alarm analytics</v-btn>


        </v-toolbar-items>
      </v-toolbar>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>

</template>
<script>
  export default {
    name: "AssetHealth",
    data() {
      return {
        isActive: false
      }
    }
  }

</script>
<style>
  .firstInfo .v-toolbar__content{
    height: 60px;
  }
  .assetBar .v-toolbar__content{
    height: 50px !important;
    background-color: #ffffff;
    border-bottom: 1px solid #bfbfbf;
    border-top: 1px solid #bfbfbf;
  }
  .assetBar .v-toolbar{
    box-shadow: none;
  }
  .fa-arrow-right{
    padding: 0 7px;
  }
  .fa-dot-circle{
    padding: 0 4px 0 7px;
  }
  .fa-map-marker-alt{
    float: right;
  }
  .textInfo{
    width: 100%;
    text-align: left;
  }
</style>