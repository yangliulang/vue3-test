<template>
  <div>
    <Vue3 :title="title" />
  </div>
</template>
<script>
import Vue3 from '@/components/Vue3'
import { reactive } from 'vue'
export default {
  components: { Vue3 },
  data() {
    return {
      title: 'Vue好学还是React好学?',
    }
  },
}
</script>
