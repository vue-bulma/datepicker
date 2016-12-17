<template>
  <input class="input" :class="inputClass" type="text" :placeholder="placeholder" :readonly="readonly" v-model="value"/>
</template>

<script>
export default {
  props: {
    alignment: String,
    config: {
      type: Object,
      default: () => ({})
    },
    l10n: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      default: 'Pick date'
    },
    readonly: Boolean,
    inputClass: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      value: ''
    }
  }
}
</script>
