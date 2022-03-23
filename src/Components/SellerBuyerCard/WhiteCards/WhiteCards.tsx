import { useState, FC } from "react";
import { Card, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./WhiteCards.css";
import pluss from "../../../Assets/images/pluss.svg";
import minuss from "../../../Assets/images/minuss.svg";
import arroww from "../../../Assets/images/arroww.svg";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    p: true;
  }
}
interface cardProps {
  whitecardProps: any;
}
const WhiteCards: FC<cardProps> = ({ whitecardProps }) => {
  const [plusimg, changePlusimg] = useState<Boolean>(true);

  const onhandleclick = () => {
    changePlusimg(!plusimg);
  };

  return (
    <>
      <Card
        className="WhiteCard"
        sx={{
          width: "200px",
          borderRadius: "15px",
          background: "#FCFCFD 0% 0% no-repeat padding-box",
          border: "unset",
          boxShadow: "none",
        }}
      >
        <Box sx={{ padding: "10px 10px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottom: "1px solid #B1B5C3",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "60px",

                justifyContent: "space-evenly",
                backgroundColor: whitecardProps.colr,
                borderRadius: "10px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              <img src={whitecardProps.img1} width="14px" />
              <Typography variant="p" color="#ffffff" component="div">
                {whitecardProps.numbers}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <Box>
                {plusimg ? (
                  <img
                    src={pluss}
                    alt="img"
                    className="plusimg"
                    onClick={onhandleclick}
                  />
                ) : (
                  <img
                    src={minuss}
                    alt="img"
                    className="plusimg"
                    onClick={onhandleclick}
                  />
                )}
              </Box>
              <Box>
                <Link to="/profile-page">
                  <img src={arroww} className="plusimg" />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="usercardd">
            <img src={whitecardProps.userimgg} className="userrcard2" />
            <Box>
              <Typography variant="h6" component="div">
                {whitecardProps.name}
              </Typography>
              <Typography variant="p" component="div" fontWeight={"bold"}>
                {whitecardProps.ETHnum} <span className="ethText">ETH</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default WhiteCards;
