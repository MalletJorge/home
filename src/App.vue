<template>
  <v-app :dark="isDark">
    <v-container>
      <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
          <span>Lays Rodrigues</span>
          <span v-show="$vuetify.breakpoint.smAndUp" class="font-weight-light"> - Software Developer</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-show="$vuetify.breakpoint.smAndUp">
          <v-btn href="#contact" flat>Contact Me</v-btn>
          <v-btn href="#slides" flat>Slides</v-btn>
          <v-btn href="#projects" flat>Projects</v-btn>
          <v-btn href="#timeline" flat>Timeline</v-btn>
          <v-layout align-end fill-height wrap>
            <v-switch label="Dark Theme" flat v-model="isDark"></v-switch>
          </v-layout>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-layout column>
          <AboutMe></AboutMe>
          <v-layout :column="$vuetify.breakpoint.xsOnly" :row="$vuetify.breakpoint.smAndUp">
            <Presentations id='slides'></Presentations>
            <Contact id='contact'></Contact>
          </v-layout>
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
import Presentations from './components/presentations'
export default {
  data () {
    return {isDark: true}
  },
  components: {
    Timeline,
    AboutMe,
    Projects,
    Contact,
    Presentations
  },
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
}
</script>
