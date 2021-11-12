import type { Client } from "@notionhq/client";

export async function children(id: string, client: Client) {
  let hasMore = true;
  let cursor: string = "";
  let results = [];
  do {
    let blocks = await client.blocks.children.list({
      block_id: id,
      start_cursor: cursor,
    });
    hasMore = blocks.has_more;
    cursor = blocks.next_cursor || "";
    results.push(...blocks.results);
  } while (hasMore);
}
