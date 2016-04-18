config {
# cache settings
    no_cache = {$CONFIG.NO_CACHE}

    # CONFIGURE LOCALE
    locale_all = de_DE.utf-8
    language = de
    htmlTag_langKey = de

    # CACHE 1 DAY
    cache_period = 86400

    # CLEAR CACHE AT MIDNIGHT
    cache_clearAtMidnight = 1

    # DISABLE STATIC DOCUMENTS
    simulateStaticDocuments = 0

    # DEFINE BASE URL
    baseURL = {$CONFIG.BASE_URL}

    # ENABLE REALURL
    tx_realurl_enable = 1

    # CONFIGURE SOURCEOPT
    sourceopt {
        enabled = 1
        removeBlurScript = 1
        removeComments = 2
        formatHtml = 2
        formatHtml.tabSize = 1
#        removeGenerator = 1
#        removeLinkSchema = 1
#        remove_new_lines = 1
#        remove_empty_lines = 2
    }

    # REORDER PAGE TITLE
    pageTitleFirst = 1

    # SPAM PROTECT E-MAIL ADRESSES
    spamProtectEmailAddresses = -5

    # ENABLE indexed_search
    index_enable = 1

    removeDefaultJS = 1
    removeDefaultCSS = 1

    linkVars = L

}