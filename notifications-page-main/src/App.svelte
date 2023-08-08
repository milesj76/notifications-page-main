<script lang="ts">
  let unreadNotifications = 3
</script>

<main class="max-w-screen bg-red">
  <header class="w-screen flex justify-between">
    <div class="flex space-x-4">
      <h1>Notifications</h1>
      <span class="badge badge-secondary badge-lg">{unreadNotifications}</span>
    </div>

    <div>
      <button class="btn btn-ghost normal-case">Mark all as read</button>
    </div>
  </header>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;800&display=swap');
</style>