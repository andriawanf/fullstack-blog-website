import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useCurrentEditor } from '@tiptap/react';
import {
    FontBoldIcon,
    FontItalicIcon,
    StrikethroughIcon,
    CaretDownIcon,
    CodeIcon,
    ListBulletIcon,
} from "@radix-ui/react-icons";
import {
    RiParagraph,
    RiListUnordered,
    RiListOrdered,
    RiBold,
    RiItalic,
    RiStrikethrough,
    RiCodeView,
    RiQuoteText,
    RiCodeBlock,
    RiSeparator,
    RiTextWrap,
    RiArrowGoForwardLine,
    RiArrowGoBackLine,
} from "@remixicon/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function MenuBarTipTap({ editor }) {

    return (
        <div className='flex flex-wrap gap-2 font-dm max-w-[46rem]'>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md hover:bg-primary/20 px-2 py-1.5 ">
                        Headings
                        <CaretDownIcon className='w-5 h-5' />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-1 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p-1 flex flex-col space-y-2">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type='button'
                                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                                        className={editor.isActive('heading', { level: 1 }) ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20 text-left' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20 text-left'}
                                    >
                                        Heading 1
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type='button'
                                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                                        className={editor.isActive('heading', { level: 2 }) ? 'text-left is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20 text-left'}
                                    >
                                        Heading 2
                                    </button>

                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type='button'
                                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                                        className={editor.isActive('heading', { level: 3 }) ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20 text-left' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20 text-left'}
                                    >
                                        Heading 3
                                    </button>

                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type='button'
                                        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                                        className={editor.isActive('heading', { level: 4 }) ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20 text-left' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20 text-left'}
                                    >
                                        Heading 4
                                    </button>

                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type='button'
                                        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                                        className={editor.isActive('heading', { level: 5 }) ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20 text-left' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20 text-left'}
                                    >
                                        Heading 5
                                    </button>

                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type='button'
                                        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                                        className={editor.isActive('heading', { level: 6 }) ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20 text-left' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20 text-left'}
                                    >
                                        Heading 6
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            <button
                type='button'
                onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}
            >
                purple
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={editor.isActive('bold') ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}
            >
                <RiBold className='w-6 h-6' />
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
                className={editor.isActive('italic') ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}
            >
                <RiItalic className='w-6 h-6' />
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }
                className={editor.isActive('strike') ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}
            >
                <RiStrikethrough className='w-6 h-6' />
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}
            >
                <RiParagraph />
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}
            >
                <RiListUnordered />
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}
            >
                <RiListOrdered />
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleCode()
                        .run()
                }
                className={editor.isActive('code') ? 'is-active font-bold p-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}
            >
                <RiCodeView className='w-6 h-6' />
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}
            >
                <RiCodeBlock />
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}
            >
                <RiQuoteText />
            </button>
            <button type='button' onClick={() => editor.chain().focus().setHorizontalRule().run()} className={editor.isActive('blockquote') ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}>
                <RiSeparator />
            </button>
            <button type='button' onClick={() => editor.chain().focus().setHardBreak().run()} className={editor.isActive('blockquote') ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}>
                <RiTextWrap />
            </button>
            <button type='button' onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                clear marks
            </button>
            <button type='button' onClick={() => editor.chain().focus().clearNodes().run()}>
                clear nodes
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                }
                className={editor.isActive('blockquote') ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}
            >
                <RiArrowGoBackLine />
            </button>
            <button
                type='button'
                onClick={() => editor.chain().focus().redo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                }
                className={editor.isActive('blockquote') ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-primary/20' : 'px-2 py-1.5 rounded-lg hover:bg-primary/20'}
            >
                <RiArrowGoForwardLine />
            </button>
        </div>
    )
}

export default MenuBarTipTap