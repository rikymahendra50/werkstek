<template>
  <div
    class="rounded-full flex items-center gap-2 p-1 md:p-2 px-1 lg:px-2 bg-quaternary max-h-[60px]"
  >
    <input
      type="text"
      class="bg-transparent pl-2 text-sm h-full outline-none box-border text-white"
      placeholder="Mail@gmail.com"
      :style="{ WebkitAppearance: 'none' }"
    />
    <button class="rounded-full bg-tertiary text-white">
      <svg
        width="34"
        height="35"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8125 18.6799L16.9997 12.4927L10.8125 6.30554"
          stroke="#859C81"
          stroke-width="1.875"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>
