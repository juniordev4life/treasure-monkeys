<template>
  <div>
    <FormRegister />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormRegister from "@/components/FormRegister.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Register",
  components: {
    FormRegister
  }
});
</script>
