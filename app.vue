<template>
  <main>
    <NuxtLayout>
      <nav class="flex items-center justify-between gap-4 px-24 shadow-md">
        <NuxtLink to="/" class="n-link-base flex items-center gap-4">
          <div
            class="text-2xl border font-semibold w-14 py-2 flex items-center bg-danger-default text-white justify-center"
          >
            K
          </div>
          <p class="text-xl text-danger-default font-medium">
            Keras Community Day
          </p>
        </NuxtLink>
        <ul class="inline-flex h-full text-base items-center">
          <li class="gap-2 h-20">
            <NuxtLink
              to="/"
              class="n-link-base border-b-2 border-transparent transition-all delay-75 hover:text-danger-default hover:bg-gray-dark/10 h-full flex items-center justify-center p-5 text-black-default/60"
              active-class="!text-danger-default !hover:bg-danger-default/10 !border-danger-default"
            >
              Home
            </NuxtLink>
          </li>
          <li class="gap-2 h-20">
            <NuxtLink
              to="/about"
              class="n-link-base border-b-2 border-transparent transition-all delay-75 hover:text-danger-default hover:bg-gray-dark/10 h-full flex items-center justify-center p-5 text-black-default/60"
              active-class="!text-danger-default !hover:bg-danger-default/10 !border-danger-default"
            >
              About
            </NuxtLink>
          </li>
          <li class="gap-2 h-20">
            <NuxtLink
              to="/orgs"
              class="n-link-base border-b-2 border-transparent transition-all delay-75 hover:text-danger-default hover:bg-gray-dark/10 h-full flex items-center justify-center p-5 text-black-default/60"
              active-class="!text-danger-default !hover:bg-danger-default/10 !border-danger-default"
            >
              Organizations
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
