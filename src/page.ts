namespace Notion {
  type ParentTypes = {
    page_id: string;
    database_id: string;
    workspace: true;
  };

  export type Page = {
    [K in keyof ParentTypes]: {
      object: "page";
      id: string;
      created_time: string;
      last_edited_time: string;
      archived: boolean;
      icon: File | Emoji;
      cover: File;
      url: string;
      properties: K extends "page_id" | "workspace" ? { title: string } : {};
      parent: { type: K } & Pick<ParentTypes, K>;
    };
  }[keyof ParentTypes];
}

function page(p: Notion.Page) {
  if (p.parent.type === "workspace") {
    // p.properties.title;
  }
}
