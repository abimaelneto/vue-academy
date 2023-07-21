<script>
export default {
  data: () => {
    return {
      firstName: "",
      banana: [
        (value) => {
          if (!value) return "Please say something";
          if (!value.includes(" "))
            return "You must enter a full name with spaces";
          return true;
        },
      ],
      isFormValid: true,
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      if (!this.isFormValid) {
        alert("Preencha direito, por favor!");
        return;
      }
      //enviar os dados para api
      console.log(this.isFormValid);
    },
  },
  computed: {
    sheetClasses() {
      return {
        "w-full": this.$vuetify.display.lg,
        "w-75": this.$vuetify.display.md,
        "bg-yellow": this.$vuetify.display.lgAndUp,
      };
    },
  },
};
</script>

<template>
  <v-sheet :class="['mx-auto', 'text-pink', sheetClasses]">
    <v-form @submit.prevent v-model="isFormValid">
      <v-text-field
        v-model="firstName"
        :rules="banana"
        label="Full name"
      ></v-text-field>
      <v-btn
        type="submit"
        :disabled="!isFormValid"
        @click="handleSubmit"
        block
        class="mt-2"
        >Submit</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<style scoped></style>
