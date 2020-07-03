<template>
  <div>
    <h1>Vue 3.0</h1>
    {{ state.isDestory }}
    <HelloWord @setDistory="setDistory" v-if="!state.isDestory">
      <p>solts p1</p>
      <template v-slot:p2="{ name, age }">
        <p>solts p2 {{ name }}{{ age }}</p>
      </template>
    </HelloWord>
  </div>
</template>
<script>
import HelloWord from '@/components/HelloWorld'
import { reactive } from 'vue'
export default {
  components: { HelloWord },
  setup() {
    const state = reactive({
      isDestory: false,
    })
    const setDistory = () => {
      // console.log('setDistory......')
      state.isDestory = !state.isDestory
    }
    return { state, setDistory }
  },
}
</script>
