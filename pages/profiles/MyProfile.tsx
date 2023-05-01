import React from "react";
import AppLayout from "../global/AppLayout";
import { Image, Grid, Row, Col, Rate, Divider, Button, Statistic } from "antd";
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

const { useBreakpoint } = Grid;

interface ProfileProps {
  isMy: boolean;
}

const MyProfile = (props: ProfileProps) => {
  const screens = useBreakpoint();
  const imageSize = screens.xs ? 140 : 200;
  return (
    <AppLayout>
      <Row gutter={[20, 20]}>
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "20px", flex: 3 }}>
                <div
                  style={{
                    fontSize: screens.xs ? "18px" : "25px",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  닉네임입니다
                </div>
                <Divider />
                <div
                  style={{
                    fontSize: screens.xs ? "15px" : "20px",
                    color: "#000",
                  }}
                >
                  소개글입니다 소개글입니다 소개글입니다
                  소개글입니다소개글입니다 소개글입니다소개글입니다 소개글입니다
                  소개글입니다 소개글입니다소개글입니다 소개글입니다소개글입니다
                  소개글입니다 소개글입니다 소개글입니다소개글입니다
                  소개글입니다
                </div>
              </div>
              <Image
                preview={false}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                height={screens.xs ? 140 : 200}
                width={screens.xs ? 140 : 200}
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginLeft: "20px",
                  flex: 1,
                }}
              />
            </div>
          </Col>
        </Row>
        <Col xs={24} sm={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button>수정하기</Button>
          </div>
        </Col>
        <Divider />
        <Col xs={24} sm={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: screens.xs ? "15px" : "20px",
                color: "#000",
                marginRight: "10px",
                marginTop: "3px",
              }}
            >
              Mentor
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: screens.xs ? "15px" : "20px",
                color: "#000",
                marginRight: "10px",
                marginTop: "3px",
              }}
            >
              Mentee
            </div>
            <StyledRating
              name="highlight-selected-only"
              defaultValue={Math.floor(3.9)}
              IconContainerComponent={IconContainer}
              getLabelText={(value: number) => customIcons[value].label}
              highlightSelectedOnly
              readOnly={true}
            />
          </div>
        </Col>
        <Divider />
        <Col xs={24} sm={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Statistic title="이달의 멘토링" value={42} />
            <Statistic title="멘토링" value={112893} />
          </div>
        </Col>
        <Divider />
      </Row>
    </AppLayout>
  );
};

export default MyProfile;
