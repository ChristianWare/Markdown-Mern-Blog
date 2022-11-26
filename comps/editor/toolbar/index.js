import styles from './Toolbar.module.css'
import { Editor } from '@tiptap/react';

const paragraph = () => {
    editor?.chain().focus().toggleBold().run();
}

const ToolBar = ({ editor }) => {
  return (
    <div>ToolBar</div>
  )
}

export default ToolBar;