<template>
  <div>
    <form @submit.prevent="checkForm">
      <va-input type="text" class="mb-4 mr-4" label = "Name"  name="name" v-model='name'/>
      <!-- <p v-if="status.firstName?.$error">Please Enter FirstName of minimum 3 characters</p> -->
      <!-- <va-input type="text" class="mb-4 mr-4" label = "Last Name" /> -->
      <!-- <p v-if="status.lastName?.$error">Please Enter LastName of minimum 3 characters</p> -->
      <!-- <va-input type="email" class="mb-4 mr-4" label = "Email" required/> -->
      <va-input type="Password" class="mb-4 mr-4" label = "Password" v-model="password"/>
      <!-- <p v-if="status.password?.$error">Please Enter Password of minimum 5 characters</p> -->
      <va-select type="select" class="mb-4 mr-4" label = "RegionBloc" :options="regionalBlocArray" v-model="regionalBlocValue" />
      <va-select type="select" class="mb-4 mr-4" label = "Country" :options="countries" v-model="countryValue"/>
      <!-- <p v-if="status.country?.$error">Please Enter your country</p> -->
      <va-input type="textarea" class="mb-4" label = "About Yourself"/>
      <va-button type='submit' >Submit</va-button>
    </form>
  </div>
</template>

<script lang="ts">

import {Vue, Options} from 'vue-class-component'
import state from '../store/index'
import { useRouter } from 'vue-router'
import { minLength, required } from '@vuelidate/validators';

// @Options({
//   validations:{
//     name: {
//       required
//     }
//   }
// })

console.log(name)

export default class Login extends Vue{
  // constructor(){
  //   super()
    
  // }

  // validations:{
  //   name: {
  //     required
  //   }
  // }

  name = ''
  password = ''
  regionalBlocArray = ['EU', 'EFTA', 'CARICOM', 'PA', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']
  regionalBloc = ''
  countries = []
  country = ''
  borders = []
  languages = []
  capital = ''
  currencies = []

  state= state

  router = useRouter()

  checkForm(){
    this.state.methods.addUser({name: this.name, country: this.country, languages:this.languages,borders: this.borders, capital:this.capital, currencies:this.currencies})
    console.log(state.state.users)
    this.router.push('/showusers')
  }

  get regionalBlocValue(){
    console.log(this.regionalBloc)
    return this.regionalBloc
  }

  set regionalBlocValue(value){
    this.regionalBloc = value
    this.countryValueAsync()
  }

  get countryValue(){
    console.log("fjdkaf",this.country)
    return this.country
  }

  set countryValue(value){
    this.country = value
    this.countryAttrsAsync()
  }

  async countryValueAsync(){
    let post  = await fetch(`https://restcountries.eu/rest/v2/regionalbloc/${this.regionalBloc}`).then((r) => r.json())

    console.log(this.regionalBloc)
    
    this.countries = post.map((item: { name: any; })=> item.name)
    console.log(this.countries)
  }

  async countryAttrsAsync(){
    let post  = await fetch(`https://restcountries.eu/rest/v2/name/${this.country}`).then((r) => r.json())

    console.log("the country: ", this.country)
    console.log("the countryObject: ", post[0])


    this.languages= post[0].languages.map((item: any) => item.name) //array
    this.capital = post[0].capital ? post[0].capital: 'no capital'
    this.currencies = post[0].currencies.map((item: any) => item.name) //array
    this.borders= post[0].borders //array

    console.log("the languages: ", this.languages)
    console.log("the capital: ", this.capital)
    console.log("the currencies: ", this.currencies)
    console.log(this.borders)

  }
}

</script>