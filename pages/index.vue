<template>
  <v-wrapper>
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="pa-4">
          <v-card-title>{{ $t('welcome') }}</v-card-title>
          <v-img :src="require('@/assets/images/rw.svg')" />
        </v-card>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="mt-4 pa-4">
              <v-card-title>{{ $t('recentupdates') }}</v-card-title>
              <v-list dense>
                <v-list-item v-for="(item, index) in items"
                  :key="index" >
                  <v-list-item-content>
                    <v-list-item-title>
                      ({{item.date}}){{item[$i18n.locale]}}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item> 
              </v-list>
              <v-card-text class="pa-0 text-right" dense><NuxtLink :to="localePath('/updates')">{{ $t('seeallupdates') }}</NuxtLink></v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="mt-4 pa-4" max-height="800">
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-4">
          <a class="twitter-timeline" data-height="900px" data-dnt="true" data-theme="light" href="https://twitter.com/323O65281?ref_src=twsrc%5Etfw">Tweets by 323O65281</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </v-card>
      </v-col>
    </v-row>
  </v-wrapper>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    // const items = await $content('/updates').only(['ja','en','ko','date']).limit(3).sortBy('id','desc').fetch();
    const data = await $content('/updates').fetch();
    const items = data.updates.sort(function(a,b){return b.id-a.id;}).slice(0,3);
    return { items };
  }
}
</script>
