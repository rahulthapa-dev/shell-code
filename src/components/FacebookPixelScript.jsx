'use client';
import { useEffect } from 'react'

const FacebookPixel = () => {
    useEffect(() => {
        // Ensure that the Pixel script is not added multiple times
        if (!document.querySelector('script#facebook-pixel-script')) {
            // Create the Facebook Pixel script element
            const fbPixelScript = document.createElement('script')
            fbPixelScript.id = 'facebook-pixel-script'
            fbPixelScript.type = 'text/javascript'
            fbPixelScript.async = true
            fbPixelScript.innerHTML = `
          !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '397567235976537');
            fbq('track', 'PageView');

        `

            // Append the script to the document
            document.body.appendChild(fbPixelScript)

            // Optionally, add the noscript image for cases where JavaScript is disabled
            const noscriptImg = document.createElement('img')
            noscriptImg.height = 1
            noscriptImg.width = 1
            noscriptImg.style.display = 'none'
            noscriptImg.src = 'https://www.facebook.com/tr?id=397567235976537&ev=PageView&noscript=1'
            document.body.appendChild(noscriptImg)
        }
    }, [])

    return null // Nothing to render as it's purely for tracking purposes
}

const FacebookPixelScript = () => {
    return <FacebookPixel />
}
export default FacebookPixelScript