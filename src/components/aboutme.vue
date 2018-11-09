<template>
  <v-container>
    <v-layout>
      <v-card dark hover>
        <v-card-media :src='me.src' :aspect-ratio="3.75"></v-card-media>
        <v-card-title primary-title class="headline"> About Me</v-card-title>
        <v-card-text>
          <h3>
            <strong>"Never give in, Never give up. 12th Doctor"</strong><br />
              ~7 years in college. <br />~3 years going to events and discovering
              what the world has to offer and learning how I can use
              <strong>technology</strong> to change my life and the world.<br /> Below you can
              discover what are the adventures that I have in my life. Always
              using Doctor Who speaches to try to be the best person that I can.
          </h3>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    me:{src: require('@/assets/me.png')}
  })
}
</script>
