import {
  root,
  text,
  strong,
  strike,
  emphasis,
  inlineCode,
  paragraph,
  link,
  heading,
  blockquote,
  code,
} from "mdast-builder";

export function parse(blocks: Notion.Block[]) {
  return root(blocks.map(render));
}

function render(block: Notion.Block) {
  switch (block.type) {
    case "heading_1":
      return heading(1, block.heading_1.text.map(serialize));
    case "heading_2":
      return heading(2, block.heading_2.text.map(serialize));
    case "heading_3":
      return heading(1, block.heading_3.text.map(serialize));
    case "paragraph":
      return paragraph(block.paragraph.text.map(serialize));
    case "quote":
      return blockquote(block.quote.text.map(serialize));
    case "code":
      return code(block.code.language, block.code.text.map(plaintext).join(""));
    case "equation":
      return { type: "math", value: block.equation.expression };
    default:
      return text("");
  }
}

function plaintext(t: Notion.RichText) {
  switch (t.type) {
    case "text":
      return t.text.content;
    case "equation":
      return t.equation.expression;
    case "mention":
      return "";
  }
}

function serialize(t: Notion.RichText) {
  switch (t.type) {
    case "text":
      if (t.annotations.code) return inlineCode(t.text.content);
      let tt = text(t.text.content);
      if (t.annotations.strikethrough) tt = strike(tt);
      if (t.annotations.italic) tt = emphasis(tt);
      if (t.annotations.bold) tt = strong(tt);
      if (t.text.link) tt = link(t.text.link.url, t.text.content, tt);
      return tt;
    case "equation":
      return { type: "inlineMath", value: t.equation.expression };
    case "mention":
      return text("");
  }
}
