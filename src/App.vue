<template>
  <v-app dark>
    <v-container>
      <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
          <span>Lays Rodrigues - </span>
          <span class="font-weight-light">Software Developer</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn href="#contact" flat>Contact Me</v-btn>
          <v-btn href="#projects" flat>Projects</v-btn>
            <v-btn href="#timeline" flat>Timeline</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-layout column>
          <AboutMe></AboutMe>
          <Contact id='contact'></Contact>
          <Projects id='projects'></Projects>
          <Timeline id='timeline'></Timeline>
        </v-layout>
      </v-content>
    </v-container>
    <v-footer class="pa-3">
      <v-layout justify-center>
        <div class="justify-center">Lovely host on <v-icon>fa-github</v-icon> Pages || {{ new Date().getFullYear() }}</div>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Timeline from './components/timeline'
import AboutMe from './components/aboutme'
import Projects from './components/projects'
import Contact from './components/contact'
export default {
  components:{
    Timeline,
    AboutMe,
    Projects,
    Contact
  }
}
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-103612095-5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-103612095-5');
</script>
