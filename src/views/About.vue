<template>
  <div class="about">
      <ul v-for="item in allList" :key="item.id">
        <li>{{item.name}}</li>
      </ul>
  </div>
</template>
<script>
import {mapState,mapActions} from "vuex";
export default {
  computed:{
    ...mapState(['allList'])
  },
 created(){
this.getList()
 },
 methods:{
   ...mapActions(['getList'])
 }
}
</script>
