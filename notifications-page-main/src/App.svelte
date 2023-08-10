<script lang="ts">
  import Notification from "./lib/Notification.svelte";
  import { notifications } from "./lib/db";

  let orderedNotifications = $notifications.reverse()
  let unreadNotifications = () => {
    let unread = 0;
    $notifications.forEach(item => item.read ? null : unread++)
    return unread
  }
</script>

<main class="bg-white mx-4 my-4 max-w-screen">
  <header class="flex justify-between items-center">
    <div class="flex space-x-2">
      <h1 class="font-extrabold text-xl">Notifications</h1>
      <span class="badge badge-secondary badge-lg rounded-md text-base py-3 bg-blue-base text-white">{unreadNotifications()}</span>
    </div>

    <div>
      <button class="btn border-none normal-case font-normal hover:text-blue-base p-0">Mark all as read</button>
    </div>
  </header>

  <!-- Notifications -->
  <section class="space-y-3"> 
    {#each orderedNotifications as notification}
      <Notification {notification} />
    {/each}
  </section>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;800&display=swap');
</style>