<template>
  <div class="cron">
    <p>NOVA OPORTUNIDADE ENCERRA EM:</p>
    <div class="horas">
      <h1>{{hht}}:</h1>
      <h1>{{mmt}}:</h1>
      <h1>{{sst}}</h1>
    </div>
    <div class="textoCron">
      <h5>HORAS</h5>
      <h5 class="min">MIN</h5>
      <h5 class="seg">SEG</h5>
    </div>
  </div>
  
</template>

<script>
  var data = new Date()
  var dia     = data.getDate()
  var dateServidor = new Date()
  var diferencaExecucao = 0
  import barramento from '@/src/barramento'


  export default {
    data() {
      return {
        hh : 23 - dateServidor.getHours(),//23,
        mm : 59 - dateServidor.getMinutes(),//59,
        ss : 59 - dateServidor.getSeconds(),//60,
        hht : '',
        mmt : '',
        sst : '',
        tempo: 1000,
        tempoVerificacao: 45000,
        cron: 0,
        diaT: dia,
      }
    },
    mounted(){
      //clearInterval(this.cron)
      this.alteraDia();
      
      if(diferencaExecucao > 0){
        setTimeout(() => {
          this.hh = 23
          this.mm = 59
          this.ss = 59
          this.hht = '23',
          this.mmt = '59',
          this.sst = '59',
          this.alteraDia();
        },diferencaExecucao)
      }
      
    },
    methods: {
      alteraDia() {

        var url = "https://xgreen-ultimato-api-joty3.ondigitalocean.app/api/datetime";//Sua URL

        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, false);
        xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

        var timeZoneLocal = new Date().getTimezoneOffset()

        var timeZoneDiferenca = (180 - timeZoneLocal) * 1000 * 60

        dateServidor = new Date(xhttp.responseText)

        var dateInicio = new Date("2021-07-09T00:00:00-0300")
        
        dateInicio.setTime(dateInicio.getTime() - timeZoneDiferenca)

        dateServidor.setTime(dateServidor.getTime() - timeZoneDiferenca)

        diferencaExecucao = dateInicio.getTime() - dateServidor.getTime()

        dia = dateServidor.getDate();
        this.diaT = dia
        if(dia == 9){
          barramento.alterarDia(false)
          this.start()
        }else{
          this.hh = 0
          this.mm = 0
          this.ss = 0
          this.hht = '00',
          this.mmt = '00',
          this.sst = '00',
          barramento.alterarDia(true)
          
        }
      },
      start() {
        this.cron = setInterval(() => {
          this.timer(); 
        }, this.tempo)
      },
      timer() {
        this.ss--;
        if(this.ss == 0 && this.mm != -1){
          this.ss = 59
          this.mm--

          if(this.mm == -1 && this.hh != 0){
            this.mm = 59
            this.hh--
          }
        }else if(this.mm == -1 && this.hh == 0){
          this.ss = 0
          this.mm = 0
          this.hh = 0

          barramento.alterarDia(true)
          clearInterval(this.cron)
        }

      
        this.hht = this.hh < 10 ? '0' + this.hh : this.hh
        this.mmt = this.mm < 10 ? '0' + this.mm : this.mm
        this.sst = this.ss < 10 ? '0' + this.ss : this.ss
      }
    },
    
  }


</script>

<style>
.horas{
  display: flex;
}

.cron{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.cron p {
  font-size: 15px;
  color: black;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: -10px;
}

.cron h1 {
  color: black;
  font-weight: bold;
  font-size: 50px;
  margin-top: -10px;
}

.textoCron{
  display: flex;
  color: black;
  width: 190px;
  max-width: 100%;
  justify-content: space-between;
  margin-top: -10px;
}

.textoCron .min{
  margin-right: 10px;
}

.textoCron .seg{
  margin-right: 10px;
}

@media (max-width:716px) {
  .cron p{
    text-align: center;
  }
}

</style>