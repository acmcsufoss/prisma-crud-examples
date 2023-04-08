<script lang="ts">
  import type { Posts } from "@prisma/client";
  export let data: { post: Posts };

  $: ({ id, title, content } = data.post);
</script>

<!-- svelte-ignore missing-declaration -->
<form method="post" action="?/update">
  <br /><br />
  <input name="title" type="text" value={title} />
  <textarea name="content" id="content" cols="50" rows="10" value={content} />
  <div class="grid">
    <div class="card">
      <span>Id: </span>
      <input type="text" name="id" value={id} readonly />
    </div>
    <button type="submit">Udate</button>
  </div>
</form>
<form method="post" class="grid" action="?/delete">
  <input name="id" type="text" value={id} readonly />
  <button type="submit">Delete</button>
</form>
