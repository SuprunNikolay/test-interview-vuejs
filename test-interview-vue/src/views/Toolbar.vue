<template>
  <v-toolbar>
    <v-toolbar-title><h5>Predictive maintenance</h5></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat>
      <div class="name">
        John Galt
      </div>
      <i class="fas fa-angle-down"></i></v-btn>
    <v-btn flat><i class="fas fa-power-off"></i></v-btn>
  </v-toolbar>
</template>
<script>
  export default {
    name: "Toolbar"
  }
</script>
<style scoped>
  .v-toolbar__title{
    margin-left: 50px !important;
    border-left: 1px solid black;
    padding-left: 20px;
  }
  .v-toolbar__title h5{
    color: #9b9b9b;
    padding: 7px 0;
  }
  .name{
    padding-right: 10px;
    text-transform: capitalize;
  }
</style>