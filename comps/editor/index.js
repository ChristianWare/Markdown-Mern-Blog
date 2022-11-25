import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = () => {
  const editor = useEditor({ extensions: [StarterKit] });

  return (
    <>
      Editor
      <EditorContent editor={editor} />
    </>
  );
};
export default Editor;
