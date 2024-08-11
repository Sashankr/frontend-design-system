import { ThemeProvider } from "./components/theme-provider";
import Landing from "./Landing";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Landing />
    </ThemeProvider>
  );
};

export default App;
