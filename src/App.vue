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
            <v-btn flat>About Me</v-btn>
            <v-btn flat>Projects</v-btn>
            <v-btn flat>Timeline</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-layout column>
          <AboutMe></AboutMe>
          <Timeline id='timeline'></Timeline>
          <Projects></Projects>
          <Contact></Contact>
        </v-layout>
      </v-content>
    </v-container>
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
