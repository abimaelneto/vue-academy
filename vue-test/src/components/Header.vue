<script>
export default {
    props: {
        user: String
    },
}
</script>

<template>
    <header>
      <h1>Mal vindo, {{ user }}!</h1>
      {{user }}
    </header>
</template>