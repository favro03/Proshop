import React, {useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import {usseDispatch, useSelector, useDispatch } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import { listProductsDetails } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'


const ProductScreen = ({}) => {
    const params = useParams();
    const dispatch = useDispatch()
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product} = productDetails
   
   
    useEffect(() =>{
        
        dispatch(listProductsDetails(params.id))

       
        // const fetchProduct = async () => {
        //     //axios is another tool for fetch
        //   const {data} = await axios.get(`/api/products/${params.id}`)
        //   setProduct(data)
        // }
        // fetchProduct()
        }, [dispatch, params])

    //this was used to pull product data from the products.js file
    // const params =  useParams();
    // const product = products.find(p => p._id === params.id)
  
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
      <Loader /> 
      ): error ? (
      <Message variant='danger'>{error}</Message>) 
      :(
        <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating 
                        value={product.rating} 
                        text={`${product.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Price
                            </Col>
                            <Col>
                                <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Status
                            </Col>
                            <Col>
                                {product.countInStock >0 ? 'InStock' : 'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add to Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
      </Row>
      )}
      
    </>
  )
}

export default ProductScreen
