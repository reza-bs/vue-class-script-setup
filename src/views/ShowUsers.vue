<template>
  <div class="va-table-responsive">
    <div class="userInfo">
    <table class="va-table">
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Country</th>
          <th>Languages</th>
          <th>Borders</th>
          <th>Capital</th>
          <th>Currency</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr  v-for='(user, index) in users.users' :key="index">
      
        <td>{{index}}</td>
        <td>{{user.name}}</td>
        <td>{{user.country}}</td>
        <td>{{user.languages}}</td>
        <!-- <td v-for='(lang, index) in user.languages' :key="index">
          {{ lang }}
        </td> -->

        <td>{{user.borders}}</td>
        <!-- <td v-for='(border, index) in user.borders' :key="index">
          {{ border }}
        </td> -->
        <td>{{user.capital}}</td>
        <td>{{user.currencies}}</td>

        <!-- <td v-for='(currency, index) in user.currencies' :key="index">
          <span>{{ currency }}</span>
        </td> -->
        
        <!-- <va-button color='info' gradient>Edit</va-button> -->
        <va-button color='danger' gradient @click="deleteUser(user)">Delete</va-button>
      </tr>
      </tbody>

    </table>
    <!-- <h1>Hello World</h1> -->
    </div>
    </div>
    <!-- <h3>{{ state.users[0].name }}</h3> -->
  
</template>

<script lang="ts">
import state from '../store/index'
import { Vue } from 'vue-class-component'

export default class ShowUsers extends Vue{

  // constructor(){
  //   super()
  //   this.state= state
  // }
  users= state.state
  methods = state.methods

  deleteUser(item:any){
    console.log("delete: ", item)
    this.methods.removeUser(item)
  }

  mounted(){
    console.log(this.users)
  }
}
</script>

<style>
.userInfo{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px
}
</style>