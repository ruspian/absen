import React from "react";
import { Button } from "./ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ totalPage, currentPage, handlePagination }) => {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePagination("prev")}
        disabled={currentPage <= 1} // Disable kalo di halaman 1
        className="cursor-pointer"
      >
        <FaArrowLeft />
      </Button>
      <span className="text-sm text-muted-foreground">
        {currentPage} dari {totalPage} Halaman
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePagination("next")}
        disabled={currentPage >= totalPage} // Disable kalo di halaman terakhir
        className="cursor-pointer"
      >
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default Pagination;
