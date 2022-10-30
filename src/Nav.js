import React, { Component } from 'react'
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import { Button } from "@nextui-org/react";
import {
    NavLink 
  } from "react-router-dom";

  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

export default class Navapp extends Component {
  render() {
    return (
        <><Layout>
        <Navbar isBordered variant="floating">
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand
            css={{
                "@xs": {
                w: "12%"
                },
            }}
            >
            <AcmeLogo />
            <Text b css={{"color":"#0a1416"}} hideIn="xs">
                Andamane
            </Text>
            </Navbar.Brand>
            <Navbar.Content
            enableCursorHighlight
            activeColor="secondary"
            hideIn="xs"
            variant="highlight-rounded"
            >
            <NavLink to="/Explore">
              <Navbar.Link> 
                    Explore
              </Navbar.Link></NavLink>
              <NavLink to="/Stay"><Navbar.Link isActive >
                    Stay
            </Navbar.Link></NavLink>
            <NavLink to="/Fun">
                <Navbar.Link >Fun</Navbar.Link>
                </NavLink>
            </Navbar.Content>
            <Navbar.Content
            css={{
                "@xs": {
                w: "12%",
                jc: "flex-end",
                },
            }}
            >
            <Dropdown placement="bottom-right">
                <Navbar.Item>
                <Dropdown.Trigger>
                    <Avatar
                    bordered
                    as="button"
                    color="secondary"
                    size="md"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                </Dropdown.Trigger>
                </Navbar.Item>
                <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                onAction={(actionKey) => console.log({ actionKey })}
                >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                    <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                    </Text>
                    <Text b color="inherit" css={{ d: "flex" }}>
                    zoey@example.com
                    </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                    My Settings
                </Dropdown.Item>
                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                    Analytics
                </Dropdown.Item>
                <Dropdown.Item key="system">System</Dropdown.Item>
                <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                    Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                    Log Out
                </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
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
        </Navbar>

        <Button.Group color="error" variant="shadow" light css={{"display":"flex","alignContent":"center","justifyContent":"center"}}>
            <NavLink to="/Flight"><Button>Flights</Button></NavLink>
            <NavLink to="/Ship"><Button>Ship</Button></NavLink>
            <NavLink to="/hotel"><Button>Virtual Hotel</Button></NavLink>
            <NavLink to="/bus"><Button>Bus</Button></NavLink>
            <NavLink to="/activity"><Button>Sea Activity</Button></NavLink>
            <NavLink to="/pg"><Button>Paying Guest</Button></NavLink>
            <NavLink to="/travelpg"><Button>Travel Package</Button></NavLink>
            <NavLink to="/cab"><Button>Rental Cab</Button></NavLink>
            <NavLink to="/dinning"><Button>Cruiser Dinning</Button></NavLink>
            <NavLink to="/trekking"><Button>Trekking</Button></NavLink>
        </Button.Group>
                            
        </Layout></>
    )
  }
}
