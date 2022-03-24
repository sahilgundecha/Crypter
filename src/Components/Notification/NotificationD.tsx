import { Box, Button, Card, Container, Typography } from "@mui/material";
import "./Notification.css";
import Dot from "../../Assets/images/dot.png";
import { cardData } from "../../DB/Notification/NotificationArray";
import { useState } from "react";
import { Link } from "react-router-dom";
const styleRow = {
  display: "flex",
  flexDirection: "row",
  padding: "20px 0px",
};
const styleEnd = {
  display: "flex",
  alignItems: "center",
  marginRight: "40px",
};
const styleFlex = {
  display: "flex",
  justifyContent: "space-between",
  cursor:'pointer'
};

interface cardProps {
  colData: {
    cardIt: {
      id: number;
      mainImg: string;
      ethPrice: string;
      ethRecieved: string;
      days: string;
    }[];
  };
}
interface cardCss extends cardProps {
  Padding?: string;
}

export const NotificationD = () => {
  return (
    <>
      <Card className="card" sx={{ borderRadius: "25px" }}>
        <Box sx={styleFlex}>
          <Typography variant="h5">Notification</Typography>
          <Link to="/Activity " className="linkUnderline">
            <Button className="styleB" variant="contained">
              See All
            </Button>
          </Link>
        </Box>
        <Notification colData={cardData} />
      </Card>
    </>
  );
};

export const Notification = (props: cardCss) => {
  const { cardIt } = props.colData;

  return (
    <div>
      {cardIt.map((props) => {
        return (
          <>
            <Box sx={styleFlex} className="impHover">
              <Box sx={styleRow} key={props.id}>
                <img className="change1" src={props.mainImg} />
                <Box className="styleRec">
                  <Typography className="fontInc">{props.ethPrice}</Typography>
                  <Typography className="ChangeFont">
                    {props.ethRecieved}
                  </Typography>
                  <Typography className="textDark">{props.days}</Typography>
                </Box>
              </Box>
              <Box sx={styleEnd}>
                <img className="change" src={Dot} />
              </Box>
            </Box>
          </>
        );
      })}
    </div>
  );
};
