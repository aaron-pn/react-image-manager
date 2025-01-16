import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Home, Image, LogOut } from 'lucide-react';
import { useCookies } from 'react-cookie';
import { COOKIE_NAME } from '../../utils/contansts';
import { Button } from '../ui/button';

export const MENU = [
  {
    title: 'Images',
    url: '/',
    icon: Home,
  },
  {
    title: 'My images',
    url: '/my-images',
    icon: Image,
  },
];

const AppSidebar = () => {
  const [_, setDelete] = useCookies([COOKIE_NAME]);

  const onLogOut = () => {
    setDelete(COOKIE_NAME, '');
  };

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarMenu>
          {MENU.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Button onClick={onLogOut}>
          <LogOut />
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
