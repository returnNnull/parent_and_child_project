<template>
    <form >
      <personal-data :data="parentDataRef" />
      <v-splitter/>
      <child-list :items="listReact"/>
      <functional-button :style = "ButtonStyleFactory.createPrimary()" @click = "save" text = "Сохранить"/>
    </form>

</template>


<script setup>

import PersonalData from "@/components/PersonalData.vue";
import ChildList from "@/components/list/ChildList.vue";
import VSplitter from "@/components/splitters/VSplitter.vue";
import FunctionalButton from "@/components/inputs/buttons/FunctionalButton.vue";
import {ButtonStyleFactory} from "@/components/inputs/buttons/ButtonStyleFactory";
import {onMounted, ref} from "vue";
import {parentStore} from "@/stores/counter";


const store = parentStore()

const listReact = ref([])

const parentDataRef = ref({
  name: "",
  age: "",
})

function save(){
  let name = parentDataRef.value.name
  let age = parentDataRef.value.age

  if (isNotEmpty(name) && isNotEmpty(age)){
    store.$patch({
      name: name,
      age: age
    })
  }
  else {
    alert("Заполните имя и возраст")
  }


  store.$patch((state) =>{
    state.items.value = listReact.value
    state.hasChanged = true
  })
}

onMounted(() =>  {
  parentDataRef.value.name = store.name
  parentDataRef.value.age = store.age
  listReact.value = store.items.sort((a, b) => a.age - b.age)
})


function isNotEmpty(text){
  return text !== ""
}

</script>


<style scoped>

form{
  width: 100%;
  margin: 0 auto;
  display: inline-block;
  flex-direction: column;
  padding: 2em;
}

</style>