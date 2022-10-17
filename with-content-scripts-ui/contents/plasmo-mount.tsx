import type { PlasmoContentScript, PlasmoGetOverlayAnchor } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector("#pricing")

const PlasmoPricingExtra = () => (
  <span
    style={{
      background: "white",
      padding: 12
    }}>
    HELLO WORLD
  </span>
)

export default PlasmoPricingExtra
