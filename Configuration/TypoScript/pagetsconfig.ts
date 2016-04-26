# backend record fields and labels

TCEFORM.tt_content {
    # alternative labels for headline layout
    header_layout {
        altLabels.1 = H1
        altLabels.2 = H2
        altLabels.3 = H3
    }

    # tt_content layout
    layout {
        altLabels.1 = Home - Bild/Text schmal
        altLabels.2 = Teasergalerie
        altLabels.3 = Text 700px
        addItems.4 = Webcam
        addItems.5 = Teaser
        addItems.6 = Angebot
        addItems.7 = Bild 100%
        addItems.8 = Bild/Text
        addItems.9 = Bildergalerie
    }

    # disable fields

    # tt_content
    date.disabled = 1
    rowDescription.disabled = 1
    spaceBefore.disabled = 1
    spaceAfter.disabled = 1
    imagewidth.disabled = 1
    imageheight.disabled = 1
    imageborder.disabled = 1
    image_effects.disabled = 1
    imageorient.disabled = 1
    imagecols.disabled = 1
    image_noRows.disabled = 1
    image_compression.disabled = 1
}

# backend record field default values
TCAdefaults.tt_content {
    imagecols = 1
}

mod.wizards.newContentElement.wizardItems.common {
    elements {
        doubletext {
            title = Text zweispaltig
            description = Inhaltselement zur Darstellung von Text zweispaltig
            icon = EXT:core/Resources/Public/Icons/T3Icons/content/content-text.svg
            tt_content_defValues {
                CType = doubletext
            }
        }
    }
}

# add content elements to content wizard
mod.wizards.newContentElement.wizardItems.common.show := addToList(textpic, doubletext)
mod.wizards.newContentElement.wizardItems.common.show := removeFromList(uploads, table, bullets, textmedia, image)

mod.wizards.newContentElement.wizardItems.special.show := removeFromList(uploads, menu, div, shortcut)