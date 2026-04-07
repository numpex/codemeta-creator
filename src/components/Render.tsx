import { ChangeEvent, PackageDescription } from '@/lib/types';
import { DefaultPackage, EmptyPackage } from '@/lib/packages';
import { useCallback, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { EmitPackage } from '@/lib/emitter';
import SyntaxHighlighter from '@/components/SyntaxHighlighter';

export default function Render({ desc, setPackage }: {
  desc: PackageDescription,
  setPackage: any
}) {
  const [emitDefault, setEmitDefault] = useState(false);
  const onChangeEmitDefault = useCallback((event: ChangeEvent) =>
    setEmitDefault(event.target.checked), [setEmitDefault]);

  const packageAsString = EmitPackage(desc, emitDefault);
  const onClick = () => {
    const blob = new Blob([packageAsString], { type: "text/json" });
    const link = document.createElement("a");
    link.download = "codemeta.json";
    link.href = URL.createObjectURL(blob);
    link.click();
  }

  return (
    <>
      <Button variant="contained" onClick={onClick}>
        Download json
      </Button>
      <Button color="error" sx={{mr: 2}} onClick={() => setPackage(EmptyPackage)}>
        Reset to empty example
      </Button>
      <Button color="error" sx={{mr: 2}} onClick={() => setPackage(DefaultPackage)}>
        Reset to default example
      </Button>
      <Box
        sx={{
          fontSize: "85%",
        }}
      >
        <SyntaxHighlighter
          text={packageAsString}
          plugins={['line-numbers', 'match-braces', 'rainbow-braces']}
          language="json"
        />
      </Box>
    </>
  );
}
