import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())//this will give us a true or false that it matches our extention list
  const mimetype = filetypes.test(file.mimetype) //must have our filetype in the mime

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}
//if you just put storage it will allow any type of uplooad
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

router.post('/', upload.single('image'), (req, res) => {  //can do many uploads if we want but here we only want one
  res.send(`/${req.file.path}`)
})

export default router
