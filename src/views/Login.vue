<template>
  <div>
    <FormLogin />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormLogin from "@/components/FormLogin.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Login",
  components: {
    FormLogin
  }
});
</script>
