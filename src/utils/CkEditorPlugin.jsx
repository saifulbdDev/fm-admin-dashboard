import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import {
  Bold,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  BoldEditing,
  CodeEditing,
  CodeUI,
  Underline
} from "@ckeditor/ckeditor5-basic-styles";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import { FindAndReplace } from "@ckeditor/ckeditor5-find-and-replace";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import { HtmlEmbed } from "@ckeditor/ckeditor5-html-embed";
import { PageBreak } from "@ckeditor/ckeditor5-page-break";
import List from "@ckeditor/ckeditor5-list/src/list";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import { Font } from "@ckeditor/ckeditor5-font";
import {
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar
} from "@ckeditor/ckeditor5-image";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent";
import { AutoLink, Link } from "@ckeditor/ckeditor5-link";
import { TodoList } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { ShowBlocks } from "@ckeditor/ckeditor5-show-blocks";
import {
  SpecialCharacters,
  SpecialCharactersEssentials
} from "@ckeditor/ckeditor5-special-characters";
import {
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar
} from "@ckeditor/ckeditor5-table";

export const toolbarConfig = [
      "findAndReplace",
      "selectAll",
      "|",
      "heading",
      "|",
      "bold",
      "italic",
      "strikethrough",
      "underline",
      "code",
      "subscript",
      "superscript",
      "removeFormat",
      "|",
      "bulletedList",
      "numberedList",
      "todoList",
      "|",
      "outdent",
      "indent",
      "|",
      "undo",
      "redo",
      "-",
      "fontSize",
      "fontFamily",
      "fontColor",
      "fontBackgroundColor",
      "highlight",
      "|",
      "alignment",
      "|",
      "link",
      "imageStyle:block",
      "imageStyle:side",
      "|",
      "toggleImageCaption",
      "imageTextAlternative",
      "|",
      // 'linkImage',
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "codeBlock",
      "htmlEmbed",
      "|",
      "specialCharacters",
      "horizontalLine",
      "pageBreak",
      "|",
      // "textPartLanguage",
      "|",
      "sourceEditing"
    ];
   
    export const plugins = [
      AutoLink,
      CodeBlock,
      ShowBlocks,
      Font,
      HtmlEmbed,
      Image,
      ImageCaption,
      ImageResize,
      ImageStyle,
      ImageToolbar,
      SpecialCharacters,
      SpecialCharactersEssentials,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      Indent,
      IndentBlock,
      HorizontalLine,
      PageBreak,
      FindAndReplace,
      BoldEditing,
      CodeUI,
      Alignment,
      CodeEditing,
      Autoformat,
      BlockQuote,
      Bold,
      Code,
      Italic,
      Strikethrough,
      Subscript,
      Superscript,
      Underline,
      Essentials,
      FontFamily,
      FontSize,
      Heading,
      Highlight,
      Italic,
      Link,
      List,
      MediaEmbed,
      Paragraph,
      PasteFromOffice,
      RemoveFormat,
      TodoList,
      Table,
      TableToolbar,
      SourceEditing
      // ... other plugins
    ];

