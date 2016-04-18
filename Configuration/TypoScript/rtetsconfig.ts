# RTE classes
RTE.classes {
#align-left {
    #    name = LLL:EXT:rtehtmlarea/htmlarea/locallang_tooltips.xml:justifyleft
    #    value = text-align: left;
    #}
    align-center {
        name = Text zentriert
        value = text-align: center;
    }
    align-right {
        name = Text rechts
        value = text-align: right;
    }

    font-20 {
        name = 20px
        value = font-weight:bold;
    }

    font-24 {
        name = 24px
        value = font-weight:bold;
    }

    bigger-font {
        name = 18px
        value = font-weight:bold;
    }

    smaller-font {
        name = Schrift kleiner
        value = font-weight:bold;
    }

    brown {
        name = Schrift braun
        value = font-weight:bold;
    }

}

#
RTE.classesAnchor {
    internalLink {
    class = internal-link
        type = page
        image >
    }
    externalLink {
    class = external-link
        type = url
        image >
    }
    externalLinkInNewWindow {
    class = external-link-new-window
        type = url
        image >
    }
    internalLinkInNewWindow {
    class = internal-link-new-window
        type = page
        image >
    }
    mail {
    class = mail
        type = mail
        image >
    }
    brown {
    class = brown
        label = Schrift braun
    }

}

## RTE Konfiguration
RTE.default {
    contentCSS = EXT:lj_templates/Resources/Public/css/rte.css

    ## Markup options
    enableWordClean = 1
    removeTrailingBR = 1
    removeComments = 1
    removeTags = center
    removeTagsAndContents = style,script

    # configure visible buttons
    showButtons = formatblock, blockstyle, blockstylelabel, textstyle, textstylelabel, bold, italic, orderedlist, unorderedlist, insertcharacter, link, unlink, image, removeformat, table, tableproperties, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge, undo, redo, chMode, pastetoggle, toggleborders

    keepButtonGroupTogether = 1
    showStatusBar =  0

    buttons {
        link {
            options.removeItems = spec,folder
            targetSelector.disabled = 1
            popupSelector.disabled = 1
            properties {
                title.readOnly = 1
                target.default =
            }
        }

        formatblock.removeItems = h1,h3,h4,h5,h6,pre,address,blockquote,div,aside,article,footer,header,nav,container,section


        pastetoggle.setActiveOnRteOpen = 1

        image {
            options.removeItems = magic,dragdrop
            options.plain.maxWidth = 3000
            options.plain.maxHeight = 3000
            properties.removeItems = border,class,clickenlarge,align
        }

        table {
            removeFieldsets = alignment, borders, color, language, spacing, style
            properties {
                removed = float, headers, language, direction
                headers.defaultValue = none
            }
        }

        tableproperties {
            removeFieldsets < RTE.default.buttons.table.removeFieldsets
        }

        rowproperties {
            removeFieldsets = borders, color, language, style
        }

        cellproperties {
            removeFieldsets = alignment, borders, color, language, style
        }
        textstyle.tags.span.allowedClasses = smaller-font, brown, align-right,align-center, bigger-font,font-20,font-24
        blockstyle.tags.p.allowedClasses = align-right, align-center, smaller-font

    }

    ## Add styles Left, center and right alignment of text in paragraphs and cells.
        inlineStyle.text-alignment (
    #    p.align-left, h1.align-left, h2.align-left, h3.align-left, h4.align-left, h5.align-left, h6.align-left, td.align-left { text-align: left; }
    #    p.align-center, h1.align-center, h2.align-center, h3.align-center, h4.align-center, h5.align-center, h6.align-center, td.align-center { text-align: center; }
    p.align-right,p.align-center, p.smaller-font, h1.align-right, h2.align-right, h3.align-right, h4.align-right, h5.align-right, h6.align-right, td.align-right { text-align: right; }
)

## Use stylesheet file rather than the above mainStyleOverride and inlineStyle properties to style the contents (htmlArea RTE only)
    ignoreMainStyleOverride = 1

    proc {
    # tags die erlaubt / verboten sind
        allowTags = table, tbody, tr, th, td, h2, h3, h4, h5, h6, p, br, ul, ol, li, strong, em, b, i, a, img
        denyTags = font

        # br wird nicht zu p konvertiert
        dontConvBRtoParagraph = 1

        # tags sind erlaubt außerhalt von p, div
        allowTagsOutside = img,hr

        # erlaubte attribute in p, div tags
        keepPDIVattribs = class

    # List all class selectors that are allowed on the way to the database
        allowedClasses (
            external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail, align-right, align-center, bigger-font,font-20,font-24,smaller-font, brown
        )

        # html parser einstellungen
        HTMLparser_rte {

        # tags die erlaubt/verboten sind
            allowTags < RTE.default.proc.allowTags
            denyTags < RTE.default.proc.denyTags

            # tags die untersagt sind
            removeTags = font

            # entfernt html-kommentare
            removeComments = 1

            # tags die nicht übereinstimmen werden nicht entfernt (protect / 1 / 0)
            keepNonMatchedTags = 0
        }

        # Content to database
        entryHTMLparser_db = 1
        entryHTMLparser_db {

        # tags die erlaubt/verboten sind
            allowTags < RTE.default.proc.allowTags
            denyTags < RTE.default.proc.denyTags

            # CLEAN TAGS
            noAttrib = b, i, u, strike, sub, sup, strong, em, quote, blockquote, cite, tt, br, center

            rmTagIfNoAttrib = span,div,font

            # htmlSpecialChars = 1

            ## align attribute werden erlaubt
            tags {
                p.fixAttrib.align.unset >
                p.allowedAttribs = class,style,align

                div.fixAttrib.align.unset >

                hr.allowedAttribs = class

            # b und i tags werden ersetzt (em / strong)
                b.remap = strong
                i.remap = em

                ## img tags werden erlaubt
                #img >
                img.allowedAttribs = width,height,style,src
            }
        }

        plainImageMode = lockRatio

    }

    # Classes: Ausrichtung
    classesParagraph (
        align-right,align-center
    )

    # Classes: Eigene Stile
    classesCharacter >
    classesImage = rte_image


    # Classes für Links (These classes should also be in the list of allowedClasses)
    classesAnchor = external-link, external-link-new-window, internal-link, internal-link-new-window, mail
    classesAnchor.default {
        page = internal-link
        url = external-link-new-window
        file = download
        mail = mail
    }


    # zeigt alle CSS-Klassen die in formate.css vorhanden sind
    showTagFreeClasses = 0

    # Do not allow insertion of the following tags
    hideTags = font

    # Tabellen Optionen in der RTE Toolbar
    hideTableOperationsInToolbar = 0
    keepToggleBordersInToolbar = 1

    # Tabellen Editierungs-Optionen (cellspacing/ cellpadding / border)
    disableSpacingFieldsetInTableOperations = 1
    disableAlignmentFieldsetInTableOperations=1
    disableColorFieldsetInTableOperations=1
    disableLayoutFieldsetInTableOperations=1
    disableBordersFieldsetInTableOperations=0
}

# Use same processing as on entry to database to clean content pasted into the editor
RTE.default.enableWordClean.HTMLparser < RTE.default.proc.entryHTMLparser_db

# FE RTE configuration (htmlArea RTE only)
RTE.default.FE < RTE.default
RTE.default.FE.userElements >
RTE.default.FE.userLinks >
