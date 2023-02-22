import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ModalSwiper from "./ModalSwiper";

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
  borderRadius: "30px"
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
          <Typography id="modal-modal-title" sx={{mb:2}} variant="h4" component="h2">
            {props.title}
          </Typography>
          <ModalSwiper
            imagecaro1="../images/sf-1.jpg"
            imagecaro2="../images/sf-2.jpg"
            imagecaro3="../images/sf-3.jpg"
            imagecaro4="../images/sf-4.jpg"
            imagecaro5="../images/sf-5.jpg"
          />
        </Box>
      </Modal>
    </div>
  );
}
