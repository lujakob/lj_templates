.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../Includes.txt


.. _admin-manual:

Administrator Manual
====================

Installation
------------

- Install sysext fluid_styled_content.
- Install extensions flux, fluidpages, fluidcontent, vhs from git repository (https://github.com/FluidTYPO3)
- Install lj_templates.
- Add rootpage to your installation pagetree
- Add main typoscript template and set option "rootpage"
- Include static template "fluid_styled_content" and "lj_templates"
- Delete .git folder in your extension and start customizing your files

Basic Configuration
------------

- set base url and main nav pid in Configuration/TypoScript/constants.txt
- explore typoscript and customize to your needs
- find frontend templates in Resources/Templates/Private/Page/
- find content element templates in Resources/Templates/Private/FluidStyledContent/ (all ce templates are overwritten here)
- find assets in Resources/Templates/Public/

Detailed Configuration
------------

- some content element or page fields are hidden (see Configuration/TypoScript/pagetsconfig.ts)
- content elements shown in the content element wizard are defined in (see Configuration/TypoScript/pagetsconfig.ts)
- rte configs are set Configuration/TypoScript/rtetsconfig.ts