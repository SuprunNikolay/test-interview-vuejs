<template>
  <div class="torqueProfile">
    <template>
      <div v-if="!loading">
        <h3>Open</h3>
        <Open/>
        <h3>Close</h3>
        <Close/>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </template>
  </div>
</template>
<script>
  import Open from '../../../components/Open';
  import Close from '../../../components/Close';

  export default {
    name: "TorqueProfile",
    components: {
      Open,
      Close
    },
    data: function() {
      return {
        loading: false
      }
    }
  }
</script>
<style scoped>
  .torqueProfile{
    background-color: #ffffff;
    padding: 0 15px;
  }
  .torqueProfile h3{
    text-align: left;
    padding-top: 15px;
    padding-left: 50px;
  }
</style>