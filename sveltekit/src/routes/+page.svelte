<script lang="ts">
  import Post from '$lib/components/Post.svelte';
  import type { PageData } from "./$types";
  export let data: PageData;


</script>

<div class="container">
  <h1>Posts Feed</h1>
  <main class="container">
    {#each data.posts as post}
      <Post {post} />
    {/each}
    <section>
      <form method="post" action="?/post">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" placeholder="Title" />
        <label for="content">Content</label>
        <textarea
          name="content"
          id="content"
          cols="50"
          rows="10"
          placeholder="Post Content..."
        />
        <button type="submit">Add Post</button>
      </form>
    </section>
  </main>
</div>
