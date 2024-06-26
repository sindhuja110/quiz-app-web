import React, { useState } from "react";
import { Col, Modal, Button, Row } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  useDeleteCarosuelMutation,
  useGetSettingImageQuery,
} from "../../redux/features/api/SettingPageApi";
import { toast } from "react-toastify";
import axios from "axios";
import Header from "../../../src/components/Header";
import DeleteModel from "../../../src/components/DeleteModel";

const Setting = () => {
  const [deleteShow, setDeleteShow] = useState(false);
  const [indexToDelete, setindexToDelete] = useState("");
  const { data: imageData, isLoading, isError } = useGetSettingImageQuery();
  const [showModal, setShowModal] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imageKey, setImageKey] = useState("");
  const [carouselModalOpen, setCarouselModalOpen] = useState(false);
  const [updatecarouselModalOpen, setUpdateCarouselModalOpen] = useState(false);
  const [carouselImageFile, setCarouselImageFile] = useState(null);
  const [deleteCarosuel] = useDeleteCarosuelMutation();

  const handleEditClick = (identifier) => {
    const [sectionIndex, imageIndex] = identifier.split("-");
    const sectionDataKeys = [
      ["referralBanner", "ratingBanner"],
      Object.keys(settingData.carousel),
      [
        "engineImage",
        "feedbackImage",
        "pnrImage",
        "walletImage",
        "defaultImage",
        "coachImage",
        "liveTrainGif",
      ],
    ];
    const imageKey = sectionDataKeys[sectionIndex][imageIndex];
    setImageKey(imageKey);
    if (sectionIndex === "1") {
      setUpdateCarouselModalOpen(true);
    } else {
      setShowModal(true);
    }
  };

  // const handleDeleteClick = (identifier) => {
  //   // Implement delete functionality here
  //   // Example: delete image from carousel
  //   console.log("Delete image with identifier:", identifier);
  // };

  const deleteHandleClose = () => setDeleteShow(false);

  const deleteHandleShow = (index) => {
    setindexToDelete(index);
    setDeleteShow(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleCarouselImageUpload = (e) => {
    const file = e.target.files[0];
    setCarouselImageFile(file);
  };
  const handleCloseModal = () => {
    setImageKey("");
    setShowModal(false);
    setImageFile(null);
  };

  const handleCarouselModalClose = () => {
    setCarouselModalOpen(false);
    setCarouselImageFile(null);
  };
  const handleCarouselUpdateModalClose = () => {
    setUpdateCarouselModalOpen(false);
    setImageFile(null);
  };

  const handleUpdateImage = async () => {
    console.log("Attempting to update image...");
    console.log("Image File:", imageFile);

    if (!imageFile) {
      return;
    }

    const formData = new FormData();
    formData.append(imageKey, imageFile);

    try {
      const response = await axios.patch(
        `https://api-trainsonwheels.onrender.com/admin/updateBanner/65bca70d45f5ff99f43a2a57`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response);

      if (response && response.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        setImageFile(null);
        setShowModal(false);
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        setImageFile(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCarouselUpload = async () => {
    console.log("Attempting to update image...");
    console.log("Image File:", carouselImageFile);

    if (!carouselImageFile) {
      return;
    }

    const formData = new FormData();
    formData.append("carousel", carouselImageFile);

    try {
      const response = await axios.patch(
        `https://api-trainsonwheels.onrender.com/admin/addCarousel/65bca70d45f5ff99f43a2a57`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response);

      if (response && response.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        setCarouselImageFile(null);
        setCarouselModalOpen(false);
        window.location.reload();
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        setCarouselImageFile(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCarouselUpdate = async () => {
    console.log("Attempting to update image...");
    console.log("Image File:", imageFile);
    console.log("Image key:", imageKey);

    if (!imageFile) {
      return;
    }

    const formData = new FormData();
    formData.append(imageKey, imageFile);

    try {
      const response = await axios.patch(
        `https://api-trainsonwheels.onrender.com/admin/updateCarousel/65bca70d45f5ff99f43a2a57`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response);

      if (response && response.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        setImageFile(null);
        setUpdateCarouselModalOpen(false);
        window.location.reload();
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        setImageFile(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteStation = async () => {
    try {
      const response = await deleteCarosuel(indexToDelete);
      console.log(indexToDelete);
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        setDeleteShow(false);
        setindexToDelete("");
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        setDeleteShow(false);
        setindexToDelete("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (isLoading) return <p>Loading...</p>;
  if (isError) {
    console.error("Error fetching image data:", isError);
    return <p>Error fetching data</p>;
  }

  if (
    !imageData ||
    !imageData.data ||
    !Array.isArray(imageData.data) ||
    imageData.data.length === 0
  ) {
    console.warn(
      "Image data is missing or not in the expected format:",
      imageData
    );
    return <p>No image data available</p>;
  }

  const settingData = imageData.data[0];

  return (
    <>
      <Col className="">
        <Row className="mt-4">
          <Col>
            <Header
              ONCLICK={() => setCarouselModalOpen(true)}
              HEADING="Settings"
              BUTTON_NAME="Add Carousel Image"
            />
          </Col>
        </Row>
        <hr className="mt-3 bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 " />
        {[
          {
            images: [settingData.referralBanner, settingData.ratingBanner],
            altTexts: ["Referral Banner", "Rating Banner"],
          },
          {
            images: settingData.carousel,
            altTexts:
              settingData.carousel &&
              settingData.carousel.map(
                (_, index) => `Carousel Image ${index + 1}`
              ),
          },
          {
            images: [
              settingData.engineImage,
              settingData.feedbackImage,
              settingData.pnrImage,
              settingData.walletImage,
              settingData.defaultImage,
              settingData.coachImage,
              settingData.liveTrainGif,
            ],
            altTexts: [
              "Engine Image",
              "Feedback Image",
              "PNR Image",
              "Wallet Image",
              "Default Image",
              "Coach Image",
              "Live Train GIF",
            ],
          },
        ].map(
          (section, sectionIndex) =>
            section.images && (
              <React.Fragment key={sectionIndex}>
                <Col className="d-flex flex-row justify-content-between mt-5">
                  <h4
                    className="fw-bold"
                    style={{ color: "#0077B2", border: "none" }}
                  >
                    {sectionIndex === 0
                      ? "BANNER IMAGES:"
                      : sectionIndex === 1
                      ? "CAROUSEL IMAGES:"
                      : "DEFAULT IMAGES:"}
                  </h4>
                </Col>
                <Col
                  xs={12}
                  className="mt-3 d-flex flex-row flex-wrap justify-content-start align-items-center"
                >
                  {section.images.map(
                    (image, index) =>
                      image && (
                        <div key={index} className="image-container">
                          <img
                            src={image}
                            alt={section.altTexts[index]}
                            style={{
                              margin: "15px",
                              height:
                                sectionIndex === 2 && index === 6
                                  ? "250px"
                                  : "200px",
                              width: "100%",
                              maxWidth:
                                sectionIndex === 2 && index === 6
                                  ? "250px"
                                  : "350px",
                            }}
                          />
                          <div className="icon-container">
                            <FaEdit
                              className="edit-icon"
                              onClick={() =>
                                handleEditClick(`${sectionIndex}-${index}`)
                              }
                            />
                            {sectionIndex === 1 && (
                              <FaTrash
                                className="delete-icon deleteicon-container"
                                onClick={() => deleteHandleShow(index)}
                              />
                            )}
                          </div>
                        </div>
                      )
                  )}
                </Col>
              </React.Fragment>
            )
        )}
      </Col>

      {/* Carousel Image Upload Modal */}
      <Modal
        show={carouselModalOpen}
        onHide={handleCarouselModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Carousel Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="file"
            accept="image/*"
            onChange={handleCarouselImageUpload}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCarouselModalClose}>
            Close
          </Button>
          <Button
            style={{ backgroundColor: "#0077B2", border: "none" }}
            onClick={handleCarouselUpload}
          >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Image Update Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title> Update Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCarouselUpdateModalClose}>
            Close
          </Button>
          <Button
            style={{ backgroundColor: "#0077B2", border: "none" }}
            onClick={handleUpdateImage}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={updatecarouselModalOpen}
        onHide={handleCarouselUpdateModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Carosuel Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCarouselUpdateModalClose}>
            Close
          </Button>
          <Button
            style={{ backgroundColor: "#0077B2", border: "none" }}
            onClick={handleCarouselUpdate}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <DeleteModel
        YES={deleteStation}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Are you sure you want to delete this Carosuel"
        DELETETITLE="Carosuel"
      />
    </>
  );
};

export default Setting;
