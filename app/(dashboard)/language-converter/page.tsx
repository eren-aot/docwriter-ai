"use client"
import React, { useState } from 'react'
import * as monaco from 'monaco-editor';
import CodeEditor from '@/components/CodeEditor/CodeEditor';


const LanguageConverterPage = () => {

    const [code, setCode] = useState<string>(`
    function isPalindromeNumber(number) {
        // Convert the number to a string
        const numString = number.toString();
        
        // Reverse the string
        const reversedString = numString.split('').reverse().join('');
        
        // Check if the original string and the reversed string are the same
        return numString === reversedString;
    }
    `)

    // const handleCodeChange = (newCode : string) => {
    //     setCode(newCode);
    // };

    return (
        <div className='h-full w-full flex flex-row justify-between items-center'>
            <div className=' flex-1 flex flex-col'>
                <h1>Code Editor</h1>
                <CodeEditor code={code} setCode={setCode} />
            </div>
            <div className='flex-1'>
                Hello World
            </div>
        </div>
    )
}

export default LanguageConverterPage