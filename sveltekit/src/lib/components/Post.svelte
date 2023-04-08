<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Posts } from "@prisma/client";

  export let post: Posts;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<article class="card" on:click={() => goto(`/post/${post.id}`)}>
  <h2>{post.title}</h2>
  <footer>
    <p>{@html post.content}</p>
  </footer>
</article>
