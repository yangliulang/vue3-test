<template>
  <dl ref="dl">
    <dt>props:</dt>
    <dd>{{ props }}</dd>
    <dt>context:</dt>
    <dd>{{ context }}</dd>
    <dd>{{ context.slots }}</dd>
  </dl>
</template>

<script>
import { getCurrentInstance, ref, state, computed, onBeforeMount } from 'vue'
export default {
  props: ['info'],
  data: () => ({
    _n: 10,
  }),
  mounted() {
    console.log(this._n)
  },
  setup(props, context) {
    console.log(getCurrentInstance())
    return {
      props,
      context,
    }
    // console.log(info)
  },
}
</script>
