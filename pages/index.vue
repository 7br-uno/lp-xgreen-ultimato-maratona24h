<template>
  <div class="principal">
    <TopBar/>
    <ConteudoComponent/>
    <MyFooter />
  </div>
</template>

<script>
 import TopBar from '@/src/components/TopBar.vue'
 import ConteudoComponent from '@/src/components/Conteudo.vue'
 import MyFooter from '@/src/components/myFooter'

  export default {
    components:{
      TopBar,
      ConteudoComponent,
      MyFooter
    },
    
  }
</script>

<style>
  .principal{
    background-color: #000100;
    width: 100%;
  }
</style>