<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese email" v-model.trim="email">
            <input type="password" placeholder="Ingrese contraseña" v-model.trim="password">
            <button type="submit" :disabled="userStore.loadingUser">Crear usuario</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
// import { useRouter } from 'vue-router';

const userStore = useUserStore()
// const router = useRouter()

    const email = ref('8888@8888.com')
    const password = ref('88888888')

    const handleSubmit = async() => {
        if(!email.value || password.value.length < 6){
            return alert('llena los campos')
        }
        await userStore.registerUser(email.value, password.value)
        // router.push('/')
    }

</script>
