# LOGO

lib.logo = TEXT
lib.logo {
    value = Startseite
    typolink {
        parameter = {$PIDS.ROOT}
        ATagParams = class="logo"
    }
}
# BACKGROUND IMAGE

tmp.backgroundImage = IMAGE
tmp.backgroundImage {
    file {
        import.data = levelmedia:-1, slide
        treatIdAsReference = 1
        import.listNum = 0
    }
    wrap = <div class="visual-item">|</div>
}

lib.backgroundImage = COA
lib.backgroundImage {
    10 < tmp.backgroundImage
    10.file.import.listNum = 0
    20 < tmp.backgroundImage
    20.file.import.listNum = 1
    30 < tmp.backgroundImage
    30.file.import.listNum = 2
    40 < tmp.backgroundImage
    40.file.import.listNum = 3
    50 < tmp.backgroundImage
    50.file.import.listNum = 4
    60 < tmp.backgroundImage
    60.file.import.listNum = 5
    70 < tmp.backgroundImage
    70.file.import.listNum = 6
    80 < tmp.backgroundImage
    80.file.import.listNum = 7
    90 < tmp.backgroundImage
    90.file.import.listNum = 8
    100 < tmp.backgroundImage
    100.file.import.listNum = 9
}

# FOOTER INFO
lib.footerInfo = TEXT
lib.footerInfo.value = &copy;&nbsp;2016 Oberdorfer Stuben

lib.footerLeft1 = CONTENT
lib.footerLeft1 {
    table = tt_content
    select {
        where = uid=5
        pidInList = 182
        orderBy = sorting
    }
    renderObj = TEXT
    renderObj.field = bodytext
}


lib.footerRight = CONTENT
lib.footerRight {
    table = tt_content
    select {
        where = uid=6
        pidInList = 182
        orderBy = sorting
    }
    renderObj = TEXT
    renderObj.field = bodytext
}

tt_content.fluidcontent_content.10 >

tt_content {
    textpic =< lib.fluidContent
    textpic {
        templateName = Textpic
        dataProcessing {
            10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
            10 {
                references.fieldName = image
            }
            20 = TYPO3\CMS\Frontend\DataProcessing\GalleryProcessor
            20 {
                maxGalleryWidth = {$styles.content.textmedia.maxW}
                maxGalleryWidthInText = {$styles.content.textmedia.maxWInText}
                columnSpacing = {$styles.content.textmedia.columnSpacing}
                borderWidth = {$styles.content.textmedia.borderWidth}
                borderPadding = {$styles.content.textmedia.borderPadding}
            }
        }
        stdWrap {
            # Setup the edit icon for content element "textmedia"
            editIcons = tt_content: header [header_layout], subheader, bodytext, assets, image_zoom
            editIcons {
                iconTitle.data = LLL:EXT:fluid_styled_content/Resources/Private/Language/FrontendEditing.xlf:editIcon.textmedia
            }
        }
    }
    text =< lib.fluidContent
    text {
        templateName = Text
        stdWrap {
            # Setup the edit icon for content element "header"
            editIcons = tt_content: header [header_layout|header_link], subheader, date
            editIcons {
                beforeLastTag = 1
                iconTitle.data = LLL:EXT:fluid_styled_content/Resources/Private/Language/FrontendEditing.xlf:editIcon.header
            }
        }
    }
    image =< lib.fluidContent
    image {
        templateName = Image
        dataProcessing {
            10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
            10 {
                references.fieldName = image
            }
            20 = TYPO3\CMS\Frontend\DataProcessing\GalleryProcessor
            20 {
                maxGalleryWidth = {$styles.content.textmedia.maxW}
                maxGalleryWidthInText = {$styles.content.textmedia.maxWInText}
                columnSpacing = {$styles.content.textmedia.columnSpacing}
                borderWidth = {$styles.content.textmedia.borderWidth}
                borderPadding = {$styles.content.textmedia.borderPadding}
            }
        }
        stdWrap {
            # Setup the edit icon for content element "textmedia"
            editIcons = tt_content: header [header_layout], bodytext, assets [imageorient|imagewidth|imageheight], [imagecols|imageborder], image_zoom
            editIcons {
                iconTitle.data = LLL:EXT:fluid_styled_content/Resources/Private/Language/FrontendEditing.xlf:editIcon.textmedia
            }
        }
    }

    doubletext =< lib.fluidContent
    doubletext {
        templateName = Doubletext
        stdWrap {
            # Setup the edit icon for content element "header"
            editIcons = tt_content: header [header_layout|header_link], subheader, date
            editIcons {
                beforeLastTag = 1
                iconTitle.data = LLL:EXT:fluid_styled_content/Resources/Private/Language/FrontendEditing.xlf:editIcon.header
            }
        }
    }
}