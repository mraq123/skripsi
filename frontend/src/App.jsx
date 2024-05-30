import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { TextToSpeech } from "./pages/TextToSpeech";
import Login from "./pages/Login";
import UsersList from "./pages/UsersList";
import { Audio } from "./pages/Audio";
import Schedule from "./pages/Schedule";
import Library from "./pages/Library";
import Playtime from "./pages/Playtime";
import AddUsers from "./pages/AddUsers";
import EditUsers from "./pages/EditUsers";
import AddAudio from "./pages/AddAudio";
import EditAudio from "./pages/EditAudio";
import AddSchedule from "./pages/AddSchedule";
import EditSchedule from "./pages/EditSchedule";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Login />} path="/" />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<TextToSpeech />} path="/texttospeech" />
            <Route element={<UsersList />} path="/users" />
            <Route element={<Audio />} path="/audio" />
            <Route element={<Schedule />} path="/schedule" />
            <Route element={<Library />} path="/library" />
            <Route element={<Playtime />} path="/playtime" />
            {/* users */}
            <Route element={<AddUsers />} path="/addusers" />
            <Route element={<EditUsers />} path="/editusers/:id" />
            {/*  */}

            {/* audio */}
            <Route element={<AddAudio />} path="/addaudio" />
            <Route element={<EditAudio />} path="/editaudio/:id" />
            {/*  */}

            {/* SCHEDULE */}
            <Route element={<AddSchedule />} path="/addschedule" />
            <Route element={<EditSchedule />} path="/editschedule/:id" />
            {/*  */}

            {/* Profile */}
            <Route element={<Profile />} path="/profile" />
            {/*  */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
