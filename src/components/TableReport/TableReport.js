import React from "react";
import PropTypes from "prop-types";

const TableReport = ({ tableData }) => {
  return <p>Table Report</p>;
};

TableReport.propTypes = {
  tableData: PropTypes.object.isRequired
};

TableReport.defaultProps = {
  tableData: {}
};

export default TableReport;
