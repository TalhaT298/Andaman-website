import { Container } from "@mui/material";
import TabView from "./Component/TabView.js";
import Footer from "./Component/Footer/Footer.js";
import Navforwithout from "./Navforwithout.js";
export const Layout = ({ children }) => (
  <>
  <Navforwithout/>
  <Container true>
    {children}
    <TabView />
  </Container>
    <Footer />
  </>
);
