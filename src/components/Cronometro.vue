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
  export default {
    data() {
      return {
        hh : 23,//23,
        mm : 59,//59,
        ss : 60,//60,
        hht : 0,
        mmt : 0,
        sst : 0,
        tempo: 1000,
        cron: 0,
      }
    },
    mounted() {
      this.start()
    },
    methods: {
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

          clearInterval(this.cron)
        }

      
        this.hht = this.hh < 10 ? '0' + this.hh : this.hh
        this.mmt = this.mm < 10 ? '0' + this.mm : this.mm
        this.sst = this.ss < 10 ? '0' + this.ss : this.ss
      }
    }
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