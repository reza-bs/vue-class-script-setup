<template>
  <div>
    <form >
      <va-input type="text" class="mb-4 mr-4" label = "First Name"  name="firstName"/>
      <!-- <p v-if="status.firstName?.$error">Please Enter FirstName of minimum 3 characters</p> -->
      <va-input type="text" class="mb-4 mr-4" label = "Last Name" />
      <!-- <p v-if="status.lastName?.$error">Please Enter LastName of minimum 3 characters</p> -->
      <va-input type="email" class="mb-4 mr-4" label = "Email" required/>
      <va-input type="Password" class="mb-4 mr-4" label = "Password"/>
      <!-- <p v-if="status.password?.$error">Please Enter Password of minimum 5 characters</p> -->
      <va-select type="select" class="mb-4 mr-4" label = "RegionBloc" :options="regionalBlocArray" v-model="regionalBloc" @click='regionalBlocValue'/>
      <va-select type="select" class="mb-4 mr-4" label = "Country" :options="countries" />
      <!-- <p v-if="status.country?.$error">Please Enter your country</p> -->
      <va-input type="textarea" class="mb-4" label = "About Yourself"/>
      <va-button type='submit' >Submit</va-button>
    </form>
  </div>
</template>

<script lang="ts">

import {Vue} from 'vue-class-component'


export default class Login extends Vue{
  username = ''
  password = ''
  regionalBlocArray = ['EU', 'EFTA', 'CARICOM', 'PA', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']
  regionalBloc = ''
  countries = []

  regionalBlocValue(e: any){
    console.log(e)
    console.log(this.regionalBloc)
  }

  // get regionalBlocValue(){
  //   console.log(this.regionalBloc)
  //   return this.regionalBloc
  // }

  // set regionalBlocValue(value){
  //   this.regionalBloc = value
  // }

  async mounted(){
    let post  = await fetch(`https://restcountries.eu/rest/v2/regionalbloc/${this.regionalBloc}?fields=name`).then((r) => r.json())

    console.log(this.regionalBloc)
    
    this.countries = post.map((item: { name: any; })=> item.name)
    console.log(this.countries)
  }
}

</script>