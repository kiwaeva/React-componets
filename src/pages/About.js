import Tabs from "../components/Tabs";
import Tab from "../components/Tab";
import '../index.css';

const About=({}) => {
  return (
  <>
  <h1 className="about-title">About Page</h1>
  <Tabs>
    <Tab title="Example">This is my first tab</Tab>
    <Tab title="Example2">This is my second tab</Tab>
    <Tab title="Example3">This is my third tab</Tab>
  </Tabs>
  </>
)};

export default About;