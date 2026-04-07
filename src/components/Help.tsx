import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
// @ts-ignore
import HelpContent from '@/data/app.md'
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Markdown from 'react-markdown';
import { useState } from 'react';


export default function Help() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton
        aria-label="show help"
        color="inherit"
        onClick={() => setOpen(true)}
      >
        <InfoIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth='lg'
        fullWidth
      >
        <Container>
          <Markdown>{HelpContent}</Markdown>
        </Container>
      </Dialog>
    </>
  );
}
