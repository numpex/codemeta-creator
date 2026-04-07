import Prismjs from 'prismjs';

// We need to import this after prismjs.
// It's a bit dirty but react-syntax-highlighter doesn't allow the use of
// plugins, and using babel's loader breaks other nextjs related stuff :(
//
// eslint-disable-next-line sort-imports
import 'prismjs/components/prism-lisp';
import 'prismjs/components/prism-bash';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';
import 'prismjs/plugins/match-braces/prism-match-braces';
import 'prismjs/plugins/match-braces/prism-match-braces.min.css';
import 'prismjs/themes/prism-tomorrow.min.css';

import { useEffect, useRef } from 'react';

export default function SyntaxHighlighter({ text, plugins, language }: {
  text: string,
  language: string,
  plugins: Array<string>,
}) {
  const codeRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (codeRef) {
      Prismjs.highlightElement(codeRef.current as HTMLElement);
    }
  }, [text]);
  return (
    <pre
      className={[...plugins, `language-${language}`].join(' ')}
      tabIndex={0}
    >
      <code
        ref={codeRef}
        className={`language-${language}`}
      >
        {text}
      </code>
    </pre>
  );
}
