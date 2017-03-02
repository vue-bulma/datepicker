<template>
  <input class="input" :class="inputClass" type="text" :placeholder="placeholder" :readonly="readonly" v-model="date"/>
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
    },
    value: String
  },

  data () {
    return {
    }
  },
  
  computed: {
    date: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      }
    }
  }
}
</script>
