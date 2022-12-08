<template>
  <button data-test="button_open-account" @click="openAccount">開戶</button>
  <input data-test="input_account" v-model="account" type="text" />

  <button data-test="button_deposit" @click="deposit">存款</button>
  <input data-test="input_deposit" v-model="userDeposit" type="number" min="0" />

  <button data-test="button_withdraw" @click="withdraw">提款</button>
  <input data-test="input_withdraw" v-model="userWithdraw" type="number" min="0" />

  <p data-test="status">{{ status }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { FoodBank } from './practice-05.js'

const userAccount = ref('')
const userDeposit = ref(0)
const userWithdraw = ref(0)
const status = ref('')
const foodBank = new FoodBank()

const openAccount = () => {
  status.value = foodBank.openAccount(userAccount.value)
}

const deposit = () => {
  status.value = foodBank.deposit(userAccount.value, userDeposit.value)
}

const withdraw = () => {
  status.value = foodBank.withdraw(userAccount.value, userWithdraw.value)
}
</script>
