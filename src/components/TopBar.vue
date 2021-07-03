<template>
  <header class="top-bar">
    <img class="logoImg" src="../assets/logo_maratona.png" alt="logo"/>
    <!-- <div class="boxWatch">
      
    </div> -->
  </header>
</template>


<script>
export default {

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
  }

  .boxWatch{
    background-color: #00FF48;
    padding: 0px 130px;
    height: 100px;
    width: 300px;
    border-radius: 10px;
  }
</style>