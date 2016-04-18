# lj_templates
Basic Typo3 Provider Extensions using flux, typo3pages, fluidcontent, vhs. 

## Requirements
Typo3 7.5

flux
fluidpages
fluidcontent
vhs

## Description

This is a basic provider extension for Typo3 using fluidpages. 
- Install all dependency extensions.
- Install lj_templates and add static typoscript template to the main ts template.
- set constants (baseUrl, rootPid, etc) in lj_templates/Configuration/TypoScript/constants.txt or overwrite in main ts template
- set rootpage page properties field "backend layout" and "backend layout subpages" to value "fluidpages" and choose fluidpages template in tab "page layouts"
- add content elements to your content columns 
