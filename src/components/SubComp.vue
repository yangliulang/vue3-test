<template>
  <div>
    <h2>高级响应式API</h2>
    <div>SubComp:{{ theme }}</div>
    customRef:<input v-model="txt" />
    <div>staticData:{{ staticData.name }}</div>
    <div>info:{{ info.name }}</div>
    <div>info.job:{{ info.job }}</div>
    <hr />
  </div>
</template>
<script>
import {
  inject,
  ref,
  watch,
  customRef,
  markRaw,
  shallowReactive,
  isReactive,
} from 'vue'
export default {
  name: 'SubComp',
  setup() {
    const theme = inject('theme', 'orange')
    const txt = customRef((track, trigger) => {
      let val = ''
      let t = null
      return {
        get() {
          track()
          return val
        },
        set(v) {
          window.clearTimeout(t)
          t = window.setTimeout(() => {
            val = v
            trigger()
          }, 500)
          // console.log(v)
        },
      }
    })

    const staticData = markRaw({ name: 'yy' })
    const info = shallowReactive({
      name: 'info',
      job: {
        name: 'id',
      },
    })
    watch(
      () => info.name,
      (v) => {
        console.log('info.name', v)
      }
    )

    setTimeout(() => {
      info.name += 'ooo'
      info.job = {
        name: 'ertyuio',
        id: 101001,
      }
    }, 1000)
    console.log('isReactive', isReactive(info.job))

    // watch(txt, (v) => {
    //   console.log('watch', v)
    //   info.name = 'qwdqd'
    //   info.job.name = 5678
    // })
    // console.log(staticData)
    return {
      info,
      theme,
      txt,
      staticData,
    }
  },
}
</script>
