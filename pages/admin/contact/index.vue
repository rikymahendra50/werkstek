<template>
  <main class="flex-grow overflow-y-auto max-h-[500px]">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-3xl font-bold">Contact</div>
        </div>
      </div>
      <div>
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">First Name</th>
                <th class="font-medium">Last Name</th>
                <th class="font-medum">Email</th>
                <th class="font-medium">Subject</th>
                <th class="font-medium">Message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in contacts?.data"
              >
                <td class="text-gray-500 text-sm font-normal !py-2">
                  {{ item.first_name }}
                </td>
                <td class="font-medium">{{ item.last_name }}</td>
                <td class="font-medum">{{ item.email }}</td>
                <td class="font-medium">{{ item.subject }}</td>
                <td
                  class="font-medium max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  <NuxtLink :to="`/admin/contact/${item.id}`">
                    {{ item.message }}
                  </NuxtLink>
                </td>
                <td class="flex justify-center items-center gap-4 my-1">
                  <NuxtLink :to="`/admin/contact/reply/${item.id}`">
                    <button
                      type="button"
                      class="btn btn-sm normal-case btn-ghost btn-square"
                    >
                      <icon
                        name="i-heroicons-chat-bubble-oval-left-ellipsis"
                        class="mr-1"
                      />
                    </button>
                  </NuxtLink>
                  <span class="text-gray-500 text-sm font-normal !py-1.5">
                    <NuxtLink :to="`/admin/contact/${item.id}`">
                      <div placements="auto">
                        <button
                          type="button"
                          class="btn btn-sm normal-case btn-ghost btn-square"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            class="icon"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M8.625 12a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0H8.25m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0H12m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0h-.375M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </NuxtLink>
                  </span>
                  <div class="cursor-pointer m-2" @click="showModal(index)">
                    <icon name="i-heroicons-trash" class="mr-1" />
                  </div>
                  <dialog :id="'my_modal_' + index" class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-xl text-red-500">Warning !</h3>
                      <p class="py-4 text-lg">
                        Are you sure want to delete this item?
                      </p>
                      <div class="modal-action">
                        <form method="dialog">
                          <button
                            @click="deleteContact(item.id)"
                            class="btn btn-outline btn-error mr-3"
                          >
                            Delete
                          </button>
                          <button class="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const { data: contacts, error } = await useFetch(`/admins/contacts`, {
  method: "get",
  ...requestOptions,
});

const selectedContactIndex = ref(null);
const selectedContact = ref(null);

// Show modal method
const showModalDetail = (index) => {
  selectedContactIndex.value = index;
  selectedContact.value = contacts.data[index];
  const modalId = `detail_modal_${index}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

// Close modal method
const closeModal = () => {
  selectedContactIndex.value = null;
  selectedContact.value = null;
};

const showModal = (index) => {
  const modalId = `my_modal_${index}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

const deleteContact = async (contactslug) => {
  loading.value = true;
  try {
    await useFetch(`/admins/contacts/${contactslug}`, {
      method: "DELETE",
      ...requestOptions,
    });
    window.location.reload();
  } catch (error) {
    console.error("Error:", error);
  }
};

useHead({
  title: "Contact",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
<style scoped>
.overflow-auto {
  overflow-y: auto;
}

.overflow-auto::-webkit-scrollbar {
  display: none;
}
</style>
