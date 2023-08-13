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

<div class="wide:bg-blue-100 min-h-screen wide:p-8">
  <main class="bg-white px-4 wide:px-6 py-4 max-w-2xl mx-auto rounded-lg">
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
    <section class="space-y-3 mx-auto my-2">
      {#each orderedNotifications as notification}
        <Notification {notification} />
      {/each}
    </section>
  </main>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;800&display=swap');
</style>