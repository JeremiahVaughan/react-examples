import {createContext, useEffect, useState} from "react";

const NavigationContext = createContext();

function NavigationProvider({children}) {
  // This state exists to cause a render when the user navigates with the forward/back button or programmatic navigation (e.g., popstate event).
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => induceRerenderWhenBackOrForwardButtonsArePressed(setCurrentPath), [])

  const navigate = (to) => {
    window.history.pushState({}, '', to)
    setCurrentPath(to);
  }
  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
    {children}
  </NavigationContext.Provider>
  )
}


export default NavigationContext;
export {NavigationProvider};

const induceRerenderWhenBackOrForwardButtonsArePressed = (setCurrentPath) => {
  const handler = () => setCurrentPath(window.location.pathname)
  window.addEventListener('popstate', handler);
  return () => window.removeEventListener('popstate', handler);
};
