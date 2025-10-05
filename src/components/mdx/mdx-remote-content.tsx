import { MDXRemote } from "next-mdx-remote/rsc";

interface MDXContentProps {
    content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-royal-600 dark:prose-code:text-royal-400 prose-pre:bg-gray-900 prose-pre:text-gray-100">
            <MDXRemote source={content} />
        </div>
    );
}
