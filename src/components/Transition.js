import React from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group"

const Transition = ({children, loc}) => (
  <TransitionGroup>
    <CSSTransition
      key={loc}
      timeout={{ enter: 400, exit: 200 }}
      classNames="fade"
    >
      {children}
    </CSSTransition>
    <style global jsx>{`
      .fade-enter {
        opacity: 0.01;
        transform: translateY(5em) scale(0.99);
        transform-origin: center;
      }
      .fade-enter.fade-enter-active {
        opacity: 1;
        transform: translateY(0em) scale(1);
        transition: 200ms 200ms ease-in-out;
      }
      .fade-exit {
        opacity: 1;
        transform: translateY(0em) scale(1);
      }
      .fade-exit.fade-exit-active {
        opacity: 0.01;
        transform: translateY(5em) scale(0.99);
        transition: 200ms ease-in-out;
      }
    `}</style>
  </TransitionGroup>
)

export default Transition
