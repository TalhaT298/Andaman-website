import { Navbar, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

const collapseItems = ["Connect With Us", "Blogs", "Contact Us", "About Us"];

const HeadColor = "#3f51b5"; //'#2f4f4f';

export default function Navforwithout() {
  return (
    <Navbar
      isBordered
      variant="static"
      style={{
        backgroundColor: "white",
        fontFamily: "Montserrat",
        fontWeight: "600",
        fontSize: "14px",
      }}
    >
      <Navbar.Content hideIn="md" variant={"underline"}>
        <Navbar.Link href="/">Home</Navbar.Link> |
        <Navbar.Link b href="https://www.sublimeislands.com/blogs/Blogs">
          {" "}
          Blogs
        </Navbar.Link>{" "}
        |
        <Navbar.Link b href="https://www.sublimeislands.com/contact/Contact">
          Contact Us
        </Navbar.Link>
        {/* <Navbar.Link isActive href="#">Customers</Navbar.Link> */}
      </Navbar.Content>
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        {/* <AcmeLogo /> */}
        <Text
          b
          css={{
            color: "#14274A",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          <a href="/">
            <span
              style={{ fontFamily: "IBM Plex Serif", letterSpacing: "0.15em" }}
              className="lexs:text-[10vw] text-[32px]"
            >
              Sublime
            </span>
            <span
              className="block  lexs:text-[10px]  text-[14px] text-center -mt-4"
              style={{
                fontFamily: "Aeonik Pro TRIAL",
                letterSpacing: "0.6rem",
              }}
            >
              Andaman
            </span>
          </a>
        </Text>
        {/* <Lottie options={DolphinIcon} height={70} width={100} /> */}
      </Navbar.Brand>
      <Navbar.Content
        css={{
          "@xs": {
            w: "20%",
            jc: "flex-end",
          },
        }}
        activeColor={"primary"}
        hideIn="md"
        variant={"underline"}
      >
        <Navbar.Link href="/">Connect With Us</Navbar.Link> |
        <Navbar.Link href="https://www.sublimeislands.com/about/About">About Us</Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>

      <Navbar.Toggle showIn="md" />
    </Navbar>
  );
}
