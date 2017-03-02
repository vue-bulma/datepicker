<template>
  <p class="control has-addons flatpickr" data-wrap="true" data-clickOpens="false" :class="{ [`has-addons-${alignment}`]: alignment }">
    <input class="input" :class="inputClass" type="text" :placeholder="placeholder" :readonly="readonly" v-model="date" data-input/>
    <slot></slot>
  </p>
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

  mounted () {
    this.value = this.$el.value
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
