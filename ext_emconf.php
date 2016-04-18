<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "lj_templates".
 *
 * Auto generated 01-06-2015 21:07
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Provider extension for Fluid Powered TYPO3',
	'description' => 'Provides templates for pages and content',
	'category' => 'misc',
	'shy' => 0,
	'version' => '0.0.1',
	'dependencies' => 'cms,extbase,fluid,flux,fluidpages,fluidcontent,vhs,fluid_styled_content',
	'conflicts' => '',
	'priority' => '',
	'loadOrder' => '',
	'module' => '',
	'state' => 'experimental',
	'uploadfolder' => 0,
	'createDirs' => '',
	'modify_tables' => '',
	'clearcacheonload' => 1,
	'lockType' => '',
	'author' => 'Lukas Jakob',
	'author_email' => 'lu.jakob@googlemail.com',
	'author_company' => '',
	'CGLcompliance' => '',
	'CGLcompliance_note' => '',
	'constraints' => array(
		'depends' => array(
			'typo3' => '7.5-7.9',
			'cms' => '',
			'extbase' => '',
			'fluid' => '',
			'flux' => '7.2.3-7.9.99',
			
			'fluidpages' => '3.3.1-3.9.99',
			'fluidcontent' => '4.3.2-4.9.99',
			'vhs' => '2.3.3-2.9.99',
			'fluid_styled_content' => ''
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
	'_md5_values_when_last_written' => 'a:0:{}',
	'suggests' => array(
	),
);
