<template>
  <h2 class="h2 t-red">{{text}}</h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>