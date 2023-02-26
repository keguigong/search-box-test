import classnames from "classnames"
import { useState } from "react"
import styles from "./tag.module.scss"

type Props = {
  tagname: string
  active: boolean
  onClick?: (e: string) => void
}

export function Tag({ tagname, active, onClick }: Props) {
  const [focus, setFocus] = useState(false)

  return (
    <li
      tabIndex={0}
      className={classnames(styles.tag, active && styles.active)}
      onClick={() => onClick?.call(null, tagname)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onKeyDown={(e) => {
        if (e.code === "Enter" && focus) onClick?.call(null, tagname)
      }}
    >
      <svg
        className={styles.icon}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.272 4.56607C11.1087 4.5326 11.9212 4.85029 12.5133 5.44235L16.8062 9.73528C17.9778 10.9069 17.9778 12.8063 16.8062 13.9779L13.9778 16.8063C12.8062 17.9779 10.9067 17.9779 9.73514 16.8063L5.44221 12.5134C4.85015 11.9214 4.53246 11.1088 4.56592 10.2722L4.7485 5.70787C4.76933 5.18698 5.18683 4.76948 5.70773 4.74864L10.272 4.56607Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="8.83789" cy="8.47278" r="0.625" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span>{tagname}</span>
    </li>
  )
}
