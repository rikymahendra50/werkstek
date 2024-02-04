<template>
  <section>
    <div class="flex justify-end">
      <button class="btn btn-accent text-white btn-md">
        Add Maps Location
      </button>
    </div>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Image</th>
            <th>Create At</th>
            <th>Update At</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <td>1</td>
            <td>Amstelveen</td>
            <td>amstelveen</td>
            <td>65b762308998f.jpg</td>
            <td>2024-01-26T09:22:32.000000Z</td>
            <td>2024-01-29T08:30:40.000000Z</td>
            <td class="flex items-center">
              <button class="btn btn-sm btn-success text-gray-100">EDIT</button>
              ||
              <button class="btn btn-sm btn-error">DELETE</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
