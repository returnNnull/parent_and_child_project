<script setup>

import EditText from "@/components/inputs/EditText.vue";
import {toRef} from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      name: "",
      age: ""
    })
  }
})

const personDataRef = toRef(props, "data")


</script>

<template>
  <div :class = "personalData.container">
    <h3 :class="personalData.tittle">Персональные данные</h3>
    <edit-text hint="Имя" v-model:text.trim="personDataRef.name"  type="text" />
    <edit-text hint="Возраст" v-model:text="personDataRef.age" type="number"/>
  </div>
</template>

<style module="personalData">

.container{
  display: flex;
  flex-direction: column;
}

.tittle{

}


</style>