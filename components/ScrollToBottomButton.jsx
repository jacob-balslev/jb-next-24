
import { useEffect, useState } from "react"

const ScrollToBottomButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  // handles the animation when scrolling to the top
  const scrollToBottom = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      })
  }

  return (
  
<a onClick={scrollToBottom}
   aria-label="To bottom"
   title="To bottom"
   className={`cd-bottom ${
    isVisible ? "opacity-100" : "opacity-0"
  }`}>Intro</a>

  )
}

export default ScrollToBottomButton