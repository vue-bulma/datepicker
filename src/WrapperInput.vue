<template>
  <p class="control has-addons flatpickr" data-wrap="true" data-clickOpens="false" :class="{ [`has-addons-${alignment}`]: alignment }">
    <input class="input" :class="inputClass" type="text" :placeholder="placeholder" :readonly="readonly" v-model="date" data-input/>
    <slot></slot>
  </p>
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
