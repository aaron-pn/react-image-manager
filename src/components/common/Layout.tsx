import { ChildrenProp } from '@/types';
import Sidebar from './sheet-sidebar';

const Layout: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <main className="p-2 overflow-x-hidden">
      <Sidebar />
      {children}
    </main>
  );
};

export default Layout;
