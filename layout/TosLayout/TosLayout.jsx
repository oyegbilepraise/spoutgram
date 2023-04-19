import { TosNav } from '../../components';

const TosLayout = ({ children  }) => {
  return (
    <>
      <TosNav/>
      {children}
    </>
  )
} 
 
export default TosLayout;