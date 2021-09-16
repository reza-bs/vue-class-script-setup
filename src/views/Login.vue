<template>
  <div>
    <form @submit.prevent="checkForm">
      <!-- <ValidateEach></ValidateEach> -->
      <va-input type="text" class="mb-4 mr-4" label = "Username" v-model="username"/>
      <va-input type="Password" class="mb-4 mr-4" label = "Password" v-model="password"/>

      <va-button type='submit' >Submit</va-button>
    </form>
  </div>
  
</template>

<script lang="ts">

import {Vue} from 'vue-class-component'


export default class Login extends Vue{
  username = ''
  password = ''

  isLoggedIn = true

  checkForm = (e: any)=>{
  
    if(this.password === 'dragon' && this.username === 'Radioactive'){
      alert("Wrond username or password")
    }
    else{
      alert("successfully signed in")
      console.log(this)
      // console.log(this.$route)
      // this.$router.push('/')
      // this.redirect('/')
    }

  }
}

// import { ref } from 'vue';
// let username = ref('');
// let password = ref('');


// const checkForm = (e: any)=>{
  
//   if(password.value === 'dragon' && username.value === 'radioactive'){
//     alert("successfully signed in")
//   }
//   else{
//     alert("Wrond username or password")
//   }

// }
</script>