import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/divnavbar/Navbar";
import { IconCart, IconFacebook, IconInstagram, IconLogin } from "../Navbar/iconos/Iconos";
import StyledMenu from "../Navbar/menu/Menu";
import Div from "../Navbar/divnavbar/DivSecond";
import Logo from "../Navbar/logo/Logo";
import Home from "../pages/home.js";
import Registro from "../pages/registro";
import Tops from "../pages/tops";
import Bottoms from "../pages/bottoms";
import Bikinis from "../pages/bikinis";
import Accesorios from "../pages/accesorios";
import Vestidos from "../pages/vestidos";

const Rutas = () => {
  return (
    <div>
      <Router>
        <Navbar className="color-blue">
          ¡Siguenos!
          <Div>
            <IconFacebook
              className="font-style-up"
              url="https://www.facebook.com/"
            ></IconFacebook>
            <IconInstagram
              className="font-style-up"
              url="https://www.instagram.com/"
            />
          </Div>
        </Navbar>
        <Navbar className="gradient-color">
          <StyledMenu className="fontStyleTitle"></StyledMenu>
          <Logo />
          <Div>
            <IconLogin
              className="font-style2"
              url="registrarse.html"
            ></IconLogin>
            <IconCart className="font-style2" />
          </Div>
        </Navbar>
        <Routes>
            <Route  path='/' element={<Home />} />            
            <Route  path='registro' element={<Registro />}></Route>
            <Route  path='tops' element={<Tops />}></Route>
            <Route  path='bottoms' element={<Bottoms />}></Route>
            <Route  path='accesorios' element={<Accesorios />}></Route>
            <Route  path='bikinis' element={<Bikinis />}></Route>
            <Route  path='vestidos' element={<Vestidos />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Rutas;
