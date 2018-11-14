<template>
  <v-app>
    <Toolbar/>
    <router-view/>
  </v-app>
</template>

<script>
  import Toolbar from './views/Toolbar'

  export default {
    name: 'App',
    components:{
      Toolbar
    },
  }
</script>

<style>

</style>
