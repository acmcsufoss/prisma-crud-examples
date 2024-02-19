<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Post } from "@prisma/client";

  export let post: Post;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card" on:click={() => goto(`/post/${post.id}`)}>
  <h2>{post.title}</h2>
  <section>
    <p>{@html post.content}</p>
  </section>
  <footer>
  </footer>
</div>
