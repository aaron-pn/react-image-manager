import { useCookies } from 'react-cookie';
import { COOKIE_NAME } from '../../utils/contansts';

const Home = () => {
  const [_, setDelete] = useCookies([COOKIE_NAME]);

  const onLogOut = () => {
    setDelete(COOKIE_NAME, '');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen ">
      <h1>Home</h1>
      <button onClick={onLogOut}>Log out</button>
    </div>
  );
};
export default Home;
