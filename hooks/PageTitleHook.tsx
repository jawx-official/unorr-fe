import React, { useEffect } from 'react'
import { useUtilStore } from '../stores/utils'
import { defaultDescription, defaultKeywords, defaultTitle } from '../stores/utils/consts'
import { utils } from '../stores/utils/utils.interface'

export default function PageTitleHook({ title: pageTitle, description, keywords }: utils) {
    const { updateUtils, title } = useUtilStore()
    useEffect(function mount() {
        if (!pageTitle && title !== defaultTitle) {
            updateUtils({
                title: pageTitle || defaultTitle,
                description: description || defaultDescription,
                keywords: keywords || defaultKeywords
            })
        } else if (pageTitle && title !== pageTitle) {
            updateUtils({
                title: pageTitle || defaultTitle,
                description: description || defaultDescription,
                keywords: keywords || defaultKeywords
            })
        }
        return function unMount() { }
    })
    return null
}
