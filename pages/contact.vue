<template>
  <v-wrapper>
    <v-card class="text-center pa-4">
      <v-card-title>{{$t('contact')}}</v-card-title>
      <v-btn
        v-for="item in items"
        :key="item.name"
        :href="item.href"
        fab dark target="_blank" link large class="ml-2 mr-2">
        <v-icon dense x-large class="float-left">{{item.icon}}</v-icon>
      </v-btn>
    </v-card>
  </v-wrapper>
</template>

<script>


export default {
  data(){
    return {
      items: [
        {
          name: 'Twitter',
          icon: 'mdi-twitter',
          href: 'https://twitter.com/323O65281'
        },
        {
          name: 'Github',
          icon: 'mdi-github',
          href: 'https://github.com/ransewhale'
        },
        {
          name: 'Instagram',
          icon: 'mdi-instagram',
          href: 'https://instagram.com/eballenov'
        },
        {
          name: 'Website',
          icon: 'mdi-keyboard-return',
          href: 'http://ransewhale.net/'
        }
      ]
    }
  }
}
</script>
