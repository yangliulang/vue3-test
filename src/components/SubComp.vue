<template>
  <div>SubComp:{{ theme }}</div>
</template>
<script>
import { inject } from 'vue'
export default {
  name: 'SubComp',
  setup() {
    const theme = inject('theme', 'orange')
    console.log('theme', theme)
    return {
      theme,
    }
  },
}
</script>
