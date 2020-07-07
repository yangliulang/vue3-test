<template>
  <div>
    VModel:<br />
    <VModelByMul v-model:name="name" v-model:age="age" />
  </div>
</template>
<script>
import VModelByMul from './VModel1'
import { ref, watch } from 'vue'
export default {
  name: 'VModel',
  components: {
    VModelByMul,
  },
  setup() {
    const name = ref('yy')
    const age = ref('30')
    watch([name, age], (n, a) => {
      console.log(n, a)
    })
    return {
      name,
      age,
    }
  },
}
</script>
