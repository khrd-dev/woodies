<template>
  <div class="v-reg">
    <section class="header">
      <div class="headerWordQues">
        <img height="30" align=center src="../assets/img/logobw.png" alt="ЛогоЧБ">
        <div>Присоединяйся</div>
      </div>
      <img width="10%" src="../assets/img/Line.png" alt="-----">
      <div class="headerWord">Регистрация</div>
    </section>
    <section class="regAuth">
      <form class="bgAuth">
        <div class="inputReg inputs">
          <div>
            <input required="required" id="nameReg" type="text" class="inputRegName" placeholder="">
            <label for="nameReg">Имя</label>
          </div>
          <div>
            <input required="required" id="passReg" type="text" class="inputRegPass" placeholder="">
            <label for="passReg">Пароль</label>
          </div>
          <div>   
            <input required="required" id="emailReg" type="text" class="inputRegEmail" placeholder="">
            <label for="emailReg">e-mail</label>
          </div>
          <button class="reglogIn_btn">Регистрация</button>
        </div>
      </form>
      <div class="logoBg">
        <img src="../assets/img/logoreg.png" alt="">
      </div>
    </section>
  </div>
</template>

<script>
export default{
  name: "v-reg",
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style>

</style>
