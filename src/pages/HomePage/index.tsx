import React, { useState } from "react";
import CardPage from "../../pages/CardPage";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel, {a11yProps} from "../../components/atoms/TabPanel";
import logo1 from "../../images/img1.jpg";
import logo2 from "../../images/img2.jpg";
import logo3 from "../../images/img3.webp";
import logo4 from "../../images/img4.jpg";
import logo5 from "../../images/img5.jpg";
import logo6 from "../../images/img6.jpg";
import logo7 from "../../images/img7.jpg";
import logo8 from "../../images/img8.jpg";
import logo9 from "../../images/img9.jpg";
import Header from '../../components/molecules/Header';
import Footer from '../../components/molecules/Footer';

const HomePage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (event: any, newValue: any) => {
    setTabIndex(newValue);
  };
  const [books, setBooks] = useState([
    {
      image: logo1,
      title: "Beyond Enterpreneurship",
      author: "Jim Collins & Bill Lazier",
      readTime: "13-minute read",
      finish: false,
      id: 1,
    },
    {
      image: logo2,
      title: "Bring Your Human to Work",
      author: "Erica Keswin",
      readTime: "20-minute read",
      finish: false,
      id: 2,
    },
    {
      image: logo3,
      title: "Employee to Enterpreneur",
      author: "Steve Glaveski",
      readTime: "15-minute read",
      finish: false,
      id: 3,
    },
    {
      image: logo4,
      title: "Doesn't Hurt to Ask",
      author: "Trey Gowdy",
      readTime: "13-minute read",
      finish: false,
      id: 4,
    },
    {
      image: logo5,
      title: "The Fate of Food",
      author: "Amanda Little",
      readTime: "12-minute read",
      finish: false,
      id: 5,
    },
    {
      image: logo6,
      title: "Lives of the Stoics",
      author: "Ryan Holiday",
      readTime: "15-minute read",
      finish: false,
      id: 6,
    },
    {
      image: logo7,
      title: "Loving Your Business",
      author: "Debbie King",
      readTime: "13-minute read",
      finish: false,
      id: 7,
    },
    {
      image: logo8,
      title: "The Lonely Century",
      author: "Noreena Hertz",
      readTime: "13-minute read",
      finish: false,
      id: 8,
    },
    {
      image: logo9,
      title: "Eat Better, Feel Better",
      author: "James Moore",
      readTime: "15-minute read",
      finish: false,
      id: 9,
    },
  ]);
  return (
    <>
    <Header/>

    <b><h2 style={{ marginLeft: 230 }}>My Library</h2></b>

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}} style={{ marginLeft: 220 }}>
        <Tabs TabIndicatorProps={{style: {background:'#3CBC3C'}}} value={tabIndex} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{ color: "#3CBC3C", width: 340 }} label="Currently reading" {...a11yProps(0)} />
          <Tab style={{ color: "#3CBC3C", width: 340 }} label="finished" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} index={0}>
        <CardPage books={books.filter(book => !book.finish)} setBooks={setBooks}/>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
      <CardPage books={books.filter(book => book.finish)} setBooks={setBooks}/>
      </TabPanel>
    </Box>

    <Footer/>
    </>
  );
};

export default HomePage;