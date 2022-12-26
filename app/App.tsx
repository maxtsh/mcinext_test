import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes, { NotFound } from "routes/index";
import Layout from "./layout";
import GlobalStyles from "styles/GlobalStyles";

// Font
import "styles/fonts/roboto.css";

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {AppRoutes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={<route.Component />}
              />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </QueryClientProvider>
  );
};
export default App;
