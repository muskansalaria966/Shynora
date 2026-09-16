// const multer = require("multer");
// const path = require("path");

// // Storage configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },

//   filename: function (req, file, cb) {
//     const uniqueName =
//       Date.now() + "-" + Math.round(Math.random() * 1E9);

//     cb(
//       null,
//       uniqueName + path.extname(file.originalname)
//     );
//   },
// });

// // Allow only image files
// const fileFilter = (req, file, cb) => {
//   const allowed = /jpg|jpeg|png|webp/;

//   const ext = allowed.test(
//     path.extname(file.originalname).toLowerCase()
//   );

//   const mime = allowed.test(file.mimetype);

//   if (ext && mime) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only image files are allowed"));
//   }
// };

// module.exports = multer({
//   storage,
//   fileFilter,
// });

// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// const uploadPath = path.join(__dirname, "..", "uploads");

// // Create uploads folder automatically
// if (!fs.existsSync(uploadPath)) {
//   fs.mkdirSync(uploadPath, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadPath);
//   },

//   filename: (req, file, cb) => {
//     const extension = path.extname(file.originalname);

//     const filename =
//       Date.now() +
//       "-" +
//       Math.round(Math.random() * 1e9) +
//       extension;

//     cb(null, filename);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedTypes = [
//     "image/jpeg",
//     "image/jpg",
//     "image/png",
//     "image/webp",
//   ];

//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only JPG, JPEG, PNG and WEBP images are allowed"));
//   }
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: {
//     fileSize: 5 * 1024 * 1024,
//   },
// });

// module.exports = upload;

const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadPath = path.join(__dirname, "..", "uploads");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    const filename =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];

  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, JPEG, PNG and WEBP images are allowed"));
  }
};

module.exports = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});