export default {
  props: {
    placeholder: {
      type: String,
      default: 'Pick date'
    },
    inputClass: {
      type: Object,
      default: () => ({})
    },
    value: String
  }
}
