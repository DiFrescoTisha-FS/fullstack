import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import axios from "axios";
import Comments from "../../images/placeholder1.jpg";
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
  SubmitButton,
  CommentBtnWrapper,
} from "./CommentSectionElements"; // You'll need to define these styled components
// import StarBackground2 from '../starbackground2/StarBackground2';
// import CommentsTwinkling from "./CommentsTwinkling"

const CommentSection = ({ backgroundImage }) => {
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

  return (
    <CommentSectionContainer id="comments">
      <CommentsBg>
        {/* <StarBackground2 /> */}
        {/* <CommentsTwinkling /> */}
      </CommentsBg>
      <CommentWrapper onSubmit={handleCommentSubmit}>
        <CommentRow>
          <ImgWrap>
            <Img src={Comments} alt="Artist wearing no shirt" />
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
        {/* <ComboImage src="https://i.imgur.com/O1Exmw2.png" alt="Neptune" /> */}
      </CommentWrapper>
    </CommentSectionContainer>
  );
};

export default CommentSection;
