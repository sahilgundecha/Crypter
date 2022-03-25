import { FC } from "react";
import Bidcard from "./Bidcard";
import Data from "../../DB/BidCard/BidcardArray";
import Carousel from "react-elastic-carousel";
import { Button, Container, Typography, Box } from "@mui/material";
import leftArrow from "../../Assets/images/Left.svg";
import rightArrow from "../../Assets/images/RightArrow.svg";
import "./bidcard.css";

interface cardProps {
  id: number;
  mainImg: string;
  artName: string;
  ETH: number;
  inStock: number;
  highestBid: number;
  bidtype: string;
}
const breakPoints = [
  { width: 1, itemsToShow: 1.2 },
  { width: 380, itemsToShow: 2 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1000, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
  { width: 1500, itemsToShow: 4 },
  { width: 1920, itemsToShow: 4 },
  { width: 2600, itemsToShow: 4 },
];
interface forArrow {
  type?: any;
  onClick?: any;
  isEdge?: any;
}
const Carosel = () => {
  const myArrow: FC<forArrow> = ({ type, onClick, isEdge }) => {
    const pointer: object =
      type === "PREV" ? (
        <img src={leftArrow} className="leftarrow" />
      ) : (
        <img src={rightArrow} className="rightarrow" />
      );
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    );
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box className="headText">
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            Hot bid
          </Typography>
        </Box>
      </Container>
      <Carousel
        isRTL={false}
        breakPoints={breakPoints}
        pagination={false}
        renderArrow={myArrow}
        className="bidcardCarosel"
      >
        {Data.map((item, index) => (
          <Bidcard cardData={item} key={index} />
        ))}
      </Carousel>
    </>
  );
};

export default Carosel;
