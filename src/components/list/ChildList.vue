<script setup>

import FunctionalButton from "@/components/inputs/buttons/FunctionalButton.vue";
import {ButtonStyleFactory} from "@/components/inputs/buttons/ButtonStyleFactory";
import ChildListEditItem from "@/components/list/ChildListEditItem.vue";
import {toRef} from "vue";


const props = defineProps({
  items: {
    type: Array,
    default: () => ([])
  }
})


const listRef  = toRef(props, 'items')

function _addChild() {
  listRef.value.push({
    id: Date.now(),
    name: "",
    age: ""
  })
}

function _removeChild(id) {
  let index = listRef.value.findIndex((i) => i.id === id)
  listRef.value.splice(index, 1)
}

</script>

<template>
  <div :class="childContainer.header">
    <h3>Дети (мак.5)</h3>
    <functional-button v-if="listRef.length < 5"
                       :style="ButtonStyleFactory.createSecondary()"
                       text="Добавить ребенка"
                       @click="_addChild">
      <template #startIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg"
             viewBox="0 0 16 16">
          <path fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>
      </template>
    </functional-button>
  </div>
  <child-list-edit-item v-for="i in listRef" :item = "i" :key="i.id"
                        @deleted="_removeChild"/>

  <div class="actions">

  </div>
</template>

<style module="childContainer">

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>