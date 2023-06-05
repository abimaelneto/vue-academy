<script>
export default {
  data() {
    return {
      currencies: {},
      origin: "",
      target: "",
      value: null,
      conversionRate: "",
    };
  },
  methods: {
    async getCurrencies() {
      const res = await fetch(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
      );
      this.currencies = await res.json();
    },
    async getConversionRate() {
      if (!this.origin || !this.target) return;
      const res = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${this.origin}/${this.target}.json`
      );
      const data = await res.json();
      this.conversionRate = data[this.target];
    },
  },
  computed: {
    result() {
      return this.value * this.conversionRate;
    },
  },
  mounted() {
    this.getCurrencies();
  },
};
</script>

<template>
  <div id="currency">
    <input type="number" v-model="value" />
    <select v-model="origin" @change="getConversionRate">
      <option v-for="(label, value) in currencies" :value="value" :key="label">
        {{ label }}
      </option>
    </select>

    <input type="number" readonly :value="result" />
    <select v-model="target" @change="getConversionRate">
      <option v-for="(label, value) in currencies" :value="value" :key="label">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
div#currency {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

div#currency > * {
  width: 40%;
  height: 2rem;
}
</style>
