<template>
  <h1 class="text-3xl font-bold text-center w-full my-16">Organizations</h1>
  
  <table class="table-auto w-full" aria-describedby="Organisations List">
    <thead>
      <tr>
        <th class="px-4 py-2">Name</th>
        <th class="px-4 py-2">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="org in data" :key="org.id">
        <td class="border px-4 py-2 text-center">{{ org.name }}</td>
        <td class="border px-4 py-2 text-center">{{ org.description }}</td>
      </tr>
    </tbody>
  </table>

</template>

<script setup>
  const { data } = await useAsyncData('orgs', () => {
    return queryContent('/orgs').find()
  })
</script>
