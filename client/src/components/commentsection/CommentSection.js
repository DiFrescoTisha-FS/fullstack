import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import axios from "axios";
// import { Clouds } from "../twinklingbackground/TwinklingBackground";
import commentsDesktopImage from '../../images/commentsDesktop5.png';
import commentsTabletImage from '../../images/commentsTablet.png';
import commentsMobileImage from '../../images/commentsMobile1.png'; 
import Comments from "../../images/placeholder3.png";
import TwinklingBackground from '../twinklingbackground/TwinklingBackground'
import { BsSendFill } from "react-icons/bs";
import { Button } from "../ButtonElements"; // Adjust based on the package you choose
import {
  CommentSectionContainer,
  CommentsBg,
  CommentWrapper,
  CommentRow,
  ImgWrap,
  Img,
  TextWrapper,
  FormWrap,
  TopLine,
  Heading,
  Subtitle,
  TextArea,
  CommentBtnWrapper,
CommentCloud1,
CommentCloud2,
CommentCloud3,
CommentCloud4,
CommentCloud5,
CommentCloud6,
} from "./CommentSectionElements"; // You'll need to define these styled components
// import StarBackground2 from '../starbackground2/StarBackground2';
// import CommentsTwinkling from "./CommentsTwinkling"

const CommentSection = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // This function is called when the rating changes
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // This function is called when the comment changes
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // This function is called when the form is submitted
  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/comment-rating", {
        comment,
        rating,
      });
      console.log("Comment and rating submitted successfully!", response.data);
      setRating(0); // Reset rating
      setComment(""); // Reset comment
    } catch (error) {
      console.error("Failed to submit comment and rating", error);
    }
  };

  // const backgroundImage = commentsDesktop;


  return (
    <CommentSectionContainer id="comments">
      <TwinklingBackground />
      {/* <Clouds style={{zIndex: '10'}} /> */}
      <CommentsBg
        backgroundImageDesktop={commentsDesktopImage}
        backgroundImageTablet={commentsTabletImage}
        backgroundImageMobile={commentsMobileImage}
      />
        {/* <CommentCloud1 style={{ zIndex: '10' }} />
        <CommentCloud2 style={{ zIndex: '10' }} /> */}
        {/* <CommentCloud3 style={{ zIndex: '10' }} /> */}
        {/* <CommentCloud4 style={{ zIndex: '10' }} /> */}
        {/* <CommentCloud5 style={{ zIndex: '10' }} /> */}
        {/* <CommentCloud6 style={{ zIndex: '10' }} /> */}
      <CommentWrapper style={{zIndex: '20'}} onSubmit={handleCommentSubmit}>
        <CommentRow>
        <ImgWrap>
            <Img src={Comments} alt="Artist singing in studio" />
          </ImgWrap>
        <TextWrapper>
            <TopLine>Bam Fans</TopLine>
            <Heading>Before you go...</Heading>
            <Subtitle>
              Leave a comment for Trapstar Bam, and
              <br /> rate your galaxy tour!
              <br />
              Thanks for stopping by.
              <br />
              (You must me signed in to leave a comment.)
            </Subtitle>
            <FormWrap onSubmit={handleCommentSubmit}>
              <Rating
                value={rating}
                onChange={handleRatingChange} // Bind the handler here
              />
              <TextArea
                placeholder="Leave your comment here"
                value={comment}
                onChange={handleCommentChange}
              />
              <CommentBtnWrapper>
                <Button
                  to=""
                type="submit"
                $primary="true"
                $dark="true"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                  {"Send"}&nbsp;&nbsp;{<BsSendFill size={20} />} 
              </Button>
              </CommentBtnWrapper>
            </FormWrap>
          </TextWrapper>

        </CommentRow>
      </CommentWrapper>
    </CommentSectionContainer>
  );
};

export default CommentSection;
