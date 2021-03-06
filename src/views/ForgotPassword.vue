<template>
  <div>
    <FormForgotPassword />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormForgotPassword from "@/components/FormForgotPassword.vue"; // @ is an alias to /src

export default defineComponent({
  name: "PasswordForgot",
  components: {
    FormForgotPassword
  }
});
</script>
