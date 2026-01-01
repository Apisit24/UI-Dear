'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import styles from './CodeBlock.module.css';

interface CodeBlockProps {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = 'tsx', showLineNumbers = true }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }, [code]);

    const lines = code.split('\n');

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.language}>{language}</span>
                <motion.button
                    className={styles.copyButton}
                    onClick={handleCopy}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        {copied ? (
                            <motion.span
                                key="check"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className={styles.copied}
                            >
                                <Check size={14} />
                                Copied!
                            </motion.span>
                        ) : (
                            <motion.span
                                key="copy"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                            >
                                <Copy size={14} />
                                Copy
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>
            <pre className={styles.pre}>
                <code className={styles.code}>
                    {lines.map((line, index) => (
                        <div key={index} className={styles.line}>
                            {showLineNumbers && (
                                <span className={styles.lineNumber}>{index + 1}</span>
                            )}
                            <span className={styles.lineContent}>{line || ' '}</span>
                        </div>
                    ))}
                </code>
            </pre>
        </div>
    );
}
