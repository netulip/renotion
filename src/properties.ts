namespace Notion {
  type PropertyTypes = {
    rich_text: {};
    number: {
      number: number;
    };
    select: {};
    multi_select: {};
    date: {};
    formula: {};
    relation: {};
    rollup: {};
    title: {};
    people: {};
    files: {};
    checkbox: {};
    url: {};
    email: {};
    phone_number: {};
    created_time: {};
    created_by: {};
    last_edited_time: {};
    last_edited_by: {};
  };

  export type Property = {
    [K in keyof PropertyTypes]: {
      type: K;
      id: string;
    } & Pick<PropertyTypes, K>;
  }[keyof PropertyTypes];
}


function prop(p: Notion.Property): Notion.Property {
    if(p.type === 'number') {
        p.number.number = 1;
    }
  return p;
}