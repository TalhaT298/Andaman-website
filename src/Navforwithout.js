import { Navbar, Text, Avatar, Dropdown } from '@nextui-org/react';
import { Link } from 'react-router-dom';
// import { AcmeLogo } from './AcmeLogo.js';
// import Lottie from 'react-lottie';
// import * as Dolphin from './Icons/dolphin.json';
import {CgHome} from 'react-icons/cg'
import { NavLink } from 'react-router-dom';

const collapseItems = [
  'Profile',
  'Dashboard',
  'Activity',
  'Analytics',
  'System',
  'Deployments',
  'My Settings',
  'Team Settings',
  'Help & Feedback',
  'Log Out',
];

// const DolphinIcon = {
//   loop: true,
//   autoplay: true,
//   animationData: Dolphin,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMid slice',
//   },
// };

const HeadColor = '#3f51b5'; //'#2f4f4f';

export default function Navforwithout() {

  return (
    <Navbar isBordered variant="static">
      <Navbar.Toggle showIn="xs" />
 
      <Navbar.Content activeColor={"primary"} hideIn="xs" variant={"underline"}>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          
        </Navbar.Content>
      <Navbar.Brand
        css={{
          '@xs': {
            w: '12%',
          },
        }}
      >
        {/* <AcmeLogo /> */}
        <Text b css={{ color: '#14274A' }} >
          <Link to="/">Sublime Andaman</Link>
        </Text>
        {/* <Lottie options={DolphinIcon} height={70} width={100} /> */}
      </Navbar.Brand>
      <Navbar.Content
        css={{
          '@xs': {
            w: '12%',
            jc: 'flex-end',
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
            <Dropdown.Item key="profile" css={{ height: '$18' }}>
              <Text b color="inherit" css={{ d: 'flex' }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: 'flex' }}>
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
              color: index === collapseItems.length - 1 ? '$error' : '',
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
