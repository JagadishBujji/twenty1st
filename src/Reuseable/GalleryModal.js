import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ModalSwiper from "./ModalSwiper";
import CloseIcon from "@mui/icons-material/Close";
import { fontSize } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  borderRadius: "30px",
};

export default function GalleryModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button>Open modal</Button> */}
      <img
        onClick={handleOpen}
        src={props.modalimage}
        alt=""
        className="modalimage"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="row titlewithicon">
            <Typography
              id="modal-modal-title"
              sx={{
                mb: 2,
                fontSize: "30px",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
              variant="h4"
              component="h2"
              className="modaltitle"
            >
              {props.title}
            </Typography>
            <CloseIcon
              onClick={handleClose}
              sx={{ fontSize: "40px", cursor: "pointer" }}
            />
          </div>

          <ModalSwiper images={props.images} />
        </Box>
      </Modal>
    </div>
  );
}
