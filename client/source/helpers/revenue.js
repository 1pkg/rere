import { Analytic, Env } from './'

export default class self {
    static initialized = false
    static active = false

    static pause() {
        if (self.initialize() && self.active) {
            if (Env.cordova()) {
                admob.banner.remove()
            }
            self.active = false
        }
    }

    static resume() {
        if (self.initialize() && !self.active) {
            if (Env.cordova()) {
                admob.banner.prepare()
            }
            self.active = true
        }
    }

    static once() {
        if (self.initialize()) {
            if (Env.cordova()) {
                self.pause()
                admob.interstitial.prepare()
            }
        }
    }

    static initialize() {
        if (Env.production()) {
            if (!self.initialized) {
                if (Env.cordova()) {
                    document.addEventListener(
                        'admob.banner.events.LOAD_FAIL',
                        error => Analytic.error(error),
                    )
                    admob.banner.config({
                        id: ADMOB_BANNER_CODE,
                        bannerAtTop: true,
                        isTesting: false,
                        autoShow: true,
                        overlap: true,
                        size: admob.AD_SIZE.SMART_BANNER,
                    })

                    document.addEventListener(
                        'admob.interstitial.events.LOAD_FAIL',
                        error => Analytic.error(error),
                    )
                    admob.interstitial.config({
                        id: ADMOB_INTERSTILIAL_CODE,
                        isTesting: false,
                        autoShow: true,
                    })
                } else {
                    let script = document.createElement('script')
                    script.onload = () => {
                        window.adsbygoogle = (window.adsbygoogle || []).push({
                            google_ad_client: ADSENSE_CODE,
                            enable_page_level_ads: true,
                        })
                    }
                    script.src =
                        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
                    document.head.appendChild(script)
                }
                self.initialized = true
            }
            return true
        }
        return false
    }
}
