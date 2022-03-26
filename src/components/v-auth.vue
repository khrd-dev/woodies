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
      <form class="bgAuth" @submit.prevent="submitHandler">
        <div class="inputAuth inputs">
          <div>
            <input  
              required="required"
              id="emailAuth" 
              type="text" 
              class="inputAuthEmail" 
              placeholder=""
              v-model.trim="email"
              :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
            <label for="emailAuth">e-mail</label>
            <small
              v-if="$v.email.$dirty && !$v.email.required">
              Поле не должно быть пустым
            </small>
            <small
              v-else-if="$v.email.$dirty && !$v.email.email">
              Не корректный e-mail
            </small>
          </div>
          <div>
            <input 
              required="required" 
              id="passAuth" 
              type="text" 
              class="inputAuthPass" 
              placeholder=""
              v-model.trim="password"
              :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}">
            <label for="passAuth">Пароль</label>
            <small
              v-if="$v.password.$dirty && !$v.password.required">
              Введите пароль
            </small>
            <small
              v-else-if="$v.password.$dirty && !$v.password.minLength">
              Не менее {{$v.password.$params.minLength.min}} символов
            </small>
          </div>
          <button class="reglogIn_btn" type="submit" >Войти</button>
          <label for="reglogIn_btn" >Нет аккаунта? <router-link class="link" to="/reg">ЗАРЕГИСТРИРОВАТЬСЯ</router-link></label>
        </div>
      </form>
      <div class="logoBg">
        <img src="../assets/img/logoauth.png" alt="">
      </div>
    </section>
    <section class="bgimg">
      <div><img class="table" src="../assets/img/table.png" alt="table"></div>
      <div><img class="cutlery" src="../assets/img/cutlery.png" alt="cutlery"></div>
    </section>
  </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default{
  name: "v-auth",
  data() {
    return{
      email: '',
      password: ''
    }
  },
  validations: {
      email: {email, required},
      password: {required, minLength: minLength(8)}
  },
  methods:{
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      this.$router.push('/')
    }
  }
}
</script>

<style>

.regAuth {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-left: 5%;
  padding-right: 5%;
}
.bgAuth {
  width: 45%;
  margin-right: 2%;
}
.logoBg img {
  margin: 40px auto;
  height: auto;
  width: 70%;
}
.logoBg {
  margin: 0 auto;
  width: 45%;
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
.reglogIn_btn {
  margin-top: 30px;
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
