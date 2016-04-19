<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Basic Templates');

// ----------------------------------------------------------------------------
// DEFAULT PAGE TSconfig
// ----------------------------------------------------------------------------

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:lj_templates/Configuration/TypoScript/pagetsconfig.ts">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:lj_templates/Configuration/TypoScript/rtetsconfig.ts">');

// ----------------------------------------------------------------------------
// DEFAULT USER TSconfig
// ----------------------------------------------------------------------------

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:lj_templates/Configuration/TypoScript/usertsconfig.ts">');


// register that TypoScript static configuration for EXT:vogelfrei
\FluidTYPO3\Flux\Core::registerProviderExtensionKey('lj_templates', 'Page');
\FluidTYPO3\Flux\Core::registerProviderExtensionKey('lj_templates', 'Content');

// Adding fields to pages TCA
$tmpCol = array(

	// add field bodytext_columns
	'tx_ljtemplates_bodytext_columns' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:lj_templates/Resources/Private/Language/locallang_db.xlf:tt_content.tx_ljtemplates_bodytext_columns',
		'config' => array(
			'type' => 'select',
			'renderType' => 'selectSingle',
			'items' => array(
				array(
					'LLL:EXT:lj_templates/Resources/Private/Language/locallang_db.xlf:tt_content.tx_ljtemplates_bodytext_columns.I.1',
					1
				),
				array(
					'LLL:EXT:lj_templates/Resources/Private/Language/locallang_db.xlf:tt_content.tx_ljtemplates_bodytext_columns.I.2',
					2
				),
				array(
					'LLL:EXT:lj_templates/Resources/Private/Language/locallang_db.xlf:tt_content.tx_ljtemplates_bodytext_columns.I.3',
					3
				)
			),
			'default' => 1
		)
	),

);

// add bodytext_columns
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $tmpCol, 1);

//\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
//	'tt_content',
//	'visibility',
//	'tx_examples_noprint',
//	'after:linkToTop'
//);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('tt_content','tx_ljtemplates_bodytext_columns', '' , 'after:bodytext');

// add subheader to tca types
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('tt_content','subheader;;;;1-1-1', 'textpic', 'after:header');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('tt_content','subheader;;;;1-1-1', 'text', 'after:header');

$GLOBALS['TCA']['sys_file_reference']['columns']['crop']['config'] = array(
	'type' => 'imageManipulation',
	'ratios' => array(
		'1.7777777777777777' => '16:9',
		'2' => 'Visual (2:1)',
		'1.52380' => 'Teaser',
		'1.28989' => 'Angebote',
		'1.50076' => 'Zimmer',
		'1' => 'Quadratisch',
	),
);



// Add the CType "textprice"

//$languageFilePrefix = 'LLL:EXT:fluid_styled_content/Resources/Private/Language/Database.xlf:';
//$frontendLanguageFilePrefix = 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:';
//
//\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
//	'tt_content',
//	'CType',
//	[
//		'Text und Preis',
//		'textprice',
//		'content-textpic'
//	],
//	'textmedia',
//	'after'
//);
////$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['default'] = 'textmedia';
//
//$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['textprice'] = 'mimetypes-x-content-text-media';
//
//$GLOBALS['TCA']['tt_content']['types']['textprice'] = [
//	'showitem' => '
//				--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
//				--palette--;' . $frontendLanguageFilePrefix . 'palette.header;header,rowDescription,
//				bodytext;' . $frontendLanguageFilePrefix . 'bodytext_formlabel,
//			--div--;' . $frontendLanguageFilePrefix . 'tabs.media,
//				assets,
//				--palette--;' . $frontendLanguageFilePrefix . 'palette.imagelinks;imagelinks,
//			--div--;' . $frontendLanguageFilePrefix . 'tabs.appearance,
//				layout;' . $frontendLanguageFilePrefix . 'layout_formlabel,
//				--palette--;' . $languageFilePrefix . 'tt_content.palette.mediaAdjustments;mediaAdjustments,
//				--palette--;' . $languageFilePrefix . 'tt_content.palette.gallerySettings;gallerySettings,
//				--palette--;' . $frontendLanguageFilePrefix . 'palette.appearanceLinks;appearanceLinks,
//			--div--;' . $frontendLanguageFilePrefix . 'tabs.access,
//				hidden;' . $frontendLanguageFilePrefix . 'field.default.hidden,
//				--palette--;' . $frontendLanguageFilePrefix . 'palette.access;access,
//			--div--;' . $frontendLanguageFilePrefix . 'tabs.extended
//		',
//	'columnsOverrides' => ['bodytext' => ['defaultExtras' => 'richtext:rte_transform[mode=ts_css]']]
//];
//
//// Add category tab when categories column exits
//if (!empty($GLOBALS['TCA']['tt_content']['columns']['categories'])) {
//	$GLOBALS['TCA']['tt_content']['types']['textprice']['showitem'] .=
//		',--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category,
//				categories';
//}
//
//$GLOBALS['TCA']['tt_content']['types']['textprice']['showitem'] .=
//	',--div--;Preise,
//				tx_stuben_price_1,tx_stuben_price_2,tx_stuben_price_3,tx_stuben_price_4';
//
//// Add table wizard
//$GLOBALS['TCA']['tt_content']['types']['table']['columnsOverrides']['bodytext']['defaultExtras'] = 'nowrap:wizards[table]';
//
//// Add additional fields for bullets + upload CTypes
//$additionalColumns = [
//	'tx_stuben_price_1' => array(
//		'l10n_mode' => 'prefixLangTitle',
//		'l10n_cat' => 'text',
//		'label' => 'Preis 1',
//		'config' => array(
//			'type' => 'text',
//			'cols' => '40',
//			'rows' => '5',
//		),
//		'defaultExtras' => 'richtext[]'
//
//	),
//	'tx_stuben_price_2' => array(
//		'l10n_mode' => 'prefixLangTitle',
//		'l10n_cat' => 'text',
//		'label' => 'Preis 2',
//		'config' => array(
//			'type' => 'text',
//			'cols' => '40',
//			'rows' => '5',
//		),
//		'defaultExtras' => 'richtext[]'
//
//	),
//	'tx_stuben_price_3' => array(
//		'l10n_mode' => 'prefixLangTitle',
//		'l10n_cat' => 'text',
//		'label' => 'Preis 3',
//		'config' => array(
//			'type' => 'text',
//			'cols' => '40',
//			'rows' => '5',
//		),
//		'defaultExtras' => 'richtext[]'
//
//	),
//	'tx_stuben_price_4' => array(
//		'l10n_mode' => 'prefixLangTitle',
//		'l10n_cat' => 'text',
//		'label' => 'Preis 4',
//		'config' => array(
//			'type' => 'text',
//			'cols' => '40',
//			'rows' => '5',
//		),
//		'defaultExtras' => 'richtext[]'
//
//	),
//
//];
//
//\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $additionalColumns);
//\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('tt_content', 'tx_stuben_price_1', 'after:bodytext');
//\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'uploadslayout', 'uploads_description,uploads_type');



