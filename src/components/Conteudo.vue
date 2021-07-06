<template>
  <v-container class="conteudo">
    <lista :conteudo="list"/>
  </v-container>
</template>

<script>
import Lista from '@/src/components/Lista.vue'

export default {
  name:'ConteudoComponent',
  components:{
    Lista
  },
  data(){
    return {
      list : [
        { 
          imgHover: false,
          card:false,
          crtlTitulo:false,
          titulo: 'A origem',
          descricao: 'Conheça J. Money e saiba por que esta metodologia é para você!',
          img1: "ep_01.png",
          img2: "ep_01_dark.png",
          capaVideo: "capa_video01.png",
          borda: {
            border: 'none'
          },
          video: 'https://player.vimeo.com/video/569862364'

        },
        { 
          imgHover: false,
          card:false,
          crtlTitulo:false,
          titulo: 'Método Fast Green® ',
          descricao: 'Saiba qual é o curso mais revolucionário do mercado de investimentos esportivos',
          img1: "ep_02.png",
          img2: "ep_02_dark.png",
          capaVideo: "capa_video02.png",
          borda: {
            border: 'none'
          },
          video: 'https://player.vimeo.com/video/570042033'
        },
        { 
          imgHover: false,
          card:false,
          crtlTitulo:false,
          titulo: 'Oportunidade única! ',
          descricao: 'Conheça o curso mais completo do mercado de investimentos esportivos.',
          img1: "ep_03.png",
          img2: "ep_03_dark.png",
          capaVideo: "capa_video03.png",
          borda: {
            border: 'none'
          },
          video: 'https://player.vimeo.com/video/570930296'
        },
      ]
    }
  }
}
</script>

<style>
  .conteudo{
    width: 1250px;
    max-width: 100%;
    background-color: #212121;
    border-radius: 10px;
    padding: 40px 40px 0 40px;
  }

  @media(max-width:590px){
    .conteudo{
      padding: 40px 20px 0 20px;
    }
  }

</style>