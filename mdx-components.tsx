import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-900 dark:text-white">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-xl font-medium mb-2 mt-4 text-gray-900 dark:text-white">
                {children}
            </h4>
        ),
        p: ({ children }) => (
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                {children}
            </p>
        ),
        ul: ({ children }) => (
            <ul className="mb-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="mb-4 list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {children}
            </ol>
        ),
        li: ({ children }) => (
            <li className="text-gray-700 dark:text-gray-300">{children}</li>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-royal-500 pl-4 my-6 italic text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 py-4 pr-4 rounded-r">
                {children}
            </blockquote>
        ),
        pre: ({ children }) => (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm">
                {children}
            </pre>
        ),
        code: ({ children }) => (
            <code className="bg-gray-100 dark:bg-gray-800 text-royal-600 dark:text-royal-400 px-1.5 py-0.5 rounded text-sm font-mono">
                {children}
            </code>
        ),
        strong: ({ children }) => (
            <strong className="font-semibold text-gray-900 dark:text-white">
                {children}
            </strong>
        ),
        em: ({ children }) => (
            <em className="italic text-gray-700 dark:text-gray-300">
                {children}
            </em>
        ),
        a: ({ href, children }) => (
            <a
                href={href}
                className="text-royal-600 dark:text-royal-400 hover:text-royal-700 dark:hover:text-royal-300 underline transition-colors"
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={
                    href?.startsWith("http") ? "noopener noreferrer" : undefined
                }
            >
                {children}
            </a>
        ),
        img: (props) => (
            <Image
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                {...(props as ImageProps)}
                alt={props.alt || ""}
            />
        ),
        // Override any built-in component with custom styling
        ...components,
    };
}
