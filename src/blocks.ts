namespace Notion {
  export type Block =
    | Block.Paragraph
    | Block.Heading1
    | Block.Heading2
    | Block.Heading3
    | Block.Callout
    | Block.Quote
    | Block.BulletedListItem
    | Block.NumberedListItem
    | Block.Todo
    | Block.Toggle
    | Block.Code
    | Block.ChildPage
    | Block.ChildDatabase
    | Block.Embed
    | Block.Image
    | Block.Video
    | Block.File
    | Block.PDF
    | Block.Bookmark
    | Block.Equation;

  export namespace Block {
    interface Base {
      object: "block";
      id: string;
      type: string;
      created_time: string;
      last_edited_time: string;
      archived: boolean;
      has_children: boolean;
    }

    export interface Paragraph extends Base {
      type: "paragraph";
      paragraph: {
        text: RichText[];
        children: Block[];
      };
    }

    export interface Heading1 extends Base {
      type: "heading_1";
      heading_1: {
        text: RichText[];
      };
    }

    export interface Heading2 extends Base {
      type: "heading_2";
      heading_2: {
        text: RichText[];
      };
    }

    export interface Heading3 extends Base {
      type: "heading_3";
      heading_3: {
        text: RichText[];
      };
    }

    export interface Callout extends Base {
      type: "callout";
      callout: {
        icon: Notion.File | Emoji;
        text: RichText[];
        children: Block[];
      };
    }

    export interface Quote extends Base {
      type: "quote";
      quote: {
        text: RichText[];
        children: Block[];
      };
    }

    export interface BulletedListItem extends Base {
      type: "bulleted_list_item";
      bulleted_list_item: {
        text: RichText[];
        children: Block[];
      };
    }

    export interface NumberedListItem extends Base {
      type: "numbered_list_item";
      numbered_list_item: {
        text: RichText[];
        children: Block[];
      };
    }

    export interface Todo extends Base {
      type: "to_do";
      to_do: {
        checked?: boolean;
        text: RichText[];
        children: Block[];
      };
    }

    export interface Toggle extends Base {
      type: "toggle";
      toggle: {
        text: RichText[];
        children: Block[];
      };
    }

    export interface Code extends Base {
      type: "code";
      code: {
        language: string;
        text: RichText[];
      };
    }

    export interface ChildPage extends Base {
      type: "child_page";
      child_page: {
        title: string;
      };
    }

    export interface ChildDatabase extends Base {
      type: "child_database";
      child_database: {
        title: string;
      };
    }

    export interface Embed extends Base {
      type: "embed";
      embed: {
        url: string;
      };
    }

    export interface Image extends Base {
      type: "image";
      image: Notion.File;
    }

    export interface Video extends Base {
      type: "video";
      video: Notion.File;
    }

    export interface File extends Base {
      type: "file";
      file: Notion.File;
    }

    export interface PDF extends Base {
      type: "pdf";
      pdf: Notion.File;
    }

    export interface Bookmark extends Base {
      type: "bookmark";
      bookmark: {
        url: string;
        caption: RichText[];
      };
    }

    export interface Equation extends Base {
      type: "equation";
      equation: {
        expression: string;
      };
    }
  }
}
