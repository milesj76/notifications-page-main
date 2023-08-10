<script lang="ts">
  export let notification;
  let { userName, userAvatar, datetime, read, eventType, event } = notification
  let eventDetails = determineEvent(eventType, event);
  
  function determineEvent(type, eventObj) {
    // return eventObj
  }

</script>

<article class="p-2 bg-blue-100 rounded-md">
  <!-- Avatar -->
  <img src={userAvatar} alt="avatar">

  <!-- Details -->
  <div>
    <p><span>{userName}</span> {eventDetails} <span class="" /></p>

    <!-- Date -->
    <div><p>{datetime}</p></div>
  </div>

</article>