<template>
  <div>
    <h1>Vue 3.0</h1>
    <HelloWord
      :info="{ name: 'yangyong', age: 30 }"
      @cao="() => {}"
      id="app"
      class="apps"
      ref="app"
    >
      <p>solts p</p>
    </HelloWord>
  </div>
</template>
<script>
import HelloWord from '@/components/HelloWorld'
export default {
  components: { HelloWord },
}
</script>
