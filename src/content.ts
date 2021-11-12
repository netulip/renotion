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

  export type Language =
    | "abap"
    | "arduino"
    | "bash"
    | "basic"
    | "c"
    | "clojure"
    | "coffeescript"
    | "c++"
    | "c#"
    | "css"
    | "dart"
    | "diff"
    | "docker"
    | "elixir"
    | "elm"
    | "erlang"
    | "flow"
    | "fortran"
    | "f#"
    | "gherkin"
    | "glsl"
    | "go"
    | "graphql"
    | "groovy"
    | "haskell"
    | "html"
    | "java"
    | "javaSsript"
    | "json"
    | "julia"
    | "kotlin"
    | "latex"
    | "less"
    | "lisp"
    | "livescript"
    | "lua"
    | "makefile"
    | "markdown"
    | "markup"
    | "matlab"
    | "mermaid"
    | "nix"
    | "objective-c"
    | "ocaml"
    | "pascal"
    | "perl"
    | "php"
    | "plain text"
    | "powershell"
    | "prolog"
    | "protobuf"
    | "python"
    | "r"
    | "reason"
    | "ruby"
    | "rust"
    | "sass"
    | "scala"
    | "scheme"
    | "scss"
    | "shell"
    | "sql"
    | "swift"
    | "typescript"
    | "vb.net"
    | "verilog"
    | "vhdl"
    | "visual basic"
    | "webassembly"
    | "xml"
    | "yaml"
    | "java/c/c++/c#";
    
  export interface Annotations {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: Color;
  }

  export interface Link {
    type: "url";
    url: string;
  }

  export interface Emoji {
    type: "emoji";
    emoji: string;
  }
}

namespace Notion {
  type MentionTypes = {
    user: {};
    page: {};
    database: {};
    date: {};
    link_preview: {
      url: string;
    };
  };

  export type Mention = {
    [K in keyof MentionTypes]: {
      type: K;
    } & Pick<MentionTypes, K>;
  }[keyof MentionTypes];
}

namespace Notion {
  type RichTextTypes = {
    text: {
      content: string;
      link?: Link | null;
    };
    equation: {
      expression: string;
    };
    mention: Mention;
  };

  export type RichText = {
    [K in keyof RichTextTypes]: {
      type: K;
      plain_text: string;
      href?: string | null;
      annotations: Annotations;
    } & Pick<RichTextTypes, K>;
  }[keyof RichTextTypes];
}

namespace Notion {
  type FileTypes = {
    file: {
      url: string;
      expiry_time: string;
    };
    external: {
      url: string;
    };
  };
  export type File = {
    [K in keyof FileTypes]: {
      type: K;
    } & Pick<FileTypes, K>;
  }[keyof FileTypes];
}
