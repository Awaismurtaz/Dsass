import "./assets/App.scss";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/public/Login";
import SignUp from "./pages/public/SignUp";
import ForgotPassword from "./pages/public/ForgotPassword";
import ResetPassword from "./pages/public/ResetPassword";
import OtpCode from "./pages/public/OtpCode";
import SideBarMenu from "./pages/private/SideBarMenu";
import MainContent from "./pages/private/MainContent";
import JobList from "./pages/private/JobList";
import PasswordSecurity from "./pages/private/setting/PasswordSecurity";
import Setting from "./pages/private/setting/Setting";
import BasicDetails from "./pages/private/setting/BasicDetails";
import Notification from "./pages/private/setting/Notification";
import Themes from "./pages/private/setting/Themes";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/OtpCode" element={<OtpCode />} />
        <Route path="/joblisting" element={<SideBarMenu />}>
          <Route path="MachtingCandidates" element={<MainContent />} />
          <Route path="joblist" element={<JobList />} />
        </Route>
        <Route path="/setting" element={<Setting />}>
          <Route path="basicdetails" element={<BasicDetails />} />
          <Route path="passwords&security" element={<PasswordSecurity />} />
          <Route path="notification" element={<Notification />} />
          <Route path="theme" element={<Themes />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
