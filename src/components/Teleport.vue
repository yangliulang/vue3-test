<template>
  <div>
    teleport
    <button @click="toggleDialog">open dialog</button>
    <Teleport to="body">
      <keep-alive>
        <component
          :is="'Dialog'"
          v-if="isShowDialog"
          @close="toggleDialog"
        ></component>
      </keep-alive>
      <!-- <Dialog @close="toggleDialog" v-if="isShowDialog" /> -->
    </Teleport>
  </div>
</template>
<script>
// Teleport 组件的使用，方式注意 要提前内嵌好取药传送的组件，不能再需要
import Dialog from './Dialog'
import { ref } from 'vue'
export default {
  name: 'Teleport',
  components: {
    Dialog,
  },
  setup() {
    const isShowDialog = ref(false)

    function toggleDialog() {
      isShowDialog.value = !isShowDialog.value
    }
    return {
      toggleDialog,
      isShowDialog,
    }
  },
}
</script>
