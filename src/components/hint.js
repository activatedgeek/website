/** @jsx jsx */

import { jsx, Styled } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"

const Info = ({ children }) => (
  <Styled.p
    sx={{
      p: 3,
      boxShadow: "md",
      borderLeftStyle: "solid",
      borderLeftWidth: "4",
      borderLeftColor: "blue.4",
      bg: "blue.1",
      color: "blue.5",
    }}
  >
    <FontAwesomeIcon icon={faInfoCircle} /> {children}
  </Styled.p>
)

const Warn = ({ children }) => (
  <Styled.p
    sx={{
      display: "block",
      p: 3,
      boxShadow: "md",
      borderLeftStyle: "solid",
      borderLeftWidth: "4",
      borderLeftColor: "yellow.4",
      bg: "yellow.2",
      color: "yellow.7",
    }}
  >
    <FontAwesomeIcon icon={faExclamationTriangle} /> {children}
  </Styled.p>
)

export { Info, Warn }