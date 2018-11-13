<template>
  <v-container grid-list-xl>
    <div class="headline">
      Projects
    </div>
    <v-layout column>
      <v-flex>
        <v-card hover>
          <v-card-title primary-title class="headline"> Atelier | #3DPrinting</v-card-title>
          <v-card-text>
            <p>
              Atelier is a printer host for 3DPrinters. It allows you to manage and control
              your 3DPrinter from your computer, and in the future from any device.
              Atelier is built with Qt and KDE Frameworks. Using all the power of C++ to
              bring the best experience to the user while keeping the standards of
              Free Software that built the 3DPrinting community in the past years.
            </p>
            <p>
              Find out more about Atelier:
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn href="https://atelier.kde.org" target="_blank" flat>Website</v-btn>
            <v-btn href="https://t.me/KDEAtelier" flat>Join on Telegram</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card hover>
          <v-card-title primary-title class="headline">This | #VueJs </v-card-title>
          <v-card-text>
            <p>
              This landing page is my new home. Used to learn a little more about VueJs.
              Used Vuetify as framework for the components and layout.
              Since my first web page, I though that I didn't like web development,
              but every time that I have chance to do something better, I give it a try.
              And VueJs its an amazing opportunity to do that.
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card hover>
          <v-card-title primary-title class="headline">Akademy 2018 Schedule </v-card-title>
          <v-card-text>
            <p>
              Akademy is the international conference of KDE Community. And in 2018 it
              happened at the beautiful city of Vienna/Austria. To support my fellow
              friends of the community, I built a progressive web app using VueJs and Quasar Framework
              so everyone could access a mobile-friendly version of the schedule.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn href="https://lays147.github.io/Akademy" target="_blank" flat>Website</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
