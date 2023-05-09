<script setup></script>

<template>
  <main>
    <section id="hero">
      <div class="content">
        <h2>Branding | Image Making</h2>
        <h1>Visual Designer</h1>
        <p>
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
      </div>
      <div class="img-container">
        <img src="@/assets/hero.png" alt="" />
      </div>
    </section>
    <section>logos</section>
    <section>skills</section>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  margin: 0;
  padding: 0;
}
#hero {
  background: lightcoral;
  display: flex;
  justify-content: space-between;
  height: 80vh;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Epilogue", sans-serif;

  padding: 2rem 5rem;
}

.content h1 {
  font-weight: 600;
  font-size: 6rem;
  line-height: 6.5rem;
}

.content h2 {
  font-weight: 600;
  font-size: 1.5rem;
}

.content p {
  font-size: 1.2rem;
}
</style>
