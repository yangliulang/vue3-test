<template>
  <div :ref="'root'">
    <h3>{{ name }}</h3>
    <h3>{{ age }}</h3>
    <button @click="changeAge">change age</button>
  </div>
</template>
<script>
import {
  ref,
  computed,
  reactive,
  toRefs,
  toRef,
  isRef,
  unref,
  readonly,
  watchEffect,
  watch,
} from 'vue'
export default {
  props: {
    title: String,
  },
  setup(props) {
    const state = reactive({
      name: '杨永',
      age: 30,
    })
    const root = ref(null)
    function changeAge() {
      state.age++
      console.log(root.value)
    }
    return {
      ...toRefs(state),
      root,
      changeAge,
    }
  },
}
</script>
