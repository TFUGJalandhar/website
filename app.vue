<template>
  <main>
    <NuxtLayout>
      <nav class="flex align-center gap-4 p-4">
        <NuxtLink to="/" class="n-link-base text-black"> Home </NuxtLink>
        <NuxtLink to="/about" class="n-link-base text-black"> About </NuxtLink>
        <NuxtLink to="/orgs" class="n-link-base text-black"> Organizations </NuxtLink>
      </nav>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
