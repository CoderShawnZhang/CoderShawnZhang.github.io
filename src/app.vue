<template lang="jade">
div
  img(class="logo", src="../assets/logo.png")
  h1 {{msg}}
  comp-a
  comp-b
  counter
</template>

<script>
import CompA from '../components/a.vue'
import CompB from '../components/b.vue'
import Counter from '../components/counter.vue'
export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  components: {
    CompA,
    CompB,
    Counter
  }
}
</script>
