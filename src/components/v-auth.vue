<template>
  <div class="v-auth">
    <section class="headerAuth">
      <div class="headerWordQues">
        <img height="30" align=center src="../assets/img/logobw.png" alt="ЛогоЧБ">
        <div>Мы знакомы?</div>
      </div>
      <img width="50%" src="../assets/img/Line.png" alt="-----">
      <div class="headerWordAuth">АВТОРИЗАЦИЯ</div>
    </section>
    <section class="regAuth">
      <div class="bgAuth">
        <div class="inputAuth">
          <input type="text" class="inputAuthEmail" placeholder="Введи email">
          <input type="text" class="inputAuthPass" placeholder="Введи пароль">
          <button>Войти</button>
        </div>
      </div>
      <div class="bgReg">
        <div class="inputReg">
          <input type="text" class="inputRegName" placeholder="Введи имя">
          <input type="text" class="inputRegPass" placeholder="Введи пароль">
          <input type="text" class="inputRegPassDbl" placeholder="Введи пароль еще раз">
          <input type="text" class="inputRegEmail" placeholder="Введи email">
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
.headerAuth {
  display: flex;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  align-items: center;
}
.headerWordQues {
  display: flex;
  align-items: center;
  font-family: 'Nunito';
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  color: #3E3F43;
}
.headerWordQues img {
  margin-right: 10px;
}
.headerWordAuth {
  font-family: 'Nunito';
  font-weight: 800;
  font-size: 72px;
  line-height: 98px;
  color: rgba(34, 34, 34, 0.1);
}
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

@media (min-width: 280px) and (max-width: 1024px) {
  .headerWordQues {
    display: none;
  }
  .headerAuth img {
    display: none;
  }
  .headerAuth {
    display: block;
  }
  .headerWordAuth {
    font-size: calc(18px + (72 - 18) * ( (100vw - 280px) / ( 1024 - 480) ));
  }
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
