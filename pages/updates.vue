<template>
  <v-wrapper>
    <v-card>
      <v-card-title v-text="$t('updates')" />
      <v-simple-table dense>
        <thead>
          <tr>
            <th class="text-left">{{$t('date')}}</th>
            <th class="text-left">{{$t('content')}}</th>
          </tr>
        </thead>
        <tbody>
        <tr
          v-for="(item, index) in items"
          :key="index" >
          <td>{{ item.date }}</td>
          <td>{{ item[$i18n.locale] }}</td>
        </tr>
      </tbody>
      </v-simple-table>
    </v-card>
  </v-wrapper>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const items = await $content('/updates').only(['ja','en','ko','date']).sortBy('date','desc').fetch();
    return { items };
  }
}
</script>
