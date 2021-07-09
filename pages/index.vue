<template>
  <div class="principal">
    <TopBar/>
    <div class="explicacao">
      <h1>SE VOCÊ AINDA TEM ALGUMA DÚVIDA, PRESTE ATENÇÃO!</h1>
      <div class="textoExplicacao">
        <p>Você tem <b>7 DIAS DE GARANTIA </b> incondicional, para experimentar todo o conteúdo e pedir o seu dinheiro de volta por qualquer motivo.</p>
        <b>E mais 1 ANO DE GARANTIA condicional</b>. Se você assistir a tudo, aplicar e não lucrar pelo menos o valor do curso, <font color="#01CC37"> te devolvemos o valor do seu investimento</font> <font color="#01FF4E"><b> e mais R$500 do meu próprio bolso.</b></font>
      </div>
    </div>
    <ConteudoComponent/>
    <div class="texto2">
      <p>Agora você também pode comprar nosso curso através do <b>boleto parcelado.</b></p>
      <p class="pGaranta"><b>Garanta sua vaga agora mesmo!</b></p>
    </div>

    <div class="pagamento">
      <div class="divAvista">
        <p class="aVista">Para pagamento com cartão de crédito, Pix, boleto, Paypal, Conta Hotmart, Samsung Pay, Google Pay e débito</p>
        <button>
          <a href="https://pay.hotmart.com/W55117628G?off=eufxncec&checkoutMode=10&bid=1625667451319">
            CLIQUE AQUI
          </a>
        </button>
      </div>
      <div class="linha-vertical"></div>
      <div class="divAvista">
        <p class="aVista" style="margin-top:30px">Para pagamento com <br> <b>boleto parcelado</b></p>
        <button style="margin-top:20px">
          <a href="https://pay.hotmart.com/W55117628G?off=ss1et2kd&checkoutMode=10&bid=1625667385454">
            CLIQUE AQUI
          </a>
        </button>
      </div>
    </div>
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

  .explicacao {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;
    width: 1500px;
    max-width: 100%;
  }

  .explicacao h1 {
    color: rgb(0, 255, 74);
    width: 50%;
  }

  .textoExplicacao{
    margin-top: 20px;
    width: 50%;
  }

  .texto2{
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    width: 1500px;
    max-width: 100%;
    padding: 15px;
  }

  .pGaranta{
    margin-top: -15px;
    font-size: 25px;
  }

  .pagamento{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1500px;
    max-width: 100%;
  }

  /* .pagamento hr{
    height: 200px;
  } */

  .aVista{
    text-align: center;
    width: 100%;
    max-width: 100%;
    padding: 20px;
  }

  .divAvista{
    width: 300px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .divAvista button{
    width: 200px;
    max-width: 100%;
    border-radius: 10px;
    padding: 10px 10px;
    background-color: #01FF4E;
  }

  .divAvista a{
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  .linha-vertical {
    height: 280px;/*Altura da linha*/
    border-left: 2px solid #01FF4E;/* Adiciona borda esquerda na div como ser fosse uma linha.*/
  }

  @media (max-width:627px){
    .explicacao{
      max-width: 100%;
    }

    .explicacao h1{
      width: 100%;
    }

    .textoExplicacao{
      width: 100%;
    }
  }

  @media (max-width:835px){
    .aVista{
      width: 100%;
    }
  }

@media (max-width:475px){
    .pagamento{
      flex-direction: column;
    }

    .linha-vertical {
      height: 1px;/*Altura da linha*/
      width: 400px;
      max-width: 100%;
      border-bottom: 2px solid #01FF4E;/* Adiciona borda esquerda na div como ser fosse uma linha.*/
      margin-top: 50px;
    }
  }

</style>