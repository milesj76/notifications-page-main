<script lang="ts">
  export let notification;
  let { userName, userAvatar, datetime, read, eventType, event } = notification
  $: eventDetails = determineEvent(notification);
  let message: string;
  let subject: string;
  let privateMessage: string;
  let postImg;
  
  function determineEvent(notification) {
    let { eventType, event } = notification
    
    // Handle group
    if (eventType === 'group') {
      subject = notification?.group

      if (event === 'groupLeave') message = "left the group"
      if (event === 'groupJoin') message = "has joined your group"
    }

    // Handle reaction
    if (eventType === 'reaction') {
      if (event === 'reaction') {
        message = "reacted to your recent post"
        subject = notification?.postTitle
      }

      if (event === 'comment') {
        message = "commented on your picture"
        return { postImg: notification?.postImg}
        // postImg = notification?.postImg
      }
    }

    // Handle message
    if (eventType === 'message') {
      if (event === 'privateMessage') {
        message = "sent you a private message"
        return { privateMessage: notification?.message }
      }
    }

    // Handle follow
    if (eventType === 'follow') {
      if (event === 'follow') message = "followed you"
    }
  }

</script>

<article class={"grid grid-cols-6 grid-rows-1 p-2 rounded-md text-sm text-blue-400 " + (read ? '' : 'bg-blue-100')}>
  <!-- Avatar -->
  <img src={userAvatar} alt="avatar" class="w-10 rounded-full col-span-1">

  <!-- Details -->
  <!-- <div class="col-span-5"> -->
  <div class={"col-span-5 " + (notification?.postImg ? "col-span-4" : '')}>
    <p><span class="font-extrabold text-blue-500">{userName}</span> {message} <span class={"font-extrabold " + (eventType === 'group' ? 'text-blue-base' : '')}>{subject ? subject : ''}</span><span class="text-red text-xl leading-3 px-1">{read ? '' : '•'}</span></p>

    <!-- Date -->
    <div><p class="text-blue-300">{datetime}</p></div>

    <!-- Private Message -->
    {#if eventDetails?.privateMessage}
      <div>
        {eventDetails?.privateMessage}
      </div>
    {/if}
  </div>

  <!-- Img -->
  {#if eventDetails?.postImg}
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={eventDetails?.postImg} alt="Related image" class="w-9" />
  {/if}

</article>