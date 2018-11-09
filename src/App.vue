<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Lays Rodrigues - </span>
        <span class="font-weight-light">Software Developer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn color="indigo">About Me</v-btn>
        <v-btn color="indigo">Projects</v-btn>
        <v-btn color="indigo">Timeline</v-btn>
    </v-toolbar>
    <v-content>
      <v-layout column>
        <AboutMe></AboutMe>
        <Timeline id='timeline'></Timeline>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import Timeline from './components/timeline'
import AboutMe from './components/aboutme'
export default {
  components:{
    Timeline,
    AboutMe
  }
}
</script>
