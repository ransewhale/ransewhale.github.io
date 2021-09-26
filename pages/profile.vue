<template>
  <v-wrapper>
    <v-card class="pb-4">
      <v-card-title>{{$t('selfintroduction')}}</v-card-title>
      <v-card-text
        v-for="(text, i) in $t('si-texts')"
        :key="i" class="pb-0 pt-0">
        {{text}}
      </v-card-text>
    </v-card>
    <v-card class="mt-4">
      <v-card-title>{{$t('activities')}}</v-card-title>
      <div class="activity-timeline">
        <v-timeline align-top :dense="$vuetify.breakpoint.name==='xs'||$vuetify.breakpoint.name==='sm'">
          <v-timeline-item
            v-for="(item, index) in activity"
            :key="index" color="blue lighten-3"
            small>
            <v-card color="blue lighten-3">
              <v-card-title>{{item.year}}</v-card-title>
              <v-card-text class="white text--primary mt-0 pa-0">
                <v-list>
                  <v-list-item
                    v-for="(text, i) in item.items"
                    :key="i"
                    dense>
                      {{$t(text)}}
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-card>
  </v-wrapper>
</template>

<script>
export default {
  data(){
    return {
      activity: [
        {
          year: 1998,
          items: ['born']
        },
        {
          year: "2014",
          items: ['enterhighschool']
        },
        {
          year: "2017",
          items: ['highscoolgraduation','enteruniversity','bandofsisters']
        },
        {
          year: "2019",
          items: ['thelastempress']
        },
        {
          year: "2021",
          items: ['universitygraduation','penthouse','penthouse2','penthouse3']
        },
        {
          year: "Future",
          items: ['whatcanido']
        }
      ]
    }
  },
  head(){
    return {
      title: 'Profile'
    }
  }
}
</script>
