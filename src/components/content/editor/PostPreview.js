import React, { useState, useRef, useEffect } from 'react'
import parse, { attributesToProps } from 'html-react-parser';

function PostPreview(props) {
    const tree = props.data

    const PreviewBlock = ({ id, index, blockNodes }) => {
        const blockId = id;
        const items = [...tree];

        return (
            <section className='flex flex-col md:flex-row gap-4 treepreview'>
                {blockNodes && blockNodes.map(({ id, text, type, editing, image, imageSource }, index) => {
                    if (type == "text") {
                        return (
                            <div key={id} className='treetext' >
                                {parse(text)}
                            </div>
                        );
                    } else if (type == "image") {
                        return (
                            <div style={{
                                backgroundImage: `url(${imageSource})`,
                                backgroundSize: `cover`,
                                backgroundPosition: `center`
                            }} key={id} className='treeimage float-right overflow-hidden min-h-[12em] grow flex float-right rounded' >
                            </div>
                        )
                    }
                })}
            </section>
        )
    }

    return (
        <>
            <div className='text-right mb-4 flex h-fit items-center gap-4'>
                <div className='w-fit px-2 bg-zinc-300 border-theme border-black rounded'>
                    <header className='whitespace-nowrap' >P R E V I E W</header>
                </div>
                <hr className='w-full border-theme border-transparent border-b-black' />
            </div>
            <ul className='gap-4 flex flex-col w-full' >

                {tree && tree.map(({ id, nodes }, index) => {
                    return (
                        <div key={id} >
                            {/* <span className='text-xs'>{id}</span> */}
                            <li className='flex rounded h-min' >
                                <PreviewBlock id={id} index={index} blockNodes={[...nodes]} className="" />
                            </li>
                        </div>
                    );
                })}
            </ul>
        </>
    )
}

export default PostPreview