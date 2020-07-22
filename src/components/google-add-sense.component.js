import React, { Component } from 'react';

export default class GoogleAddSenseComponent extends Component {
    componentDidMount() {
        // (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
    }

    render() {
        return (
            <div>
                {/* <script>
                    {(window['adsbygoogle'] || [])
                        .push({
                            google_ad_client: "ca-pub-5624644615408631",
                            enable_page_level_ads: true
                        })};
                </script> */}
            </div>
        );
    }
}


/** 
 * 
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-5624644615408631",
    enable_page_level_ads: true
  });
</script>
*/