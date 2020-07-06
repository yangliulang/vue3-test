<template>
  <div class="g-dialog">
    <button @click="setIndex">set index</button>
    <button @click="close">close dialog</button>
    <div>dialog content: {{ index }}</div>
  </div>
</template>
<script>
import { ref, getCurrentInstance } from 'vue'
export default {
  name: 'Dialog',
  setup(props, { emit }) {
    const index = ref(0)
    function setIndex() {
      index.value++
    }
    function close(e) {
      emit('close')
    }
    return {
      index,
      setIndex,
      close,
    }
  },
}
</script>
<style scoped lang="less">
.g-dialog {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
