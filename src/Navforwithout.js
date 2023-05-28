import { Navbar, Text } from "@nextui-org/react";
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const collapseItems = ["Connect With Us", "Contact Us", "About Us"];

const HeadColor = "#3f51b5"; //'#2f4f4f';

export default function Navforwithout() {
  return (
    <Navbar isBordered variant="static" style={{ backgroundColor: "white" }}>
      <Navbar.Content activeColor={"primary"} hideIn="md" variant={"underline"}>
        <Navbar.Link isActive href="/">
          <BiHomeAlt className="w-6 h-6 mr-2" /> Home
        </Navbar.Link>
        <Navbar.Link b href="/">
          <HiOutlineMail className="w-6 h-6 mr-2" /> Contact Us
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
              className="lexs:text-[9vw] text-[40px]"
            >
              Sublime
            </span>
            <span
              className="block lexs:text-[12px] text-center -mt-4"
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
        <Navbar.Link href="/">About Us</Navbar.Link>
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
