import React from "react"

export function onRenderBody({ setPostBodyComponents }) {
  setPostBodyComponents([
    <script
      key="goatcounter"
      data-goatcounter={`https://${process.env.GATSBY_GC_CODE}.goatcounter.com/count`}
      async
      src="//gc.zgo.at/count.v2.js"
      crossorigin="anonymous"
      integrity="sha384-PeYXrhTyEaBBz91ANMgpSbfN1kjioQNPHNDbMvevUVLJoWrVEjDCpKb71TehNAlj"
    />,
  ])
}
