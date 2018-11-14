<template>
  <div class="home">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs3>
          <v-card>
            <v-toolbar color="primary" class="white--text">
              <v-btn icon class="hidden-xs-only">
                <v-icon class="white--text">arrow_back</v-icon>
              </v-btn>
              <v-toolbar-title>Terminal overview</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon>
            </v-toolbar>
            <v-img
              src="http://www.nisas.ru/wp-content/uploads/2016/10/%D1%80%D0%BE%D1%82%D1%82-1200x857.jpg" aspect-ratio="2.75">
            </v-img>
            <v-card-title primary-title>
              <div>
                <div>Terminal name</div>
                <h5 class="mb-0">WEST</h5>
                <div>Country code</div>
                <h5 class="mb-0">NLD</h5>
                <div>Address</div>
                <h5 class="mb-0">Rotterdam<i class="fas fa-map-marker-alt"></i></h5>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs9>
          <div class="secondBar">
            <v-toolbar>
              <v-toolbar-items>
                <v-btn flat>DASHBOARD</v-btn>
                <v-btn flat v-bind:class="{ active: activeButton }"
                       v-on:click="activeButton = !activeButton">
                  ASSET HEALTH</v-btn>
                <v-btn flat>WORK ORDERS</v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </div>
        </v-flex>
      </v-layout>
    </v-container>


  </div>
</template>

<script>


export default {
  name: 'home',
  // data: function () {
  //   return activeButton = false;
  // }
}
</script>
<style>
  .home .container{
    padding: 0;
  }
  .secondBar .v-toolbar__content{
    height: 50px !important;
    background-color: #ffffff;
    border-bottom: 1px solid #bfbfbf;
    border-top: 1px solid #bfbfbf;
   }
  .secondBar .v-toolbar{
    box-shadow: none;
  }
  .activeButton{
    color: blue;
  }

</style>
<style scoped>
  .v-toolbar__title{
    font-size: 15px;
  }
  .v-toolbar__title:not(:first-child){
    margin-left: 0px;
  }
  .container.grid-list-md .layout .flex{
    padding-right: 0;
    padding-left: 0;
  }
  .activeButton{
    color: blue;
  }
</style>