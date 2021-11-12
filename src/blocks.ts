namespace Notion {
  interface BlockTypes {
    paragraph: {
      text: RichText[];
      children: Block[];
    };
    heading_1: {
      text: RichText[];
    };
    heading_2: {
      text: RichText[];
    };
    heading_3: {
      text: RichText[];
    };
    callout: {
      icon: File | Emoji;
      text: RichText[];
      children: Block[];
    };
    quote: {
      text: RichText[];
      children: Block[];
    };
    bulleted_list_item: {
      text: RichText[];
      children: Block[];
    };
    numbered_list_item: {
      text: RichText[];
      children: Block[];
    };
    to_do: {
      checked?: boolean;
      text: RichText[];
      children: Block[];
    };

    toggle: {
      text: RichText[];
      children: Block[];
    };

    code: {
      language: Language;
      text: RichText[];
    };
    child_page: {
      title: string;
    };
    child_database: {
      title: string;
    };
    embed: {
      url: string;
    };
    image: File;
    pdf: File;
    file: File;
    video: File;

    bookmark: {
      url: string;
      caption: RichText[];
    };
    equation: {
      expression: string;
    };
    divider: {};
    table_of_contents: {};
    breadcrumb: {};
    column: {};
    column_list: {};
    link_preview: {
      url: string;
    };
    unsupported: {};
  }

  export type Block = {
    [K in keyof BlockTypes]: {
      type: K;
      object: "block";
      id: string;
      created_time: string;
      last_edited_time: string;
      archived: boolean;
      has_children: boolean;
    } & Pick<BlockTypes, K>;
  }[keyof BlockTypes];
}
