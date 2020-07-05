<template>
  <div>
    <h3>{{ title }}</h3>
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
} from 'vue'
export default {
  props: {
    title: String,
  },
  setup(props) {},
}
</script>
