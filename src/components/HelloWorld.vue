<template>
  <dl ref="dl">
    <dt>reactive:</dt>
    <slot />
    <slot v-bind:name="'p2'" :="state" />
    <dd>
      <button @click="change">test</button>
      <button @click="distory">distory</button>
    </dd>
    <dd>age:<input v-model="state.age" /></dd>
    <dd>name:{{ state.name }}</dd>
    <!-- <dt>ref:</dt>
    <dd>counter:{{ counter }}</dd>
    <dd>{{ info.name }}:{{ info.age }}:{{ info.job ? info.job : 'job' }}</dd>
    <dd>{{ arr }}</dd>
    <dd @click="add">{{ btnTxt }}</dd> -->
  </dl>
</template>

<script>
import {
  reactive,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'
export default {
  setup(props, ctx) {
    const state = reactive({
      name: 'yangyong',
      age: 30,
      job: 'id',
    })
    const change = () => {
      state.name += 90
    }
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    const distory = () => {
      ctx.emit('setDistory')
    }
    return {
      state,
      change,
      distory,
    }
  },
  // ref dem
  // setup() {
  //   const counter = ref(0)
  //   const info = ref({ name: 'yangyong', age: 30 })
  //   const arr = ref([1, 2, 3, 4])
  //   const btnTxt = '点击按钮'
  //   const add = () => {
  //     counter.value++
  //     info.value.age++
  //     info.value.job = 'web fe'
  //     // arr.value.push(10)
  //     arr.value[1] = 9
  //     // delete info.value.name
  //   }
  //   console.log(counter)
  //   return {
  //     counter,
  //     btnTxt,
  //     add,
  //     info,
  //     arr,
  //   }
  // },
}
</script>
