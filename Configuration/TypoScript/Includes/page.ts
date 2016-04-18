page {

    config {
        index_enable = 1
    }

    headerData {
        10 = TEXT
        10.value (
<link href='https://fonts.googleapis.com/css?family=Caudex|Great+Vibes' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="/typo3conf/ext/lj_templates/Resources/Public/css/main.css">
        )
        20 = TEXT
        20.value (
<script src="/typo3conf/ext/lj_templates/Resources/Public/js/modernizr.2.6.2.js"></script>
        )
        910 = TEXT
        910.value (

        )
    }

    includeJSFooter {
        #jquery = typo3conf/ext/lj_templates/Resources/Public/js/vendor/jquery-1.11.1.min.js
        main = typo3conf/ext/lj_templates/Resources/Public/js/main.js
    }

    meta.viewport = width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no

    meta.description.data = levelfield:-1, description, slide
    meta.keywords.data = levelfield:-1, keywords, slide

    bodyTag >
    bodyTagCObject = TEXT
    bodyTagCObject.field = uid
    bodyTagCObject.wrap = <body id="body-id-|" class="standard">

}

[globalVar = TSFE:id = 1]
    page.bodyTagCObject.wrap = <body id="body-id-|" class="home">
[end]

# REMOVE "bodytext" CLASS FROM <P> tags
#lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class =


# page types for ajax calls
expertList = PAGE
expertList {
    typeNum = 466

    10 < tt_content.list.20.ljtemplates_expertlist

    config {
        disableAllHeaderCode = 1
        #additionalHeaders = Content-type: application/json
        xhtml_cleaning = 0
        admPanel = 0
        debug = 0
    }
}

SHOWFORM =

[globalVar = GP:formhandler|submitted > 0]
SHOWFORM = show-form
[end]