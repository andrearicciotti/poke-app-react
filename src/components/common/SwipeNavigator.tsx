import { useSwipeable } from "react-swipeable";
import { useNavigate, useLocation } from "react-router-dom";

const SwipeNavigator: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();


  // Mappa delle route in ordine
  const routes = ["/", "/cart", "/favorites", "/settings"];
  const currentIndex = routes.indexOf(location.pathname);
  console.log("PATH:", location.pathname, "INDEX:", currentIndex);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('swipe left');
      
      if (currentIndex !== -1 && currentIndex < routes.length - 1) {
        navigate(routes[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      console.log('swipe right');
      if (currentIndex > 0) {
        navigate(routes[currentIndex - 1]);
      }
    },
  });

  return (
    <div {...handlers} className="h-screen w-screen no-scroll">
      {children}
    </div>
  );
};

export default SwipeNavigator;