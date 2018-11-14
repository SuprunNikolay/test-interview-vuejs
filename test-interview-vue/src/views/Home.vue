<template>
  <div class="home">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs3>
          <v-card>
            <v-toolbar color="#4a90e2" class="white--text">
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
                <h3 class="mb-0">WEST</h3>
                <div>Country code</div>
                <h3 class="mb-0">NLD</h3>
                <div>Address</div>
                <h3 class="mb-0">Rotterdam<i class="fas fa-map-marker-alt"></i></h3>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs9>
          <div class="secondBar">
            <v-toolbar>
              <v-toolbar-items>
                <v-btn flat><a href="#">DASHBOARD</a></v-btn>

                  <v-btn flat v-bind:class="{ active: isActive }" v-on:click="isActive = !isActive">
                    <router-link to="/asset-health" class="tab">
                    ASSET HEALTH
                    </router-link>
                  </v-btn>

                  <v-btn flat><a href="#">WORK ORDERS</a></v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </div>
          <div class="content">
            <router-view/>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>


export default {
  name: 'home',
  data() {
    return {
      isActive: false
    }
  }
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
  .active{
    color: #4a90e2 !important;
    border-bottom: 2px solid #4a90e2;
  }
  .application a{
    display: flex;
    text-decoration: none;
    color: inherit;
  }
  .home .v-card__title{
    text-align: left;
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

  .content{
    padding: 20px;
  }
</style>