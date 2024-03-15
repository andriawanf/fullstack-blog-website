import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useCurrentEditor } from '@tiptap/react';
import { Tooltip, Button } from "@material-tailwind/react";
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
    RiArrowDownSLine
} from "@remixicon/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function MenuBarTipTap({ editor }) {

    return (
        <div className='flex flex-wrap max-w-3xl gap-2 gap-y-4 font-dm'>
            <Menu as="div" className="relative inline-block">
                <div>
                    <Menu.Button>
                        <Button className='flex items-center gap-2 px-3 rounded-xl bg-black-500 text-white-500' variant='filled' size='md'>
                            Headings
                            <RiArrowDownSLine className='w-5 h-5' />
                        </Button>
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
                    <Menu.Items className="absolute right-0 z-10 w-40 mt-1 origin-top-right bg-white shadow-lg rounded-xl ring-1 ring-black ring-opacity-5 focus:outline-none bg-white-500 text-black-500">
                        <div className="flex flex-col p-1 space-y-2">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type='button'
                                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                                        className={editor.isActive('heading', { level: 1 }) ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-white-700 text-left' : 'px-2 py-1.5 rounded-lg hover:bg-white-700 text-left'}
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
                                        className={editor.isActive('heading', { level: 2 }) ? 'text-left is-active font-bold px-2 py-1.5 rounded-lg bg-white-700' : 'px-2 py-1.5 rounded-lg hover:bg-white-700 text-left'}
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
                                        className={editor.isActive('heading', { level: 3 }) ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-white-700 text-left' : 'px-2 py-1.5 rounded-lg hover:bg-white-700 text-left'}
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
                                        className={editor.isActive('heading', { level: 4 }) ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-white-700 text-left' : 'px-2 py-1.5 rounded-lg hover:bg-white-700 text-left'}
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
                                        className={editor.isActive('heading', { level: 5 }) ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-white-700 text-left' : 'px-2 py-1.5 rounded-lg hover:bg-white-700 text-left'}
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
                                        className={editor.isActive('heading', { level: 6 }) ? 'is-active font-bold px-2 py-1.5 rounded-lg bg-white-700 text-left' : 'px-2 py-1.5 rounded-lg hover:bg-white-700 text-left'}
                                    >
                                        Heading 6
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            <Menu as="div" className="relative inline-block">
                <div>
                    <Menu.Button>
                        <Button className='flex items-center gap-2 px-3 rounded-xl bg-black-500 text-white-500' variant='filled'>
                            Colors
                            <RiArrowDownSLine className='w-5 h-5' />
                        </Button>
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
                    <Menu.Items className="absolute right-0 z-10 w-40 mt-1 origin-top-right shadow-lg rounded-xl ring-1 ring-black ring-opacity-5 focus:outline-none bg-white-500 text-black-500">
                        <div className="flex flex-col p-1 space-y-2">
                            <Menu.Item>
                                {({ active }) => (
                                    <Button
                                        type='button'
                                        onClick={() => editor.chain().focus().setColor('#ff1212').run()}
                                        variant={editor.isActive('textStyle', { color: '#ff1212' }) ? "filled" : "text"}
                                        className={editor.isActive('textStyle', { color: '#ff1212' }) ? 'is-active font-bold text-left' : 'text-left'}
                                    >
                                        Red
                                    </Button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Button
                                        type='button'
                                        onClick={() => editor.chain().focus().setColor('#FFD012').run()}
                                        variant={editor.isActive('textStyle', { color: '#FFD012' }) ? "filled" : "text"}
                                        className={editor.isActive('textStyle', { color: '#FFD012' }) ? 'is-active font-bold text-left' : 'text-left'}
                                    >
                                        Yellow
                                    </Button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Button
                                        type='button'
                                        onClick={() => editor.chain().focus().setColor('#00de42').run()}
                                        variant={editor.isActive('textStyle', { color: '#00de42' }) ? "filled" : "text"}
                                        className={editor.isActive('textStyle', { color: '#00de42' }) ? 'is-active font-bold text-left' : 'text-left'}
                                    >
                                        Green
                                    </Button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Button
                                        type='button'
                                        onClick={() => editor.chain().focus().setColor('#1d4ed8').run()}
                                        variant={editor.isActive('textStyle', { color: '#1d4ed8' }) ? "filled" : "text"}
                                        className={editor.isActive('textStyle', { color: '#1d4ed8' }) ? 'is-active font-bold text-left' : 'text-left'}
                                    >
                                        Blue
                                    </Button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>

            <Tooltip
                content={
                    <div className='px-3 py-1 rounded-lg shadow-lg bg-white-500 shadow-black-500/15'>
                        <h1 className='text-base font-medium font-nunito'>Bold</h1>
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button
                    type='button'
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
                    variant={editor.isActive('bold') ? "filled" : "text"}
                    className={editor.isActive('bold') ? 'is-active font-bold px-2 py-1.5 rounded-xl bg-black-500 text-white-500' : 'px-2 py-1.5'}
                >
                    <RiBold className='w-6 h-6' />
                </Button>
            </Tooltip>
            <Tooltip
                content={
                    <div className='px-3 py-1 rounded-lg shadow-lg bg-white-500 shadow-black-500/15'>
                        <h1 className='text-base font-medium font-nunito'>Italic</h1>
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button
                    type='button'
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    variant={editor.isActive('italic') ? "filled" : "text"}
                    className={editor.isActive('italic') ? 'is-active font-bold px-2 py-1.5 rounded-xl bg-black-500 text-white-500' : 'px-2 py-1.5'}
                >
                    <RiItalic className='w-6 h-6' />
                </Button>
            </Tooltip>
            <Tooltip
                content={
                    <div className='px-3 py-1 rounded-lg shadow-lg bg-white-500 shadow-black-500/15'>
                        <h1 className='text-base font-medium font-nunito'>Strike Trough</h1>
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button
                    type='button'
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
                    variant={editor.isActive('strike') ? "filled" : "text"}
                    className={editor.isActive('strike') ? 'is-active font-bold px-2 py-1.5 rounded-xl bg-black-500 text-white-500' : 'px-2 py-1.5'}
                >
                    <RiStrikethrough className='w-6 h-6' />
                </Button>
            </Tooltip>
            <Tooltip
                content={
                    <div className='px-3 py-1 rounded-lg shadow-lg bg-white-500 shadow-black-500/15'>
                        <h1 className='text-base font-medium font-nunito'>Paragraph</h1>
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button
                    type='button'
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    variant={editor.isActive('paragraph') ? "filled" : "text"}
                    className={editor.isActive('paragraph') ? 'is-active font-bold px-2 py-1.5 rounded-xl bg-black-500 text-white-500' : 'px-2 py-1.5'}
                >
                    <RiParagraph />
                </Button>
            </Tooltip>
            <Tooltip
                content={
                    <div className='px-3 py-1 rounded-lg shadow-lg bg-white-500 shadow-black-500/15'>
                        <h1 className='text-base font-medium font-nunito'>Bullet List</h1>
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button
                    type='button'
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    variant={editor.isActive('bulletList') ? "filled" : "text"}
                    className={editor.isActive('bulletList') ? 'is-active font-bold px-2 py-1.5 rounded-xl bg-black-500 text-white-500' : 'px-2 py-1.5'}
                >
                    <RiListUnordered />
                </Button>
            </Tooltip>
            <Tooltip
                content={
                    <div className='px-3 py-1 rounded-lg shadow-lg bg-white-500 shadow-black-500/15'>
                        <h1 className='text-base font-medium font-nunito'>Number List</h1>
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button
                    type='button'
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    variant={editor.isActive('orderedList') ? "filled" : "text"}
                    className={editor.isActive('orderedList') ? 'is-active font-bold px-2 py-1.5 rounded-xl bg-black-500 text-white-500' : 'px-2 py-1.5'}
                >
                    <RiListOrdered />
                </Button>
            </Tooltip>
            <Tooltip
                content={
                    <div className='px-3 py-1 rounded-lg shadow-lg bg-white-500 shadow-black-500/15'>
                        <h1 className='text-base font-medium font-nunito'>Code</h1>
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button
                    type='button'
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleCode()
                            .run()
                    }
                    variant={editor.isActive('code') ? "filled" : "text"}
                    className={editor.isActive('code') ? 'is-active font-bold p-1.5 rounded-xl bg-black-500 text-white-500' : 'px-2 py-1.5'}
                >
                    <RiCodeView className='w-6 h-6' />
                </Button>
            </Tooltip>
            <Tooltip
                content={
                    <div className='px-3 py-1 rounded-lg shadow-lg bg-white-500 shadow-black-500/15'>
                        <h1 className='text-base font-medium font-nunito'>Code Block</h1>
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button
                    type='button'
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    variant={editor.isActive('codeBlock') ? "filled" : "text"}
                    className={editor.isActive('codeBlock') ? 'is-active font-bold px-2 py-1.5 rounded-xl bg-black-500 text-white-500' : 'px-2 py-1.5'}
                >
                    <RiCodeBlock />
                </Button>
            </Tooltip>
            <Tooltip
                content={
                    <div className='px-3 py-1 rounded-lg shadow-lg bg-white-500 shadow-black-500/15'>
                        <h1 className='text-base font-medium font-nunito'>Blockqoute</h1>
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button
                    type='button'
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    variant={editor.isActive('blockquote') ? "filled" : "text"}
                    className={editor.isActive('blockquote') ? 'is-active font-bold px-2 py-1.5 rounded-xl bg-black-500 text-white-500' : 'px-2 py-1.5'}
                >
                    <RiQuoteText />
                </Button>
            </Tooltip>
            <Tooltip
                content={
                    <div className='px-3 py-1 rounded-lg shadow-lg bg-white-500 shadow-black-500/15'>
                        <h1 className='text-base font-medium font-nunito'>Separator</h1>
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button
                    type='button'
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    variant={editor.isActive('blockquote') ? "filled" : "text"}
                    className={editor.isActive('blockquote') ? 'is-active font-bold px-2 py-1.5 rounded-xl bg-black-500 text-white-500' : 'px-2 py-1.5'}>
                    <RiSeparator />
                </Button>
            </Tooltip>
            <Tooltip
                content={
                    <div className='px-3 py-1 rounded-lg shadow-lg bg-white-500 shadow-black-500/15'>
                        <h1 className='text-base font-medium font-nunito'>Hard Break</h1>
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button
                    type='button'
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                    variant={editor.isActive('blockquote') ? "filled" : "text"}
                    className={editor.isActive('blockquote') ? 'is-active font-bold px-2 py-1.5 rounded-xl bg-black-500 text-white-500' : 'px-2 py-1.5'}>
                    <RiTextWrap />
                </Button>
            </Tooltip>
            <Button
                type='button'
                onClick={() => editor.chain().focus().unsetAllMarks().run()}
                variant='filled'
                className='rounded-xl bg-black-500 text-white-500'
            >
                clear marks
            </Button>
            <Button
                type='button'
                onClick={() => editor.chain().focus().clearNodes().run()}
                variant='filled'
                className='rounded-xl bg-black-500 text-white-500'
            >
                clear nodes
            </Button>
            <Tooltip
                content={
                    <div className='px-3 py-1 rounded-lg shadow-lg bg-white-500 shadow-black-500/15'>
                        <h1 className='text-base font-medium font-nunito'>Undo</h1>
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button
                    type='button'
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .undo()
                            .run()
                    }
                    variant={editor.isActive('blockquote') ? "filled" : "text"}
                    className={editor.isActive('blockquote') ? 'is-active font-bold px-2 py-1.5 rounded-xl bg-black-500 text-white-500' : 'px-2 py-1.5'}
                >
                    <RiArrowGoBackLine />
                </Button>
            </Tooltip>
            <Tooltip
                content={
                    <div className='px-3 py-1 rounded-lg shadow-lg bg-white-500 shadow-black-500/15'>
                        <h1 className='text-base font-medium font-nunito'>Redo</h1>
                    </div>
                }
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button
                    type='button'
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .redo()
                            .run()
                    }
                    variant={editor.isActive('blockquote') ? "filled" : "text"}
                    className={editor.isActive('blockquote') ? 'is-active font-bold px-2 py-1.5 rounded-xl bg-black-500 text-white-500' : 'px-2 py-1.5'}
                >
                    <RiArrowGoForwardLine />
                </Button>
            </Tooltip>
        </div>
    )
}

export default MenuBarTipTap