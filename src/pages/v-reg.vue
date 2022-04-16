<template>
    <div class="v-reg">
        <section class="header">
            <div class="headerWordQues">
                <img
                    height="30"
                    align="center"
                    src="../assets/img/logobw.png"
                    alt="ЛогоЧБ"
                />
                <div>Присоединяйся</div>
            </div>
            <img width="10%" src="../assets/img/Line.png" alt="-----" />
            <div class="headerWord">РЕГИСТРАЦИЯ</div>
        </section>
        <section class="regAuth">
            <form class="bgAuth" @submit.prevent="submitHandler">
                <div class="inputReg inputs">
                    <div>
                        <input
                            required="required"
                            id="nameReg"
                            type="text"
                            class="inputRegName"
                            placeholder=""
                            v-model.trim="name"
                            :class="{
                                invalid: $v.name.$dirty && !$v.name.required,
                            }"
                        />
                        <label for="nameReg">Имя</label>
                        <small v-if="$v.name.$dirty && !$v.name.required">
                            Введите Ваше имя
                        </small>
                    </div>
                    <div>
                        <input
                            required="required"
                            id="emailAuth"
                            type="text"
                            class="inputAuthEmail"
                            placeholder=""
                            v-model.trim="email"
                            :class="{
                                invalid:
                                    ($v.email.$dirty && !$v.email.required) ||
                                    ($v.email.$dirty && !$v.email.email),
                            }"
                        />
                        <label for="emailAuth">e-mail</label>
                        <small v-if="$v.email.$dirty && !$v.email.required">
                            Поле не должно быть пустым
                        </small>
                        <small v-else-if="$v.email.$dirty && !$v.email.email">
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
                            :class="{
                                invalid:
                                    ($v.password.$dirty &&
                                        !$v.password.required) ||
                                    ($v.password.$dirty &&
                                        !$v.password.minLength),
                            }"
                        />
                        <label for="passAuth">Пароль</label>
                        <small
                            v-if="$v.password.$dirty && !$v.password.required"
                        >
                            Введите пароль
                        </small>
                        <small
                            v-else-if="
                                $v.password.$dirty && !$v.password.minLength
                            "
                        >
                            Не менее
                            {{ $v.password.$params.minLength.min }} символов
                        </small>
                    </div>
                    <button class="reglogIn_btn">Регистрация</button>
                </div>
            </form>
            <div class="logoBg">
                <img src="../assets/img/logoreg.png" alt="" />
            </div>
        </section>
    </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
    name: "v-reg",
    data() {
        return {
            email: "",
            password: "",
            name: "",
        };
    },
    validations: {
        email: { email, required },
        password: { required, minLength: minLength(8) },
        name: { required },
    },
    methods: {
        async submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return;
            }
            const formData = {
                email: this.email,
                password: this.password,
                name: this.name,
            };

            try {
                await this.$store.dispatch("register", formData);
            } catch (e) {
                throw e;
            }

            this.$router.push("/");
        },
    },
};
</script>

<style></style>
