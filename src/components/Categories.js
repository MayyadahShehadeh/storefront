import React from 'react';
import  Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import { getData } from '../store/actions/Actions';
import {changeActiveCateg} from '../store/categories';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const Categories = (props)=> {

  
 
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getData()).then(() => {
          dispatch(changeActiveCateg("electronics"))
      })
  }, [dispatch])

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" style={{marginTop:'15px', marginLeft:'10%', fontSize:'30px'}}>
        {props.categories.map((item ,idx)=> {
          return <Link key={idx} color="inherit" onClick={() => { dispatch(changeActiveCateg(item.name)) }}>
          {item.name}</Link>
          
        })}
      </Breadcrumbs>
      <p style={{marginLeft:'10%', fontSize:'20px', marginTop:'2%'}}>{props.categoryType.name}</p>
      <p style={{marginLeft:'10%', fontSize:'20px'}}>{props.categoryType.description}</p>
    </>
  )
}

const mapStateToProps = (state) => {
  return state.categories;
}


export default connect(mapStateToProps)(Categories);