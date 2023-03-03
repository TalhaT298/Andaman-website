import { Navbar, Text, Avatar, Dropdown } from '@nextui-org/react';
import { Link } from 'react-router-dom';
// import { AcmeLogo } from './AcmeLogo.js';
// import Lottie from 'react-lottie';
// import * as Dolphin from './Icons/dolphin.json';

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

const HeadColor = '#2f4f4f';

export default function Navforwithout() {
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          '@xs': {
            w: '12%',
          },
        }}
      >
        {/* <AcmeLogo /> */}
        <Text b css={{ color: '#699c78' }} hideIn="xs">
          <Link to="/">Sublime Andaman</Link>
        </Text>
        {/* <Lottie options={DolphinIcon} height={70} width={100} /> */}
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
        <NavLink to="/Explore">
          <Navbar.Link>
            <Text h3 size={30} color={HeadColor} weight="bold">
              Explore
            </Text>
          </Navbar.Link>
        </NavLink>
        <NavLink to="/Stay">
          <Navbar.Link>
            <Text h3 size={30} color={HeadColor} weight="bold">
              Stay
            </Text>
          </Navbar.Link>
        </NavLink>
        <NavLink to="/Fun">
          <Navbar.Link>
            <Text h3 size={30} color={HeadColor} weight="bold">
              Fun
            </Text>
          </Navbar.Link>
        </NavLink>
      </Navbar.Content>

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
