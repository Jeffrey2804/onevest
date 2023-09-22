import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import { authAxiosHelper } from '../../Helpers/axiosHelper';
import { Box, Button, Text } from '@chakra-ui/react';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';

const Comment = ({ comments, setComments }) => {
  // const [comments, setComments] = useState([]);
  const commentsPerPage = 5; // Number of comments to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the starting and ending indices for the current page
  const startIndex = (currentPage - 1) * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;

  // Slice the comments array to display only the comments for the current page
  const commentsToShow = comments.slice().reverse().slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Handle pagination navigation
  const nextPage = () => {
    if (endIndex < comments.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };



  return (
    <div className=" mt-4">
      <div className="w-full bg-[white] px-4 rounded-lg pb-5">
        {commentsToShow.map((comment, index) => (
          <CommentCard key={index} isLast={index === commentsToShow.length - 1} data={comment} />
        ))}
      </div>
      <Box display="flex" justifyContent="space-between" width="90%" margin="auto" color="white">
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div>
          {pageNumbers.map((page) => (
            <Button
              key={page}
              bg={currentPage === page ? "blue-600" : ""}
              className={`${currentPage === page
                ? 'bg-blue-600 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-black'
                } px-3 py-2 rounded`}
              _hover={{ bg: "white", color: "black" }}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
        </div>
        <Button
          className="bg-blue-500 hover.bg-blue-600 text-black px-4 py-2 rounded"
          onClick={nextPage}
          disabled={endIndex >= comments.length}
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default Comment;
