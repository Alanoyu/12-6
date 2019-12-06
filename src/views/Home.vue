<template>
  <div class="home">
   <div class="home-main">
     <router-view></router-view>
   </div>
   <div class="home-footer">
     <router-link v-for="(item,index) in list" :key="index" :to="item.path" tag="span">{{item.title}}</router-link>
   </div>
  </div>
</template>

<script>

export default {
 data(){
   return{
     list:[{
       path:'/page',
       title:"首页"
     },{
       path:"/about",
       title:"我的"
     }]
   }
 }
}
</script>
<style lang="scss">
.home{
  display:flex;
  flex-direction: column;
  .home-main{
    flex:1;
    overflow:auto;
  }
  .home-footer{
    height: 40px;
    display: flex;
    span{
      flex:1;
      text-align: center;
    }
  }
}
</style>
