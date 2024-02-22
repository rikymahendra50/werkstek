<template>
  <div class="lg:max-h-[600px]">
    <h3 class="text-lg">Contact</h3>
    <div class="overflow-auto">
      <!-- <pre>
        {{ data }}
      </pre> -->
      <table class="table">
        <thead>
          <tr class="text-md">
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Interaction</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data.data">
            <th>{{ index + 1 }}</th>
            <th>{{ item.first_name }}</th>
            <th>{{ item.last_name }}</th>
            <th>{{ item.email }}</th>
            <th>{{ item.subject }}</th>
            <th class="max-w-[300px]">
              {{ item.message }}
            </th>
            <td class="flex gap-2 items-center">
              <button class="btn btn-outline btn-warning btn-sm">Reply</button>
              <button
                class="btn btn-error btn-outline btn-sm"
                @click="showModal(index)"
              >
                Delete
              </button>
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
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/admins/contacts`, {
  method: "get",
  ...requestOptions,
});
const showModal = (index) => {
  const modalId = `my_modal_${index}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

const deleteContact = async (locatieSlug) => {
  loading.value = true;
  console.log("test");
  try {
    const response = await useFetch(`/admins/contacts/${locatieSlug}`, {
      method: "DELETE",
      ...requestOptions,
    });
    console.log("Response:", response.data);
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
  middleware: ["auth", "admin"],
});
</script>
