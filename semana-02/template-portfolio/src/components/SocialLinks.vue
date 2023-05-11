<script>
import Instagram from "@/assets/Vector.svg";
import Behance from "@/assets/Vector-1.svg";
import Dribbble from "@/assets/Vector-2.svg";
import Facebook from "@/assets/Vector-3.svg";
import Discord from "@/assets/Vector-4.svg";

export default {
  data() {
    return {
      icons: [Discord, Instagram, Dribbble, Facebook, Behance],
    };
  },
};
</script>

<template>
  <div class="container center">
    <div class="icon" v-for="icon in icons" :key="icon">
      <img :src="icon" alt="" />
    </div>
  </div>
</template>

<style scoped>
.container {
  justify-content: space-around;
}
</style>
