<template>

  <div v-if="store.name !== ''" class="preview-wrapper">
    <h3>Персональные данные</h3>
    <div>
      <p class="parentOutput">{{store.name}}, {{store.age}} лет</p>

    </div>
    <h3>Дети</h3>
    <div class = 'childrenOutput' v-for="i in store.items" :key="i.id"  >
      <p v-if="i.name !== '' && i.age !== ''">{{i.name}}, {{i.age}} лет</p>
      <p v-else>Не хватает данных</p>
    </div>
  </div>
  <div v-else>
    Данных нет
  </div>
</template>
    
    
<script setup>

import {parentStore} from "@/stores/store";

const store = parentStore()

</script>
    
    
<style scoped>

.preview-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 2em;
}

.parentOutput{
  font-weight: bold;
  margin: 1em;
}


.childrenOutput p{
  display: inline-block;
  font-weight: bold;
  background: #f1f1f1;
  padding: 1em;
  margin: 1em;
  border-radius: 5px;
}

</style>