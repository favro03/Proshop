import  express  from "express";
import { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders} from '../controllers/orderController.js'
import {protect} from '../middleware/authMiddleware.js'
const router = express.Router()


router.route('/').post(protect, addOrderItems)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById) //this one needs to be at the bottom of the code
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router
