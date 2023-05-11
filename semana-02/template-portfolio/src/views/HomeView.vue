<script>
import ProjectList from "../components/ProjectsList.vue";
import SocialLinks from "../components/SocialLinks.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  components: {
    ProjectList,
    SocialLinks,
    ContactForm,
  },
  data() {
    return {
      lista: [
        { title: "titulo1", description: "desc1" },
        { title: "titulo2", description: "desc2" },
        { title: "titulo3", description: "desc3" },
        { title: "titulo4", description: "desc4" },
        { title: "titulo5", description: "desc5" },
        { title: "titulo6", description: "desc6" },
      ],
    };
  },
};
</script>

<template>
  <main>
    <section id="hero">
      <div class="content center w-50">
        <h2 class="font-bold">Branding | Image Making</h2>
        <h1 class="font-bold">Visual Designer</h1>
        <p>
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
      </div>
      <div class="img center w-50">
        <img src="@/assets/hero2.png" alt="" />
      </div>
    </section>

    <ProjectList :projects="lista" />

    <section id="contact" class="flex">
      <div id="work-together" class="w-50">
        <h3>Let's work together</h3>
        <p>
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com This is a template Figma file, turned into code
          using Anima. Learn more at AnimaApp.com
        </p>
        <SocialLinks />
      </div>
      <div class="form w-50">
        <ContactForm />
      </div>
    </section>
  </main>
</template>

<style scoped>
.bg-primary {
  background-color: blue;
}

.bg-secondary {
  background-color: orange;
}

section {
  width: 100vw;
  padding: 2rem 4rem;
}

#hero {
  display: flex;
  justify-content: space-between;
  height: 80vh;
}

.content {
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 5rem;
}

.content h1 {
  font-size: 6rem;
  line-height: 6.5rem;
}

.content h2 {
  font-size: 1.5rem;
}

.content p {
  font-size: 1.2rem;
}

.img img {
  width: 80%;
}

@media (max-width: 400px) {
  section {
    padding: 2rem 0.7rem;
  }

  #hero {
    flex-direction: column;
    height: unset;
  }

  .content {
    width: 100%;
    padding: unset;
    align-items: center;
    text-align: center;
  }

  .content > * {
    margin: 1rem 0;
  }

  .content h1 {
    font-size: 4rem;
    line-height: 4.5rem;
  }

  .content h2 {
    font-size: 1.2rem;
  }

  .content p {
    font-size: 1rem;
  }

  .img {
    width: 100%;
  }

  #contact {
    flex-direction: column;
  }

  #contact > div {
    text-align: center;
    margin: 2rem 0;
  }

  #contact > div > * {
    margin: 1rem 0;
  }
}
</style>
