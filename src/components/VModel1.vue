<template>
  <div>
    <p>name:<input :value="name" @input="updateName($event.target.value)" /></p>
    <p>age:<input :value="age" @input="updateAge($event.target.value)" /></p>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'VModel',
  props: {
    name: String,
    age: String,
  },
  setup(props, { emit }) {
    function updateName(v) {
      emit('update:name', v)
    }
    function updateAge(v) {
      emit('update:age', v)
    }

    return {
      updateName,
      updateAge,
    }
  },
}
</script>
