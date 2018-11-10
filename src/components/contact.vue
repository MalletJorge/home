<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-title class="headline">Don't forget to say Hi!</v-card-title>
          <v-card-text > <h3>Connect with me!</h3> </v-card-text>
          <v-card-text>
          <v-btn
            v-for="(input, i) in inputs"
            :key="i"
            class="mx-3 white--text"
            icon
            :href="input.url"
            target="_blank"
          >
          <v-icon size="24px">{{ input.icon }}</v-icon>
        </v-btn>
      </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      inputs: [
        {
          icon: 'fa-at',
          url: 'mailto:lays.rodrigues@kde.org?Subject=Hello%20World'
        },
        {
          icon: 'fa-github',
          url:'https://github.com/lays147',
        },
        {
          icon:'fa-linkedin',
          url:'https://www.linkedin.com/in/laysrodrigues147/',
        },
        {
          icon:'fa-telegram',
          url:'https://t.me/lays147'
        },
        {
          icon:'fa-twitter',
          url:'https://twitter.com/lays147',
        },
        {
          icon:'fa-instagram',
          url:'https://www.instagram.com/lays_into_3dprinting'
        },
        {
          icon:'fa-wordpress',
          url: 'http://laysrodriguesdev.wordpress.com/'
        }
      ]
    })
  }
</script>
