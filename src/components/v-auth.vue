<template>
  <div class="v-auth">
    <section class="header">
      <div class="headerWordQues">
        <img height="30" align=center src="../assets/img/logobw.png" alt="ЛогоЧБ">
        <div>Мы знакомы?</div>
      </div>
      <img width="10%" src="../assets/img/Line.png" alt="-----">
      <div class="headerWord">АВТОРИЗАЦИЯ</div>
    </section>
    <section class="regAuth">
      <div class="bgAuth">
        <div class="inputAuth inputs">
          <div>
            <input type="email" class="inputAuthEmail" placeholder="">
            <label for="email">e-mail</label>
          </div>
          <div>
            <input type="password" class="inputAuthPass" placeholder="">
            <label for="password">Пароль</label>
          </div>
          <button>Войти</button>
        </div>
      </div>
      <div class="bgReg">
        <div class="inputReg inputs">
          <div>
            <input type="name" class="inputRegName" placeholder="">
            <label for="name">Имя</label>
          </div>
          <div>
            <input type="password" class="inputRegPass" placeholder="">
            <label for="password">Пароль</label>
          </div>
          <div>
            <input type="password" class="inputRegPassDbl" placeholder="">
            <label for="password">Пароль еще раз</label>
          </div>
          <div>   
            <input type="email" class="inputRegEmail" placeholder="">
            <label for="email">e-mail</label>
          </div>
          <button>Регистрация</button>
        </div>
      </div>
    </section>
    <section class="bgimg">
      <div><img class="table" src="../assets/img/table.png" alt="table"></div>
      <div><img class="cutlery" src="../assets/img/cutlery.png" alt="cutlery"></div>
    </section>
  </div>
</template>

<script>
export default{
  name: "v-auth",
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style>

.regAuth {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
}
.bgAuth {
  width: 45%;
  background-image: url(../assets/img/lftbg.png);
  background-size: 100% 100%;
  margin-right: 2%;
}
.bgReg {
  width: 45%;
  background-image: url(../assets/img/rtbg.png);
  background-size: 100% 100%;
  margin-left: 2%;
}
.inputAuth {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.inputReg {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bgimg {
  display: flex;
  height: 10%;
}
.bgimg div {
  width: 100%;
}
.table {
  max-width: 85%;
  height: auto;
  align-items: center;
  margin-right: 15%;
}
.cutlery {
  max-width: 45%;
  height: auto;
  margin-left: 55%;
}

@media (max-width: 800px) {
  .regAuth {
    flex-direction: column;
    align-items: center;
  }
  .bgReg {
    margin-left: 0%;
    width: 100%
  }
  .bgAuth {
    margin-right: 0%;
    margin-bottom: 1%;
    width: 100%
  }
}
</style>
