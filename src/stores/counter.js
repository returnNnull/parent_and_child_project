import {ref,  reactive} from 'vue'
import { defineStore } from 'pinia'


export const parentStore = defineStore('parent', () => {

  const name = ref("")
  const age = ref("")

  const items = ref([])

  return {name, age, items}

})
