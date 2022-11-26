import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from '@tiptap/extension-underline'

import styles from "./Editor.module.css";

const Editor = () => {
  const editor = useEditor({ extensions: [StarterKit, Underline] });

  const Bold = () => {
    editor?.chain().focus().toggleBold().run();
  };

  const Italic = () => {
    editor?.chain().focus().toggleItalic().run();
  };
  
  const Paragraph = () => {
    editor?.chain().focus().setParagraph().run();
  };

  const Heading1 = () => {
    editor?.chain().focus().toggleHeading({ level: 1 }).run();
  };

  const Heading2 = () => {
    editor?.chain().focus().toggleHeading({ level: 2 }).run();
  };

  const Heading3 = () => {
    editor?.chain().focus().toggleHeading({ level: 3 }).run();
  };


  const BlockQuote = () => {
    editor?.chain().focus().toggleBlockquote().run();
  };

  const Code = () => {
    editor?.chain().focus().toggleCode().run();
  };

  const CodeBlock = () => {
    editor?.chain().focus().toggleCodeBlock().run();
  };
  
  const OrderedLists = () => {
    editor?.chain().focus().toggleOrderedList().run();
  };
  
  const BulletLists = () => {
    editor?.chain().focus().toggleBulletList().run();
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnsContainer}>
        <button onClick={Paragraph}>Paragraph</button>
        <button onClick={Bold}>Bold</button>
        <button onClick={Italic}>Italic</button>
        <button onClick={() => editor?.chain().focus().toggleUnderline().run()}>
          Underline
        </button>
        <button onClick={Heading1}>H1</button>
        <button onClick={Heading2}>H2</button>
        <button onClick={Heading3}>H3</button>
        <button onClick={BlockQuote}>BlockQuote</button>
        <button onClick={Code}>Code</button>
        <button onClick={CodeBlock}>CodeBlock</button>
        <button onClick={OrderedLists}>OrderedList</button>
        <button onClick={BulletLists}>BulletLists</button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};
export default Editor;
