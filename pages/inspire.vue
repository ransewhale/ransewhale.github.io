<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
        <span class="commentout">コンテンツがないのでこのページは残しておきます。</span>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const items = await $content('/updates').only(['ja','en','ko','date']).limit(5).sortBy('date','desc').fetch();
    return { items };
  },
  head(){
    return {
      title: 'Inspire'
    }
  }
}
</script>
