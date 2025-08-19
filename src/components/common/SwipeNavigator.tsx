import { useSwipeable } from "react-swipeable";
import { useNavigate, useLocation } from "react-router-dom";

export interface SwipeNavigatorProps {
  swiper?: React.ReactNode
}

export function SwipeNavigator({ swiper }: SwipeNavigatorProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = ["/", "/cart", "/favorites", "/settings"];
  const currentIndex = routes.indexOf(location.pathname);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex !== -1) {
        if (currentIndex < routes.length - 1) {
          navigate(routes[currentIndex + 1]);
        } else {
          navigate(routes[0]);
        }
      }
    },
    onSwipedRight: () => {
      if (currentIndex !== -1) {
        if (currentIndex > 0) {
          navigate(routes[currentIndex - 1]);
        } else {
          navigate(routes[routes.length - 1]);
        }
      }
    },
  });

  return (
    <div {...handlers} className="swiper">
      {swiper}
    </div>
  );
}
