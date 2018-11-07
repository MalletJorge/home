<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Lays Rodrigues - </span>
        <span class="font-weight-light">Software Developer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <Timeline></Timeline>
    </v-content>
  </v-app>
</template>

<script>
import Timeline from './components/timeline'

export default {
  components:{
    Timeline
  }
}
</script>
