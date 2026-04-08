"use client";

import { Box, Paper } from "@mui/material";
import { DefaultPackage, DevStatuses } from '@/lib/packages';
import { License, PackageDescription, stringList } from '@/lib/types';
import { useCallback, useMemo, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Grid from '@mui/material/Unstable_Grid2';
import Help from '@/components/Help';
import IconButton from '@mui/material/IconButton';
import LicenseInput from '@/components/inputs/LicenseInput';
import LightModeIcon from '@mui/icons-material/LightMode';
import ListInput from '@/components/inputs/ListInput';
import MenuInput from '@/components/inputs/MenuInput';
import Render from '@/components/Render';
import TextInput from '@/components/inputs/TextInput';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import createTheme from '@mui/material/styles/createTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {
  const [name, setName] = useState<string>(DefaultPackage.name);
  const [version, setVersion] = useState<string>(DefaultPackage.version);
  const [license, setLicense] = useState<License>(DefaultPackage.license);
  const [description, setDescription] = useState<string>(DefaultPackage.description);
  const [homepage, setHomepage] = useState<string>(DefaultPackage.homepage);
  const [programmingLanguage, setProgrammingLanguage] = useState<stringList>(DefaultPackage.programmingLanguage);
  const [operatingSystem, setOperatingSystem] = useState<stringList>(DefaultPackage.operatingSystem);
  const [keywords, setKeywords] = useState<stringList>(DefaultPackage.keywords);
  const [codeRepository, setCodeRepository] = useState<string>(DefaultPackage.codeRepository);
  const [contIntegration, setContIntegration] = useState<string>(DefaultPackage.contIntegration);
  const [dateCreated, setDateCreated] = useState<string>(DefaultPackage.dateCreated);
  const [datePublished, setDatePublished] = useState<string>(DefaultPackage.datePublished);
  const [dateModified, setDateModified] = useState<string>(DefaultPackage.dateModified);
  const [downloadUrl, setDownloadUrl] = useState<string>(DefaultPackage.downloadUrl);
  const [issueTracker, setIssueTracker] = useState<string>(DefaultPackage.issueTracker);
  const [applicationCategory, setApplicationCategory] = useState<string>(DefaultPackage.applicationCategory);
  const [developmentStatus, setDevelopmentStatus] = useState<string>(DefaultPackage.developmentStatus);
  const [releaseNotes, setReleaseNotes] = useState<string>(DefaultPackage.releaseNotes);
  const [documentation, setDocumentation] = useState<string>(DefaultPackage.documentation);
  const [discussion, setDiscussion] = useState<string>(DefaultPackage.discussion);
  const [guixPackage, setGuixPackage] = useState<string>(DefaultPackage.guixPackage);
  const [spackPackage, setSpackPackage] = useState<string>(DefaultPackage.spackPackage);

  const setPackage = useCallback((desc: PackageDescription) => {
    setName(desc.name);
    setVersion(desc.version);
    setLicense(desc.license);
    setDescription(desc.description);
    setHomepage(desc.homepage);
    setProgrammingLanguage(desc.programmingLanguage);
    setOperatingSystem(desc.operatingSystem);
    setKeywords(desc.keywords);
    setCodeRepository(desc.codeRepository);
    setContIntegration(desc.contIntegration);
    setDateCreated(desc.dateCreated);
    setDatePublished(desc.datePublished);
    setDateModified(desc.dateModified);
    setDownloadUrl(desc.downloadUrl);
    setIssueTracker(desc.issueTracker);
    setApplicationCategory(desc.applicationCategory);
    setDevelopmentStatus(desc.developmentStatus);
    setReleaseNotes(desc.releaseNotes);
    setDiscussion(desc.discussion);
    setDocumentation(desc.documentation);
    setGuixPackage(desc.guixPackage);
    setSpackPackage(desc.spackPackage);
  }, [
    setName, setVersion, setLicense,
    setDescription, setHomepage, setProgrammingLanguage, setOperatingSystem,
    setKeywords, setCodeRepository, setContIntegration,
    setDateCreated, setDatePublished, setDateModified,
    setDownloadUrl, setIssueTracker, setApplicationCategory, setDevelopmentStatus, setReleaseNotes,
    setDocumentation, setDiscussion, setGuixPackage, setSpackPackage
  ]);

  const desc: PackageDescription = {
    name,
    version,
    description,
    homepage,
    codeRepository,
    contIntegration,
    license,
    programmingLanguage,
    operatingSystem,
    keywords,
    dateCreated,
    datePublished,
    dateModified,
    downloadUrl,
    issueTracker,
    applicationCategory,
    developmentStatus,
    releaseNotes,
    discussion,
    documentation,
    guixPackage,
    spackPackage
  };

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'dark'|'light'>(prefersDarkMode ? 'dark' : 'light');
  const toggleMode = () => setMode((prev) => prev === 'dark' ? 'light' : 'dark');
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);
  const onMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">
            NuMPEX - Write a codemeta.json in a breeze
          </Typography>
          <Help />
          <IconButton color="inherit" onClick={toggleMode}>
            {mode === 'dark' ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} sx={{m: 1}}>
        <Grid xs={12} md={6} container direction="column">
	  <Paper sx={{ p: 2, border: "3px solid", borderColor: "grey.300", borderRadius: 2, boxShadow: 3 }}>
            <Typography>The software itself</Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
	      <TextInput pValue={homepage} pOnChange={setHomepage} pName="Homepage" pHolder={DefaultPackage.homepage}/>
	    </Box>
	    <Box sx={{ display: "flex" }}>
	      <TextInput pValue={name} pOnChange={setName} pName="Name" pHolder={DefaultPackage.name}/>
              <LicenseInput license={license} setLicense={setLicense} />
	    </Box>
	    <Box sx={{ display: "flex" }}>
	      <TextInput pValue={description} pOnChange={setDescription} pName="Description" pHolder={DefaultPackage.description}/>
	      <TextInput pValue={documentation} pOnChange={setDocumentation} pName="Documentation" pHolder={DefaultPackage.documentation}/>
	    </Box>
	    <Box sx={{ display: "flex" }}>
	      <TextInput pValue={dateCreated} pOnChange={setDateCreated} pName="Date Created" pHolder={DefaultPackage.dateCreated}/>
              <TextInput pValue={datePublished} pOnChange={setDatePublished} pName="Date Published" pHolder={DefaultPackage.datePublished}/>
	    </Box>
	    <Box sx={{ display: "flex" }}>
	      <TextInput pValue={applicationCategory} pOnChange={setApplicationCategory} pName="Application Category" pHolder={DefaultPackage.applicationCategory}/>
	      <MenuInput pValue={developmentStatus} pOnChange={setDevelopmentStatus} pName="Development Status" pOptions={DevStatuses} />
              <ListInput pValue={keywords} pOnChange={setKeywords} pName="Keywords" pHolder={DefaultPackage.keywords}/>
	    </Box>
          </Paper>
	  <Paper sx={{ p: 2, border: "3px solid", borderColor: "grey.300", borderRadius: 2, boxShadow: 3 }}>
            <Typography>The current version</Typography>
	    <Box sx={{ display: "flex" }}>
	      <TextInput pValue={version} pOnChange={setVersion} pName="Version" pHolder={DefaultPackage.version}/>
	      <TextInput pValue={dateModified} pOnChange={setDateModified} pName="Date Modified" pHolder={DefaultPackage.dateModified}/>
	    </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
	      <TextInput pValue={releaseNotes} pOnChange={setReleaseNotes} pName="Release Notes" pHolder={DefaultPackage.releaseNotes}/>
	      <TextInput pValue={downloadUrl} pOnChange={setDownloadUrl} pName="Download Url" pHolder={DefaultPackage.downloadUrl}/>
	    </Box>
	  </Paper>
	  <Paper sx={{ p: 2, border: "3px solid", borderColor: "grey.300", borderRadius: 2, boxShadow: 3 }}>
            <Typography>The environment</Typography>
            <Box sx={{ display: "flex" }}>
              <ListInput pValue={operatingSystem} pOnChange={setOperatingSystem} pName="Operating Systems" pHolder={DefaultPackage.operatingSystem}/>
              <ListInput pValue={programmingLanguage} pOnChange={setProgrammingLanguage} pName="Programming Languages" pHolder={DefaultPackage.programmingLanguage}/>
	    </Box>
	  </Paper>
	  <Paper sx={{ p: 2, border: "3px solid", borderColor: "grey.300", borderRadius: 2, boxShadow: 3 }}>
            <Typography>The development tools</Typography>
            <Box sx={{ display: "flex" }}>
	      <TextInput pValue={codeRepository} pOnChange={setCodeRepository} pName="Code Repository" pHolder={DefaultPackage.codeRepository}/>
	      <TextInput pValue={contIntegration} pOnChange={setContIntegration} pName="Cont Integration" pHolder={DefaultPackage.contIntegration}/>
	    </Box>
            <Box sx={{ display: "flex" }}>
 	      <TextInput pValue={issueTracker} pOnChange={setIssueTracker} pName="Issue Tracker" pHolder={DefaultPackage.issueTracker}/>
	      <TextInput pValue={discussion} pOnChange={setDiscussion} pName="Discussion" pHolder={DefaultPackage.discussion}/>
	    </Box>
            <Box sx={{ display: "flex" }}>
	      <TextInput pValue={guixPackage} pOnChange={setGuixPackage} pName="Guix Package" pHolder={DefaultPackage.guixPackage}/>
	      <TextInput pValue={spackPackage} pOnChange={setSpackPackage} pName="Spack Package" pHolder={DefaultPackage.spackPackage}/>
	    </Box>
	  </Paper>
        </Grid>
        <Grid xs={12} md={6}>
          <Render desc={desc} setPackage={setPackage}/>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
