namespace Notion {
  export type Color =
    | "default"
    | "gray"
    | "brown"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "red"
    | "gray_background"
    | "brown_background"
    | "orange_background"
    | "yellow_background"
    | "green_background"
    | "blue_background"
    | "purple_background"
    | "pink_background"
    | "red_background";

  export interface Annotations {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: Color;
  }

  export type RichText = RichText.Text | RichText.Mention | RichText.Equation;

  export namespace RichText {
    interface Base {
      plain_text: string;
      href?: string | null;
      annotations: Annotations;
      type: "text" | "mention" | "equation";
    }

    export interface Text extends Base {
      type: "text";
      text: {
        content: string;
        link?: Link | null;
      };
    }

    export interface Mention extends Base {
      type: "mention";
      mention: {
        type: "user" | "page" | "database" | "date";
        [k: string]: any;
      };
    }

    export interface Equation extends Base {
      type: "equation";
      equation: {
        expression: string;
      };
    }
  }

  export interface Link {
    url: string;
  }

  export type File = File.External | File.Hosted;

  export namespace File {
    export interface External {
      type: "external";
      external: {
        url: string;
      };
    }

    export interface Hosted {
      type: "file";
      file: {
        url: string;
        expiry_time: string;
      };
    }
  }

  export interface Emoji {
    type: "emoji";
    emoji: string;
  }
}
