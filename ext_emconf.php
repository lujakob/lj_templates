<?php

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Lj Templates',
	'description' => 'Provides templates for pages and content',
	'category' => 'plugin',
	'version' => '0.0.2',
	'state' => 'alpha',
	'uploadfolder' => 0,
	'createDirs' => '',
	'modify_tables' => '',
	'clearcacheonload' => 1,
	'lockType' => '',
	'author' => 'Lukas Jakob',
	'author_email' => 'lu.jakob@googlemail.com',
	'author_company' => '',
	'dependencies' => 'cms,extbase,fluid,flux,fluidpages,fluidcontent,vhs,fluid_styled_content',
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
);