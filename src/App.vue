<template>
  <div id="app">
    <h1>test count : {{ count }}</h1>
    <h1>count * 2 : {{ dblcount }}</h1>
    <h1>store : {{ ctx.$store.state.vue }}</h1>
    <button @click="add">set</button>
  </div>
</template>
<script>
import { ref, computed, watch, getCurrentInstance } from 'vue'
export default {
  setup() {
    // console.log(getCurrentInstance())
    const count = ref(0)
    const dblcount = computed(() => {
      return count.value * 2
    })
    watch(
      () => {
        return { n: count.value, b: dblcount.value }
      },
      (v) => {
        console.log(v)
      }
    )
    const add = () => {
      count.value++
    }
    const { ctx } = getCurrentInstance()
    return {
      count,
      dblcount,
      add,
      ctx,
    }
  },
}
</script>
