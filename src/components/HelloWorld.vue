<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-300"
  >
    <h1>Hello World</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  }
});
</script>
