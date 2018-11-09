<template>
  <v-container>
    <h2 class="headline"> My Timeline </h2>
    <v-timeline>
      <v-timeline-item
        v-for="(input, i) in inputs"
        :color="input.color"
        :key="i"
        small
      >
        <span
          slot="opposite"
          :class="`headline font-weight-bold ${input.color}--text`"
          v-text="input.year"
        ></span>
        <div class="py-3">
          <h2 :class="`headline font-weight-light mb-3 ${input.color}--text`">{{ input.title }}</h2>
          <div>
            {{ input.description }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      inputs: [
        {
          color: 'blue',
          year: '2011',
          title: 'Computer Science',
          description: 'Started the Bachelor course of Computer Science at Federal Fluminense\
          University(UFF). Left the course in 2017.'
        },
        {
          color: 'green',
          year: '2015',
          title: 'Joined KDE Community',
          description: ''
        },
        {
          color: 'blue',
          year: '2016',
          title: 'Google Summer of Code',
          description: 'Participated on Google Summer of Code with KDE working on the project\
          Umbrello - The UML Editor.'
        },
        {
          color: 'green',
          year: '2016',
          title: 'Started Atelier',
          description: 'Atelier is a printer host for 3DPrinting, Free Software and under the⁠⁠\
          umbrella of KDE Community. We use C++ and the Qt framework to build the best\
          printer host that runs in all platforms.'
        },
        {
          color: 'blue',
          year: '2017',
          title:'Intership at Tv Globo',
          description:'Tv Globo is the biggest Television Company of Latin America\
          and I am proud to work there as an intern on the development of systems\
          that supports Jornalism and Sports. Python is the major language used together\
          with Continuous Delivery and  Continuous Integration.'
        },
        {
          color: 'green',
          year: '2017',
          title:'Information Systems',
          description:'Started the Bachelor course of Information Systems at Federal Fluminense\
          University(UFF).'
        },
        {
          color: 'blue',
          year: '?',
          title: 'We are all stories in the end, just make it a good one. 11th Doctor.'
        }
      ]
    })
  }
</script>
