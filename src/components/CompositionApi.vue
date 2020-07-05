<template>
  <div>
    <h1 ref="h3">{{ title }}:{{ 1 }}</h1>
    <h2>props.id:{{ id }}</h2>
    <h3>state:{{ state }}</h3>
    <h4>x:{{ x }},y:{{ y }}</h4>
    <ul>
      <li
        v-for="(item, index) in list"
        :ref="(el) => (lis[index] = el)"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
    <SubComp ref="subComp" />
  </div>
</template>
<script>
import { usePosition } from './use'
import {
  ref,
  watchEffect,
  watch,
  reactive,
  computed,
  readonly,
  nextTick,
  onMounted,
  onUpdated,
  onUnmounted,
  onRenderTracked,
  onRenderTriggered,
  provide,
  onBeforeUpdate,
  unref,
  toRef,
  toRefs,
  getCurrentInstance,
} from 'vue'
import SubComp from './SubComp'
export default {
  name: 'CompositionApi',
  components: {
    SubComp,
  },
  props: {
    title: String,
    id: Number,
  },

  setup(props, { attrs, slots, emit }) {
    const count = ref(0)
    const h3 = ref(null)
    const data = ref(null)
    const state = reactive({
      name: '杨永',
      age: 30,
      job: 'it',
      son: {
        name: 'summer',
        age: 1.5,
      },
    })
    const theme = ref('red')
    const subComp = ref(null)
    const list = reactive(['red', 'yellow', 'orange', 'green'])
    const lis = ref([])

    provide('theme', theme)

    const refFromState = toRef(state.son, 'name')
    const refFromList = toRef(list, 1)
    const $this = getCurrentInstance()

    const { x, y } = usePosition()
    console.log('usePosition', x, y)
    setTimeout(() => {
      theme.value = 'yellow'
      refFromState.value = 'hahah'
      console.log('getCurrentInstance->', $this)
      console.log('listRefs->', toRefs(list))
      console.log('refFromState->', refFromState.value)
      console.log('refFromList->', refFromList.value)
      console.log('unref->', unref(lis))
    }, 2000)

    onMounted(() => {
      //   console.log('onMounted...', subComp.value)
      //   console.log('onMounted...', lis.value)
    })

    onBeforeUpdate(() => {
      lis.value = []
    })

    onUpdated(() => {
      console.log('onUpdated...')
    })

    onUnmounted(() => {
      console.log('onUnmounted...')
    })

    // 调试函数 当依赖项被收集完成调用
    onRenderTracked((e) => {
      //   console.log('onRenderTracked', e)
    })

    onRenderTriggered((e) => {
      //   console.log('onRenderTriggered', e)
    })
    // watch(
    //   [count, h3],
    //   (val, oldVal, onInvalite) => {
    //     console.log(val)
    //     onInvalite(() => {
    //       console.log('onInvalite')
    //     })
    //   },
    //   {
    //     flush: 'pre',
    //   }
    // )
    // setTimeout(() => {
    //   //   state.son.name = 'it by web'
    //   count.value = 100
    // }, 2000)
    // const stop = watchEffect(
    //   (onInvalidate) => {
    //     console.log('watchEffecting...', props.id, props.title)

    //     onInvalidate(() => {
    //       console.log('onInvalidateing....')
    //     })
    //   },
    //   {
    //     //   当收集依赖项的时候 开发模式有用
    //     onTrack(e) {
    //       console.log(e)
    //       //   debugger
    //     },
    //     // 当依赖项被设置值得时候
    //     onTrigger(e) {
    //       console.log(e)
    //     },
    //     //   同步 在组件更新之前运行
    //     //   flush: 'pre',
    //   }
    // )
    // onMounted(() => {
    //   watchEffect((onInvalidate) => {
    //     console.log('watchEffecting...', h3.value)
    //     onInvalidate(() => {
    //       console.log('onInvalidateing....')
    //     })
    //   })
    // })
    // setInterval(() => {
    //   count.value++
    // }, 1000)

    // setTimeout(() => {
    //   stop()
    // }, 3000)

    return {
      state,
      count,
      h3,
      subComp,
      list,
      lis,
      x,
      y,
      ...toRefs(list),
    }
  },
}
</script>
