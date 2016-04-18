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
    #    size.disabled = 1

}

# add content elements to content wizard
mod.wizards.newContentElement.wizardItems.common.show := addToList(textpic)