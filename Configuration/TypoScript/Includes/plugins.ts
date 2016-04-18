plugin.tx_ljtemplates.view {
    templateRootPath = EXT:lj_templates/Resources/Private/Templates/
    partialRootPath = EXT:lj_templates/Resources/Private/Partials/
    layoutRootPath = EXT:lj_templates/Resources/Private/Layouts/
}

#plugin.tx_news.view.overlays.myext.partialRootPath = EXT:myext/Resources/Private/Partials/
plugin.tx_fluidcontentcore.view.overlays.lj_templates.templateRootPath = EXT:lj_templates/Resources/Private/Templates/
plugin.tx_fluidcontentcore.view.overlays.lj_templates.layoutRootPath = EXT:lj_templates/Resources/Private/Layouts/

plugin.tx_news {
    view {
        templateRootPaths {
            110 = EXT:lj_templates/Resources/Private/Templates/
        }
        partialRootPaths {
            110 = EXT:lj_templates/Resources/Private/Partials/News/
        }

    }
    settings {
        list.media.image.maxWidth = 300
        list.media.image.maxHeight = auto
    }
}


plugin.Tx_Formhandler.settings.predef {

    # contact form settings
    request {

        debug = 0
        name = Anfrageformular
        templateFile = typo3conf/ext/lj_templates/Resources/Private/Templates/Formhandler/RequestForm.html
        langFile = typo3conf/ext/lj_templates/Resources/Private/Language/formhandler.xml

        formValuesPrefix = formhandler

        disableWrapInBaseClass = 1

        validators {
            1.class = Validator_Default
            1.config {
                #disableErrorCheckFields = firstname,lastname
                fieldConf {
                    firstname.errorCheck.1 = required
                    lastname.errorCheck.1 = required
                    address.errorCheck.1 = required
                    city.errorCheck.1 = required
                    zip.errorCheck.1 = required
                    anreise.errorCheck.1 = required
                    abreise.errorCheck.1 = required
                    email.errorCheck {
                        1 = required
                        2 = email
                    }
                }
            }
        }

        finishers {
            1.class = Finisher_Mail
            1.config {
                templateFile = typo3conf/ext/lj_templates/Resources/Private/Templates/Formhandler/RequestEmail.html

                admin {
                    to_email = {$FORMULAR.ANFRAGE.ADMIN.TO_EMAIL}
                    to_name = {$FORMULAR.ANFRAGE.ADMIN.TO_NAME}
                    subject = {$FORMULAR.ANFRAGE.ADMIN.SUBJECT}
                    sender_email = {$FORMULAR.ANFRAGE.ADMIN.SENDER_EMAIL}
                    replyto_email = {$FORMULAR.ANFRAGE.ADMIN.REPLYTO_EMAIL}
                    replyto_name = {$FORMULAR.ANFRAGE.ADMIN.REPLYTO_NAME}
                }
                user {
                    to_email = {$FORMULAR.ANFRAGE.USER.TO_EMAIL}
                    to_name = {$FORMULAR.ANFRAGE.USER.TO_NAME}
                    subject = {$FORMULAR.ANFRAGE.USER.SUBJECT}
                    sender_email = {$FORMULAR.ANFRAGE.USER.SENDER_EMAIL}
                    replyto_email = {$FORMULAR.ANFRAGE.USER.REPLYTO_EMAIL}
                    replyto_name = {$FORMULAR.ANFRAGE.USER.REPLYTO_NAME}
                }

                # send to user is set later on
            }
            2 {
                class = Tx_Formhandler_Finisher_SubmittedOK
                config.returns = 1
            }
        }

        # In case an error occurred, all markers ###is_error_[fieldname]### are filled with the configured value of the setting "default".
        isErrorMarker {
            default = has-error
        }

        # These wraps define how an error message looks like. The message itself is set in the lang file.
        singleErrorTemplate {
            totalWrap = <small class="error">|</small>
        }

        #markers.PRODUCTS = USER
        #markers.PRODUCTS.userFunc = LuJa\GolfProduct\Controller\ProductController->renderProductItemsForForm

#        initInterceptors {
#            1.class = Interceptor_CombineFields
#            1.config {
#                combineFields {
#                    fullname {
#                        fields {
#                            1 = firstname
#                            2 = lastname
#                        }
#                        #separator = ,
#                        hideEmptyValues = 1
#                    }
#                }
#            }
#        }
    }
}

plugin.tx_felogin_pi1._CSS_DEFAULT_STYLE >
plugin.tx_cssstyledcontent._CSS_DEFAULT_STYLE >
plugin.tx_frontend._CSS_DEFAULT_STYLE >

