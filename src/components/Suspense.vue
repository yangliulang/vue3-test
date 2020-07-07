<template>
  <div>
    Suspense<br />
    <Suspense>
      <template #default>
        <SuspensLayzed />
      </template>
      <template #fallback>loading...</template>
    </Suspense>
  </div>
</template>
<script>
import SuspensLayzed from './SuspensLayz'
export default {
  name: 'SuspenseComp',
  components: {
    SuspensLayzed,
  },
}
</script>
