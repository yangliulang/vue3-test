<template>
  <div>suspens layz:{{ dataRef }}</div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'SuspensLayz',
  async setup() {
    const dataRef = ref({})
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: 'yangyong' })
      }, 3000)
    })
    dataRef.value = data
    return {
      dataRef,
    }
  },
}
</script>
