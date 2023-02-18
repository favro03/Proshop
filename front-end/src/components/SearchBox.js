import React, {useState }from 'react'
import {Form, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'


const SearchBox = () => {
    const [keyword, setKeyword] = useState('')
    const history = useNavigate()
    const submitHandler=(e) => {
        if(keyword.trim()){
            history(`search/${keyword}`)
        } else {
            history('/')
        }
    }
    return (
        <Form onSubmit={submitHandler} className='form-inline'>
          <Form.Control 
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search Products...'
            className='mr-sm-2 ml-sm-3'
          ></Form.Control>

          <Button type='submit' variant='outline-success' className='p-2'>
            Search
          </Button>
          
        </Form>
      )
    }
export default SearchBox
