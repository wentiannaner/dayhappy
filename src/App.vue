<template>
  <div id="app">
    <div class="wrap">
      <router-view/>
    </div>
    <Tabnav v-if="false"/>
  </div>
</template>

<style>
#app{
  display: flex;
  flex-direction: column;
}
.wrap{
  flex:1;
}
</style>
<script>
import Tabnav from './views/table/Tabnav'
export default {
  data(){
      return{
        flag:false
      }
  },
  components:{
        Tabnav
  }
}
</script>
