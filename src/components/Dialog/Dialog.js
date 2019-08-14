import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const SiteDialog = ({ open, handleDialogToggle, title, action, children }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => handleDialogToggle(false)}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
      >
        {title && <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>}
        <DialogContent dividers>
          <DialogContentText>{children}</DialogContentText>
        </DialogContent>
        {action && <DialogActions>{action}</DialogActions>}
      </Dialog>
    </div>
  );
};

SiteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDialogToggle: PropTypes.func.isRequired,
  title: PropTypes.any,
  action: PropTypes.any,
  children: PropTypes.any.isRequired
};

SiteDialog.defaultProps = {
  open: false,
  handleDialogToggle: () => {},
  children: "Sample Dialog"
};

export default SiteDialog;
