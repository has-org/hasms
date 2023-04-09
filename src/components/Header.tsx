
import SearchAppBar from "./MUI/SearchAppBar";


type HeaderProps = {
  children?: React.ReactNode
}
const Header = ({ children }: HeaderProps) => {

  return (

    <div className="header">
      <SearchAppBar />
    </div>

  );
}
export default Header;