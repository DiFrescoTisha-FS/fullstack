import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import axios from "axios";
import Shirtless from "../../images/shirtless.png"; // Adjust based on the package you choose
import {
  CommentSectionContainer,
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
} from "./CommentSectionElements"; // You'll need to define these styled components

const CommentSection = ({ backgroundImage, lightText }) => {
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
    <CommentSectionContainer backgroundImage="backgroundImage">
      <CommentWrapper onSubmit={handleCommentSubmit}>
        <CommentRow>
          <ImgWrap>
            <Img src={Shirtless} alt="Artist wearing no shirt" />
          </ImgWrap>
          <TextWrapper>
            <TopLine>Bam Fans</TopLine>
            <Heading>Before you go...</Heading>
            <Subtitle>Bam fans can now leave a comment for Trapstar Bam.<br/>And don't forget to rate your galaxy tour!<br/>Thanks for stopping by.<br/>(You must me signed in to leave a comment.)</Subtitle>
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
              <SubmitButton type="submit">Submit</SubmitButton>
            </FormWrap>
          </TextWrapper>
        </CommentRow>
      </CommentWrapper>
    </CommentSectionContainer>
  );
};

export default CommentSection;
