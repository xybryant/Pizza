<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="historyLink"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="guideLink"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="deliveryLink"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  export default {
    name: 'app',
    data () {
      return {
        
      }
    },
    components: {
      'app-header': Header
    }
  }
</script>

<style>
[v-cloak] {
  display: none;
}
/*a {
  color: #42b983;
}*/
</style>
