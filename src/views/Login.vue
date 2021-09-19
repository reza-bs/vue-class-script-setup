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

import { useRouter } from 'vue-router'

export default class Login extends Vue{
  // constructor(){
  //   super()
  //   this.username = 'abc'
  // }
  username = ''
  password = ''

  isLoggedIn = true

  router = useRouter()

  checkForm = (e: any)=>{
  
    if(this.password === 'dragon' && this.username === 'Radioactive'){
      alert("successfully signed in")
      this.router.push('/showusers')
      
    }
    else{
      alert("Wrond username or password")
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