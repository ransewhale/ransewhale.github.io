<template>
  <v-app>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.name==='xs'||$vuetify.breakpoint.name==='sm'"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      color="blue darken-2" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="localePath(item.to)"
          router exact link>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed app dense >
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.name==='xs'||$vuetify.breakpoint.name==='sm'" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-btn
          color="blue darken-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(lang, index) in langs"
          :key="index"
          :to="switchLocalePath(lang.code)"
          exact
        >
          <v-list-item-title>{{ lang.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
    <v-main>
      <v-tabs v-if="$vuetify.breakpoint.name!=='xs'&&$vuetify.breakpoint.name!=='sm'"
        color="blue darken-2" fixed-tabs centered>
        <v-tab
          v-for="(item, i) in items"
          :key="i"
          :to="localePath(item.to)"
          router exact>
          {{item.title}}
        </v-tab>
      </v-tabs>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} ransewhale</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'About me',
          to: '/profile'
        },
        {
          title: 'Inspire',
          to: '/inspire'
        },
        {
          title: 'Fun',
          to: '/fun'
        },
        {
          title: 'Contact',
          to: '/contact'
        }
      ],
      langs : [
        {
          code: 'ja',
          name: '日本語'
        },
        {
          code: 'en',
          name: 'English'
        },
        {
          code: 'ko',
          name: '한국어'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'ransewhale.net'
    }
  },
  head(){
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    };
  }
}
</script>
