import { useState, createContext, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

export const tiptapContext = createContext();

function TipTapContext({children}) {
    const [editorState, setEditorState] = useState('');
    const debouncedEditorState = useDebounce(editorState, 500);
    useEffect(() => {
        console.log(debouncedEditorState);
    }, [debouncedEditorState]);
  return (
    <tiptapContext.Provider value={{editorState, setEditorState}}>{children}</tiptapContext.Provider>
  )
}

export default TipTapContext