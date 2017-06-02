<template>
  <input class="input" :class="inputClass" type="text" :placeholder="placeholder" :value="value"/>
</template>

<script>
import BasicInput from './BasicInput'

export default {
  mixins: [BasicInput]
}
</script>
