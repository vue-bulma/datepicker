<template>
  <p class="control has-addons flatpickr" data-wrap="true" data-clickOpens="false" :class="{ [`has-addons-${alignment}`]: alignment }">
    <input class="input" :class="inputClass" type="text" :placeholder="placeholder" :value="value" data-input/>
    <slot></slot>
  </p>
</template>

<script>
import BasicInput from './BasicInput'

export default {
  mixins: [BasicInput],

  props: {
    alignment: String
  }
}
</script>
