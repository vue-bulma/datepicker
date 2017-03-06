<template>
  <input class="input" :class="inputClass" type="text" :placeholder="placeholder" :readonly="readonly" v-model="date"/>
</template>

<script>
import BaseInput from './BaseInput'

export default {
  mixins: [BaseInput],

  props: {
    readonly: Boolean
  }
}
</script>
