<template>
  <header class="top-bar">
    <img class="logoImg" src="../assets/logo_maratona.png" alt="logo"/>
    <div class="boxWatch">
      <cronometro/>
    </div>
  </header>
</template>


<script>
import Cronometro from '@/src/components/Cronometro.vue'

export default {
  components:{
    Cronometro
  }
}
</script>

<style>
  .top-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1250px;
    margin: auto;
    max-width: 100%;
    padding: 20px 30px;
  }

  .logoImg{
    width: 330px;
    max-width: 100%;
    margin-right: 20px;
  }

  .boxWatch{
    background-color: #00FF48;
    padding: 10px;
    height: 110px;
    width: 320px;
    max-width: 100%;
    border-radius: 10px;
  }

  @media (max-width:705px) {
    .boxWatch{
      height: 140px;
    }
  }
  @media (max-width:625px) {
    .boxWatch{
      height: 110px;
      margin-top: 10px;
    }

    .top-bar{
      flex-direction: column;
    }
  }

  @media (max-width:355px) {
    .boxWatch{
      height: 130px;
    }
  }
</style>