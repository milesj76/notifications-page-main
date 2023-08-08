<script lang="ts">
  let unreadNotifications = 3
</script>

<main class="bg-white mx-4 my-4 max-w-screen">
  <header class="flex justify-between items-center">
    <div class="flex space-x-2">
      <h1 class="font-extrabold text-xl">Notifications</h1>
      <span class="badge badge-secondary badge-lg rounded-md text-base py-3 bg-blue-base text-white">{unreadNotifications}</span>
    </div>

    <div>
      <button class="btn border-none normal-case font-normal hover:text-blue-base p-0">Mark all as read</button>
    </div>
  </header>

  <!-- Notifications -->
  <section>
    
  </section>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;800&display=swap');
</style>