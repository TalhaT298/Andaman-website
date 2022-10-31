
import { Box } from "./Box.js";
import  TabView from "./Component/TabView.js";
export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <TabView />
  </Box>
);
