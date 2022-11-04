
import { Container } from "@mui/material";
import  TabView from "./Component/TabView.js";
export const Layout = ({ children }) => (
  <Container fluid>  
  
      {children}
      <TabView />
  
    </Container>
);
