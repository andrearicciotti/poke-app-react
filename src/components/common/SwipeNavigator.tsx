import { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useNavigate, useLocation } from "react-router-dom";
import { Toolbar } from "./Toolbar";


export function SwipeNavigator() {
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const toolbarRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const routes = ["/", "/cart", "/favorites", "/settings"];
  const currentIndex = routes.indexOf(location.pathname);

  const handlers = useSwipeable({

    onSwipedLeft: () => {
      if (currentIndex !== -1) {
        const next =
          currentIndex < routes.length - 1 ? currentIndex + 1 : 0;
        navigate(routes[next]);
        setToolbarVisible(true);
      }
    },

    onSwipedRight: () => {
      if (currentIndex !== -1) {
        const prev =
          currentIndex > 0 ? currentIndex - 1 : routes.length - 1;
        navigate(routes[prev]);
        setToolbarVisible(true);
      }
    },

    onSwipedDown: () => {
      if (window.scrollY < 500) {
        setToolbarVisible(true);
      }
    },

    onSwipedUp: () => {
      setToolbarVisible(false);
    },

    onTap: (event) => {
      if (toolbarRef.current && !toolbarRef.current.contains(event.event.target as Node)) {
        setToolbarVisible(false);
      }
    },

    trackTouch: true,
    trackMouse: false,
  });

  let toolbarClass;

  switch (location.pathname) {
    case '/':
      toolbarClass = ' toolbar0';
      break;

    case '/cart':
      toolbarClass = ' toolbar1';
      break;

    case '/favorites':
      toolbarClass = ' toolbar2';
      break;

    case '/settings':
      toolbarClass = ' toolbar3';
      break;

    default:
      toolbarClass = '';
      break;
  }

  return (
    <div {...handlers} className="swiper">
      <Toolbar
        ref={toolbarRef}
        classes={`${toolbarClass} ${toolbarVisible ? "toolbar-visible" : "toolbar-hidden"}`}
      />
    </div>
  );
}
