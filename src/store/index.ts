import { reactive, readonly } from 'vue';

const state = reactive({
  users: [{
    'name': "Raphael",
    'country': 'Bangladesh',
    'languages': ['Bangla'],
    'borders': ['SAARC'],
    'capital': 'Dhaka',
    'currencies': ['Taka']
  }]
})

const methods = {
  addUser(payload: any){
    state.users.push(payload)
  },

  removeUser(payload:any){
    const index = state.users.indexOf(payload);
    console.log(index)
    if(index > -1){
      state.users.splice(index,1);
    }
    
  }
}

export default {state: readonly(state), methods};