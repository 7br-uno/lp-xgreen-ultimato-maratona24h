<template>
    <footer>
      <img src="../assets/logo_xg.png" alt="rodape">
      <p>Resultados passados não são garantias de resultados futuros. As informações deste site destinam-se 
        ao seu conhecimento geral e não garantimos resultados específicos e valores exatos de lucro. Os resultados 
        são de inteira responsabilidade do assinante e/ou aluno que realiza as suas próprias operações. O nosso 
        conteúdo tem fins de conhecimento e cultura. São voltados à introdução aos conhecimentos em educação e 
        mercados financeiros, dentro dos melhores valores éticos e morais, com o objetivo de promover as habilidades 
        necessárias para o correto entendimento em educação financeira.</p>
    </footer>
</template>
<style scoped>
  footer {
    display: flex;
    width: 1250px;
    max-width: 100%;
    margin: 100px auto 80px auto;
    align-items: center;
    gap: 60px;
    padding: 0 40px;
  }

  footer p {
    font-size: 12px;
    text-align: justify;
  }

  footer img {
    width: 120px;
  }

  @media(max-width:650px){
    footer{
      flex-direction: column;
    }
    footer p {
      width: 90%;
    }
  }
</style>