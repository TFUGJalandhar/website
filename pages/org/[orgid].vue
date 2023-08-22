<template>
    <p> {{ data.name }} </p>
    <p> {{ data.location }} </p>
</template>

<script setup>
    const { path } = useRoute();
    const orgid = path.split('/')[2]

    const { data } = await useAsyncData('orgs', () => {
        return queryContent('/orgs').where({
            _path: '/orgs/' + orgid
        }).findOne()
    })
</script>