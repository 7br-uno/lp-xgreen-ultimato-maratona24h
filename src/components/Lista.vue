<template>
  <div class="geral">
    <div class="item" v-for="(cont, i) in conteudo" :key="i" @click="exibirCard(i)"
     :style="crtlBorda == i ? cont.borda : {border:'none'}" 
     @mouseover="cont.imgHover = !imgEp"
     @mouseleave="cont.imgHover = imgEp"
    >
      <div class="textoImagem">
        <img class="logo" :src="require(`../assets/${cont.capaVideo}`)">
        <div class="texto">
          <div class="titulo">
            <h2 v-show="cont.crtlTitulo || i == 3">{{cont.titulo}}</h2>
            <img v-if="i!=3" v-show="!cont.imgHover && !cont.crtlTitulo" :src="require(`../assets/${cont.img1}`)" alt="logoep" class="imgEp1">
            <img v-if="i!=3" v-show="cont.imgHover && !cont.crtlTitulo"  :src="require(`../assets/${cont.img2}`)" alt="logoep2" class="imgEp2">
          </div>
          <p style="font-weight:bold; margin-left:5px" class="descricao">{{cont.descricao}}</p>
        </div>
      </div>
      <div v-if="i==2" class="frame">
        <iframe v-show="cont.card && crtlBorda == i" :src="cont.video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <div v-show="cont.card && crtlBorda == i" class="promocao">
          <h1>CLIQUE NO BOTÃO ABAIXO PARA APROVEITAR</h1>
          <img src="../assets/img_ofertaespecial_maratona.png" alt="promocao">
          <button>QUERO GANHAR 85% DE DESCONTO</button>
          <h5>Aproveite é só HOJE até as 23h59</h5>
        </div>
      </div>

      <div v-else class="soFrame">
        <iframe v-show="cont.card && crtlBorda == i" :src="cont.video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

    </div>
  </div>
</template>

<script>
// :style="crtlBorda == i ? cont.borda : {border:'none'}"  
export default {
  props:['conteudo', 'borda'],
  data(){
    return {
      imgEp: false,
      controlCard: false,
      crtlBorda: -1,
      iAnt: -1,
    }
  },
  computed:{
    alterarBorda(){
      if(this.conteudo[0].borda){
        // this.conteudo[i].imgClick = true
        this.crtlTitulo = true
        return{
          border: 1 + 'px' + ' solid' + ' #00FF48'
        }
      }else{
        this.conteudo[0].card = false
        this.crtlTitulo = false
        return {
          border: 'none'
        }
      }
    }
  },methods:{
    estiloBorda(i){
      // this.crtlBorda = i
      // if(this.borda == i ){
      //   // this.conteudo[i].imgClick = true
      //   this.crtlTitulo = true
      //   return{
      //     border: 1 + 'px' + ' solid' + ' #00FF48'
      //   }
      // }else{
      //   this.conteudo[i].card = false
      //   this.crtlTitulo = false
      //   return {
      //     border: 'none'
      //   }
      //  }
    },
    exibirCard(i){
      if(this.iAnt != -1 && this.iAnt != i){
        this.conteudo[this.iAnt].crtlTitulo = false
      }

      this.crtlBorda = i

      if(this.conteudo[i].card == true && this.iAnt == i){
        this.conteudo[i].card = false
        this.conteudo[i].borda = {border:'none'};
        this.crtlBorda = -1
        this.conteudo[i].crtlTitulo = false
      }else{
        this.conteudo[i].card = true
        this.conteudo[i].crtlTitulo = true
        this.conteudo[i].borda = {border : 1 + 'px' + ' solid' + ' #00FF48'}
      }
  
      this.iAnt = i

      // if(this.crtlBorda == i ){
      //   // this.conteudo[i].imgClick = true
      //   // this.crtlTitulo = true
      //   this.conteudo[i].borda = {border : 1 + 'px' + ' solid' + ' #00FF48'}
      // }

    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
  .geral {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding-bottom: 35px;
  }

  .item{
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    transition: 150ms;
    padding: 10px 0 0 0;
    max-height: 1000px;
  }

  .item:nth-child(even) {background: #ffffff05}
  .item:nth-child(odd) {background: #111;}

  .item.ativado{
    border: 1px solid #00FF48;
  }

  .item .logo{
    width: 12%;
  }
  .texto{
    display: flex;
    flex-direction: column;
    gap:5px;
  }

  .textoImagem{
    display: flex;
    align-items: center;
    gap: 30px;
    margin: -10px 0px 0px 0px;
    padding: 10px 10px 0px 10px;
    height: 100%;
  }

  .textoImagem .logo{
    margin: 0 0 15px -5px;
    border-radius: 10px;
    width: auto;
    height: 120px;
  }

  .textoImagem:hover {
    background-color: #00FF48;
    color: black;
  }

  .textoImagem:hover h2{
    color: black;
  }


  .frame{
    display: flex;
    align-items: center;
  }

  .frame iframe{
    height: 408px;
    width: 60%;
    max-width: 100%;
  }

  .soFrame{
    display: flex;
  }

  .soFrame iframe{
    width: 100%;
    max-width: 100%;
    height: 300px;
    margin:auto;
  }

  .titulo {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .titulo h2 {
    color: #00FF48;
  }

  .titulo img{
    width: 100px;
  }

  .promocao{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: darkgray;
    width: 40%;
    height: 408px;
    gap: 20px;
    margin-top: 10px;
  }

  .promocao img {
    width: 200px;
    height: 120px;
    max-width: 100%;
  }

  .promocao h1 {
    margin-top: 52px;
    font-size: 20px;
    text-align: center;
    color: black;
    font-weight: bold;
  }

  .promocao h5 {
    color: black;
  }

  .promocao button{
    background-color: red;
    border-radius: 10px;
    padding: 10px;
  }
  
  /* @media (max-width:346px){
    .promocao button{
      padding: 10px 0;
      text-align: center;
    }
  } */
  
  @media (max-width:400px){
    .promocao{
      margin-top: -40px;
    }
  }
  
  @media (max-width:450px){
    .soFrame iframe{
      margin-top: -40px;
    }
  }
  
  @media (max-width:510px){
    .promocao{
      height: 100%;
    }
  }
  
  @media (max-width:490px){
    .promocao{
      margin-top: -20px;
    }
  }
  

  @media (max-width:600px){
    .descricao{
      font-size: 12px;
    }

    .titulo h2{
      font-size: 20px;
      text-align: center;
    }

  }


  @media (max-width:950px){
    .frame {
      flex-direction: column;
    }

    .frame iframe{
      width: 847px;
      height: 300px;
    }

    .promocao {
      padding: 20px;
      width: 90%;
    }

    .promocao img {
      margin: auto;
      justify-content: center;
    }

    
  }

</style>