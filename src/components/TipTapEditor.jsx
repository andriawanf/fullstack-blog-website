import React from 'react';
import { useEditor, EditorContent, FloatingMenu, BubbleMenu, EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import MenuBarTipTap from './MenuBarTipTap';
import { useState } from 'react';
import { useContext } from 'react';
import { tiptapContext } from '../contexts/TipTapContext';

const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
    }),
]

const content = `
  <h2>
    Hi there,
  </h2>
  <p>
    this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
  </p>
  <ul>
    <li>
      That’s a bullet list with one …
    </li>
    <li>
      … or two list items.
    </li>
  </ul>
  <p>
    Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
  </p>
  <pre><code class="language-css">body {
  display: none;
  }</code></pre>
  <p>
    I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
  </p>
  <blockquote>
    Wow, that’s amazing. Good work, boy! 👏
    <br />
    — Mom
  </blockquote>
  `
function TipTapEditor() {
    const {setEditorState, debouncedEditorState} = useContext(tiptapContext);
    
    const editor = useEditor({
        autofocus: true,
        extensions: extensions,
        onUpdate: ({editor}) => {
            setEditorState(editor.getHTML());
        },
    });

    return (
        <>
            <div className='flex items-start justify-between p-4 border-b border-white-700'>
                {editor && <MenuBarTipTap editor={editor} />}
                {/* <button className='px-3 py-1.5 bg-primaryContent rounded-lg text-primaryBackground'>
                    {debouncedEditorState ? "Saving..." : "Saved"}
                </button> */}
            </div>
            <div className='p-4 prose max-w-7xl rounded-3xl focus:outline-none'>
                <EditorContent editor={editor}/>
            </div>
        </>
    )
}

export default TipTapEditor