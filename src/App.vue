<template>
  <div>
    <CompositionApi v-if="!isDel" :title="title" :id="id">
      我是CompositionApi的slot
    </CompositionApi>
    <button @click="setId">set id</button>
    <button @click="isDel = !isDel">del Comp</button>
  </div>
</template>
<script>
import CompositionApi from '@/components/CompositionApi'
export default {
  components: {
    CompositionApi,
  },
  data() {
    return {
      title: 'Vue3好学嘛',
      id: 100,
      isDel: false,
    }
  },
  methods: {
    change() {
      this.title += '?'
    },
    setId() {
      this.id += 1
    },
  },
}
</script>
