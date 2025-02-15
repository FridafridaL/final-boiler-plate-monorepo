import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound/NotFound";
import { LandingPage } from "../pages/LandingPage/Landingpage";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { PostStory } from "../components/PostStory/PostStory";
import { StoryList } from "../components/StoryList/StoryList";
import { Carousel } from "../components/Carousel/Carousel";
import { MapPage } from "../pages/MapPage/MapPage";
import { Mapcard } from "../components/Map/Mapcard";

const routes = (
  <Routes>
    <Route path="/" element={<LandingPage />}>
      <Route index element={<Carousel />} />{" "}
      {/*Default content for Landingpage */}
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/post-story" element={<PostStory />} />
      <Route path="/story-list" element={<StoryList />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/stories/:id" element={<Mapcard />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);
export default routes;
